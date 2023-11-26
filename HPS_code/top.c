#include "top.h"

// VGA screen resolution
#define WIDTH 640
#define HEIGHT 480

// max bodies count
#define NUM_BODIES_MAX 4000 

// number of buttons
#define NUM_BUTTONS  8

// if the FPGA is being used for the gravity calculations
#define FPGA_ON_DEFAULT 1
int fpga_on = FPGA_ON_DEFAULT;


// number of bodies
int NUM_BODIES = 0;


// current map index
int curr_map_index = 0;

// time step for integration
#define TIME_STEP_DEFAULT 0.1 // in seconds
float time_step = TIME_STEP_DEFAULT;

// pixel to meters conversion
#define PIXEL_TO_MT_DEFAULT 1 // 1 is 1 MT
int pixel_to_mt = PIXEL_TO_MT_DEFAULT;

// array of particles
particles bodies[NUM_BODIES_MAX];

// array of buttons
buttons button[NUM_BUTTONS];

mouse_clicks mouse_data = {0, 0, 0, 0, 0};
cursor_on_vga vga_cursor_data = {0, 0, 320, 240}; // start from middle

// x acceleration
#define X_ACCELERATION_PIO 0x00000000
volatile unsigned int *x_acceleration_ptr = NULL;

// y acceleration
#define Y_ACCELERATION_PIO 0x00000010
volatile unsigned int *y_acceleration_ptr = NULL;

// FPGA done - when the FPGA is done calculating the gravity
#define FPGA_DONE_PIO 0x00000020
volatile unsigned int *fpga_done_ptr = NULL;

///////////////////////////////////////////////////////////////
///////////////////// VALUES SENT TO FPGA /////////////////////
///////////////////////////////////////////////////////////////

// reset
#define RESET_PIO 0x00000030
volatile unsigned int *reset_ptr = NULL;
// no value since gets written to directly

// object count
#define OBJECT_COUNT_PIO 0x00000040
volatile unsigned int *object_count_ptr = NULL;
// no value since gets written to directly

// index - write address for the celestial bodies
//         read address for the celestial bodies when recieving
#define INDEX_OUT_PIO 0x00000050
volatile unsigned int *index_out_ptr = NULL;
// no value since gets written to directly

// x - float
#define X_PIO 0x00000060
volatile unsigned int *x_loc_ptr = NULL;
// no value since gets written to directly

// y - float
#define Y_PIO 0x00000070
volatile unsigned int *y_loc_ptr = NULL;
// no value since gets written to directly

// mass - float
#define MASS_PIO 0x00000080
volatile unsigned int *mass_ptr = NULL;
// no value since gets written to directly

// write enable - true starts fill phase in FPGA
#define WRITE_ENABLE_PIO 0x00000090
volatile unsigned int *write_enable_ptr = NULL;
// no value since gets written to directly

// send enable - send index, FPGA sends the data back, read data, increment index
#define SEND_ENABLE_PIO 0x000000a0
volatile unsigned int *send_enable_ptr = NULL;
// no value since gets written to directly

// the light weight bus base
void *h2p_lw_virtual_base;
int fd; // file handling

void PIO_SETUP(){
    // === get FPGA addresses ==================
    // Open /dev/mem
	if( ( fd = open( "/dev/mem", ( O_RDWR | O_SYNC ) ) ) == -1 ) 	{
		printf( "ERROR: could not open \"/dev/mem\"...\n" );
		return;
	}
    
    // get virtual addr that maps to physical
	// for light weight bus
	h2p_lw_virtual_base = mmap( NULL, HW_REGS_SPAN, ( PROT_READ | PROT_WRITE ), MAP_SHARED, fd, HW_REGS_BASE );	
	if( h2p_lw_virtual_base == MAP_FAILED ) {
		printf( "ERROR: mmap1() failed...\n" );
		close( fd );
		return;
	}

    //assign the actual addresses to each pointer

    /////////////////////// VALUES RECIEVED FROM FPGA /////////////////////

    x_acceleration_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + X_ACCELERATION_PIO);
    y_acceleration_ptr = (volatile unsigned int*)(h2p_lw_virtual_base + Y_ACCELERATION_PIO);
    fpga_done_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + FPGA_DONE_PIO);

    // // does not work, kept in in case want to use later/if is fixed
    // vga_blank_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + VGA_BLANK_PIO);

    /////////////////////// VALUES SENT TO FPGA /////////////////////

    reset_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + RESET_PIO);
    object_count_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + OBJECT_COUNT_PIO);
    index_out_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + INDEX_OUT_PIO);
    x_loc_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + X_PIO);
    y_loc_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + Y_PIO);
    mass_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + MASS_PIO);
    write_enable_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + WRITE_ENABLE_PIO);
    send_enable_ptr = (volatile unsigned int *)(h2p_lw_virtual_base + SEND_ENABLE_PIO);
}

