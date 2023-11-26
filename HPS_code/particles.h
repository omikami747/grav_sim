#ifndef PARTICLES_H
#define PARTICLES_H

typedef struct particles
{
    float x;  // x position

    float y; // y position

    float mass; // particle mass

    float v_x; // velocity in x direction

    float v_y; // velocity in y direction

    float a_x; // x acceleration 

    float a_y; // y acceleration

    int on_screen; // flag which tells whether to display body on screen or not

    unsigned int color; // color of body

    int cur_x_pixel; //current x pixel loc

    int cur_y_pixel; //current y pixel loc

    int prev_x_pixel; // previous x pixel loc

    int prev_y_pixel; // previous y pixel loc


} particles;

#endif
