#include "display.h"

void display_bodies(particles *bodies, int num_bodies)
{
    int i;

    for(i=0; i < num_bodies; i++)
    {
        if(bodies[i].on_screen)
        {
            VGA_star(bodies[i].cur_x_pixel, bodies[i].cur_y_pixel, bodies[i].color);

            //update previous pixels
            bodies[i].prev_x_pixel = bodies[i].cur_x_pixel;
            bodies[i].prev_y_pixel = bodies[i].cur_y_pixel;
        }
    }
}

void erase_bodies(particles *bodies, int num_bodies)
{
    int i;

    for(i=0; i < num_bodies; i++)
    {
        if(bodies[i].on_screen)
        {
            VGA_star(bodies[i].prev_x_pixel, bodies[i].prev_y_pixel, black);
        }
    }
}

void display_plus_erase_bodies(particles *bodies, int num_bodies, int width, int height, int pixel_to_mt)
{
    // first erase the old bodies
    erase_bodies(bodies, num_bodies);

    //update the on_screen for each body
    update_on_screen(bodies, num_bodies, width, height, pixel_to_mt);

    //now display the current bodies
    display_bodies(bodies, num_bodies);

}

void display_plus_erase_mouse_cursor(cursor_on_vga *vga_cursor_data)
{
    VGA_box(vga_cursor_data->prev_x + cursor_size,
            vga_cursor_data->prev_y + cursor_size,
            vga_cursor_data->prev_x - cursor_size,
            vga_cursor_data->prev_y - cursor_size,
            black);

    VGA_box(vga_cursor_data->cur_x + cursor_size,
            vga_cursor_data->cur_y + cursor_size,
            vga_cursor_data->cur_x - cursor_size,
            vga_cursor_data->cur_y - cursor_size,
            yellow);

}

void display_buttons(buttons *button, int num_buttons, int play)
{
    int i;
    for(i=0; i<num_buttons; i++)
    {
        VGA_rect(button[i].top_left_x, button[i].top_left_y, button[i].bottom_right_x, button[i].bottom_right_y, button[i].border_color);
        switch (i)
        {
            case 0:  // Reset Button
                
                VGA_text(34,1,"R"); // character for reset
                break;

            case 1: // play pause button
                
                if(play)
                {

                    VGA_Vline(304,9,17,white);
                    VGA_Vline(305,10,16,white);
                    VGA_Vline(306,11,15,white);
                    VGA_Vline(307,12,14,white);
                    VGA_Vline(308,13,13,white);
                }

                else
                {
                    VGA_Vline(303,9,16,white);
		            VGA_Vline(308,9,16,white);
                }

                break;

            case 2: //increase time step button
                
                VGA_Vline(335,9,16,white);
                VGA_Hline(332,12,339,white);
                break;

            case 3: // decrease time step
                VGA_Hline(362,12,369,white);
                break;

            case 4: // add particle button
                VGA_text(49,1,"A");           // character for adding particles
                break;

            case 5: // run on fpga
                VGA_text(53,1,"F");                  // character for FPGA
                break;

            case 6: // run on hps
                VGA_text(56,1,"H");                  // character for HPS
                break;

            case 7: // different maps
                VGA_text(59,1,"M");         // character for map_select
                break;
                
            default:
                break;
        }
    }
}