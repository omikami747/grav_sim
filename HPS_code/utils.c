#include "utils.h"


// maps the radius to color
unsigned int radius_to_color(int radius)
{
    return (unsigned int) (0x00FFFFFF - (radius * 0x00010101));
}


// to read data from csv file and copy it to particles array
void get_particles(char *file_name, particles *bodies, int num_bodies, int pixel_to_mt)
{
    FILE *fp = fopen(file_name,"r");

    if(fp == NULL)
    {
        printf("error in openeing file\n");
        exit(1);
    }

    else
    {
        int cur_body = -1; // first line is not required to read
        char buffer[BUFFER_SIZE]; // space to hold one entire line fron file
        float values[6];

        int index=0;

        while(fgets(buffer, BUFFER_SIZE, fp) && cur_body < num_bodies)
        {
            index = 0;

            // below code is from stack overlflow to read values from csv files

            char *token = strtok(buffer, ",");
            while(token)
            {
                values[index] = atof(token);
                index++;
                token = strtok(NULL, ",");
            }

            if(cur_body!=-1)
            {
                bodies[cur_body].x = values[0] * pixel_to_mt;
                bodies[cur_body].y = values[1] * pixel_to_mt;

                bodies[cur_body].v_x = values[4];
                bodies[cur_body].v_y = values[5];

                bodies[cur_body].a_x = 0;
                bodies[cur_body].a_y = 0;

                bodies[cur_body].mass = values[3];

                bodies[cur_body].cur_x_pixel = 0;
                bodies[cur_body].cur_y_pixel = 0;

                bodies[cur_body].prev_x_pixel = 0;
                bodies[cur_body].prev_y_pixel = 0;

                bodies[cur_body].on_screen = 1;

                bodies[cur_body].color = radius_to_color((int)(values[2]*5));
            }

            cur_body++;

        }

        fclose(fp);

        if(cur_body != num_bodies)
        {
            printf("Error: Number of bodies loaded are less than specified\n");
            exit(1);
        }
    
    }

}

void update_on_screen(particles *bodies, int num_bodies, int width, int height, int pixel_to_mt)
{
    int i;
    for(i=0; i<num_bodies; i++)
    {
        bodies[i].on_screen = check_on_screen(&bodies[i], width, height, pixel_to_mt);
    }
}

int check_on_screen(particles *body, int width, int height, int pixel_to_mt)
{
    body->cur_x_pixel = body->x / pixel_to_mt;
    body->cur_y_pixel = body->y / pixel_to_mt;

    if(body->cur_x_pixel > 0 && body->cur_x_pixel < width && body->cur_y_pixel > 0 && body->cur_y_pixel < height)
    {
        return 1;
    }

    return 0;

}

unsigned int float32_to_float27(float num)
{
    //just converting it to unsigned number
    unsigned int res = *(unsigned int *)&num;
    return res;

}

float float27_to_float32(unsigned int r) 
{
    int sign = (r & 0x80000000) >> 31;
    unsigned int exp = (r & 0x7F800000) >> 23;
    int frac = (r & 0x007FFFFF);
    float result = pow(2.0, (float) (exp-127.0));
    result = (1.0+(((float)frac) / 8388608.0)) * result;
    if(sign) result = result * (-1);
    return result;
}

void integrate(particles *bodies, int num_bodies, float time_step)
{
    int i;

    for(i=0; i<num_bodies; i++)
    {
        integrate_sub(&bodies[i], time_step);
    }
}

void integrate_sub(particles *p, float time_step)
{
    //   dv/dt = a
    float del_vel_x = p->a_x * time_step;
    float del_vel_y = p->a_y * time_step;

    //  v(new) = v(old) + del(v)
    p->v_x += del_vel_x;
    p->v_y += del_vel_y;

    // dx/dt = v

    float del_x = p->v_x * time_step;
    float del_y = p->v_y * time_step;

    // x(new) = x(old) + del(x)

    p->x += del_x;
    p->y += del_y;

}

float inv_sqrt(float x)
{
    long i;
    float x2, y;
    const float threehalfs = 1.5F;
 
    x2 = x * 0.5F;
    y  = x;
    i  = *(long *)&y;           // treat float number as a long integer
    i  = 0x5F375A86 - ( i >> 1 ); // initial guess for Newton's method
    y  = *(float *)&i;         // treat long integer as a float number
    y  = y * ( threehalfs - ( x2 * y * y ) ); // one iteration of Newton's method
    return y;
}