// for delaying to achieve 30 FPS always
struct timeval delay_time_start;
struct timeval delay_time_end;

// current time for a single frame to be calculated, in us
int frame_time = 0;

int play = 1;

void increase_time_step()
{
    time_step = time_step * 2;
}

void decrease_time_step()
{
    time_step = time_step / 2;

    // avoiding to less values
    if(time_step < 0.001)
    {
        time_step = 0.01;
    }
}

void play_pause()
{
    play  = play ? 0 : 1; // toggle the play button
}

void turn_on_fpga()
{
    fpga_on = 1; // make fpga on
}

void turn_on_hps()
{
    fpga_on = 0; // turn off fpga ---> HPS will be turned on
}

void add_new_particle()
{
    int added = 0;
    NUM_BODIES+=1;

    if(NUM_BODIES > 4000)
    {
        printf("Max limit has reached, you cannot add particles further\n");
        NUM_BODIES-=1;
    }

    else
    {
        added = 1;
        printf("Enter the mass:  ");
        scanf("%f", &bodies[NUM_BODIES-1].mass);

        printf("To view new particle on screen X values must be in [0, 640) and Y values must be in [0, 480)\n");
        printf("Enter the inital X position: ");
        scanf("%f", &bodies[NUM_BODIES-1].x);

        printf("Enter the inital Y position: ");
        scanf("%f", &bodies[NUM_BODIES-1].y);

        printf("Enter the inital X velocity: ");
        scanf("%f", &bodies[NUM_BODIES-1].v_x);

        printf("Enter the inital Y velocity: ");
        scanf("%f", &bodies[NUM_BODIES-1].v_y);

        bodies[NUM_BODIES-1].a_x = 0;
        bodies[NUM_BODIES-1].a_y = 0;

        bodies[NUM_BODIES-1].cur_x_pixel = bodies[NUM_BODIES-1].x / pixel_to_mt;
        bodies[NUM_BODIES-1].cur_y_pixel = bodies[NUM_BODIES-1].y / pixel_to_mt;


        if(bodies[NUM_BODIES-1].cur_x_pixel >= 0 && bodies[NUM_BODIES-1].cur_x_pixel <= 639 && bodies[NUM_BODIES-1].cur_y_pixel>=0 && bodies[NUM_BODIES-1].cur_y_pixel <= 479)
        {
            bodies[NUM_BODIES-1].on_screen = 1;
        }

        else
        {
            bodies[NUM_BODIES-1].on_screen = 0;
            printf("Added particle will not be visible on VGA beacuse of X or Y values out of bound\n");
        }

        printf("Added particle to system (White color)\n");

        bodies[NUM_BODIES-1].prev_x_pixel = 0;
        bodies[NUM_BODIES-1].prev_y_pixel = 0;

        bodies[NUM_BODIES-1].color = white;

    }

    display_plus_erase_bodies(bodies, NUM_BODIES, WIDTH, HEIGHT,pixel_to_mt);

    if(bodies[NUM_BODIES-1].on_screen && added)
    {
        usleep(1000000); // sleep for one second to observe the added particle on screen 
    }
    

}

void load_new_map()
{
    curr_map_index++;

    if(curr_map_index >= NUM_MAPS)
    {
        curr_map_index = 0;
    }

    printf("Loading map %d\n", curr_map_index);
    printf("Map name: %s\n\n", map_file_names[curr_map_index]);

    reset_sim();
}

void exceute_button_function(int which_button)
{
    switch (which_button)
    {
        case 0: // Reset button
            reset_sim();
            break;

        case 1: // play or pause button
            play_pause();
            break;

        case 2: // increase time step
            increase_time_step();
            break;

        case 3: // decrease time step
            decrease_time_step();
            break;

        case 4: // add new particle
            add_new_particle();
            break;

        case 5: // on fpga
            turn_on_fpga();
            break;
        
        case 6: // on hps
            turn_on_hps();
            break;

        case 7: // different maps
            load_new_map();
            break;

        
        default:
            break;
    }
}
void draw()
{
    // display buttons
    display_buttons(button, NUM_BUTTONS, play);

    // display the mouse cursor
    display_plus_erase_mouse_cursor(&vga_cursor_data);

    // black border around screen
    VGA_rect(640, 480, 0, 0, black);
}
void init_sim()
{
    PIO_SETUP();

    initalizeVGA();

    init_mouse();

    NUM_BODIES = map_num_bodies[curr_map_index]; // to get number of bodies
    get_particles(map_file_names[curr_map_index], bodies, NUM_BODIES, PIXEL_TO_MT_DEFAULT);

    // clear screen
    VGA_clear_screen();
    VGA_text_clear();

    build_buttons(button, NUM_BUTTONS);

    display_plus_erase_bodies(bodies, NUM_BODIES, WIDTH, HEIGHT, pixel_to_mt);

    draw();

    reset_sim();

}

void reset_sim()
{
    time_step = TIME_STEP_DEFAULT;

    VGA_clear_screen();
    VGA_text_clear();
    
    if(NUM_BODIES != map_num_bodies[curr_map_index])
    {
        NUM_BODIES = map_num_bodies[curr_map_index];
    }

    get_particles(map_file_names[curr_map_index], bodies, NUM_BODIES, pixel_to_mt);

    display_plus_erase_bodies(bodies, NUM_BODIES, WIDTH, HEIGHT, pixel_to_mt);

    draw();

    if(fpga_on)
    {
        // active low reset
        *reset_ptr = 0;
        usleep(100000);

        *reset_ptr = 1;
        usleep(100000);
    }
   

    printf("Simulation reset\n");

}



void mouse_handling()
{
    update_vga_cursor_loc(&mouse_data, &vga_cursor_data);

    if(mouse_data.left)
    {
        int which_button = get_activated_button(button, NUM_BUTTONS, vga_cursor_data.cur_x, vga_cursor_data.cur_y);

        if(which_button != -1)
        {
            exceute_button_function(which_button);
        }
    }
}
int main()
{
    //debugging

    // FILE *file;
    // if(fpga_on)
    //     file = fopen("fpga.csv","w");

    // else
    //     file = fopen("HPS.csv", "w");


    // to catch ctrl+c action
    signal(SIGINT, sigintHandler);
    init_sim();

    printf("Simulation started\n");

   // int i=0;

    while(1)
    {
        // update_vga_cursor_loc(mouse_data, vga_cursor_data);
        //display_plus_erase_mouse_cursor(vga_cursor_data);
        one_cycle();

        mouse_handling();

        draw();

        if(play)
        {
            timedDelaying();
        }
        
        // printf("%d\n",i);
        // i++;

    }

    return 0;

}

void one_cycle()
{
    if(play)
    {
        gettimeofday(&delay_time_start, NULL);
        int i;

        if(fpga_on)
        {
            send_to_fpga();
            receive_from_fpga();
            // for(i=0; i<NUM_BODIES; i++)
            // {
            //     fprintf(fp1, "%f,%f\n", bodies[i].a_x, bodies[i].a_y);
            // }
        }

        else
        {
            hps_comp_accel(bodies, NUM_BODIES);
            // for(i=0; i<NUM_BODIES; i++)
            // {
            //     fprintf(fp1, "%f,%f\n", bodies[i].a_x, bodies[i].a_y);
            // }
        }

        integrate(bodies, NUM_BODIES, time_step);
        display_plus_erase_bodies(bodies, NUM_BODIES, WIDTH, HEIGHT,pixel_to_mt);

    }
    
}

void sigintHandler(int sig_num)
{
    // Reset handler to catch SIGINT
    printf("\n Exiting simulation \n");

    // f flush
    fflush(stdout);

    // reset the FPGA
    reset_sim();
    exit(0);
}

void timedDelaying()
{
    gettimeofday(&delay_time_end, NULL);
    
    double elapsed_time_us;

    elapsed_time_us = (delay_time_end.tv_sec - delay_time_start.tv_sec) * 1e6 + (delay_time_end.tv_usec - delay_time_start.tv_usec);
    frame_time = elapsed_time_us; // used to display on screen

    // computation to acheiev 30 FPS

    if(elapsed_time_us < 33333)
    {
        usleep(33333-elapsed_time_us);
    }
}

void send_to_fpga()
{
    *object_count_ptr = NUM_BODIES;
    *write_enable_ptr = 1;

    int i;

    for(i=0; i<NUM_BODIES; i++)
    {
        *(index_out_ptr) = i;

        *(x_loc_ptr) = float32_to_float27(bodies[i].x);
        *(y_loc_ptr) = float32_to_float27(bodies[i].y);
        *(mass_ptr) = float32_to_float27(bodies[i].mass);

    }

    *write_enable_ptr = 0;
}

void receive_from_fpga()
{
    while(*fpga_done_ptr == 0)
    {
        // wait for done signal from fpga
        printf("hi\n");
    }

    *send_enable_ptr = 1;

    int i;

    for(i=0; i<NUM_BODIES; i++)
    {
        *index_out_ptr = i;

        bodies[i].a_x = float27_to_float32(*x_acceleration_ptr);
        bodies[i].a_y = float27_to_float32(*y_acceleration_ptr);

    }

    *send_enable_ptr = 0;

}