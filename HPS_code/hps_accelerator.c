#include "hps_accelerator.h"

void hps_comp_accel(particles *bodies, int num_bodies)
{
    int k;
    for(k=0; k<num_bodies; k++)
    {
        bodies[k].a_x = 0;
        bodies[k].a_y = 0;
    }
    
    int i,j;

    for(i=0; i<num_bodies; i++)
    {
        for(j=i+1; j<num_bodies; j++)
        {
            hps_calc_accel(&bodies[i], &bodies[j]);
        }
    }
}

void hps_calc_accel(particles *body1, particles *body2)
{
    float x_diff = body1->x - body2->x;
    float y_diff = body1->y - body2->y;

    float r_square = x_diff*x_diff + y_diff*y_diff;
    float one_by_r = inv_sqrt(r_square);

    float eps_square = 7.45058059692e-09;

    float one_by_sqrt_r_square_plus_eps_square = inv_sqrt(r_square+eps_square);

    float accel = r_square * one_by_r * one_by_sqrt_r_square_plus_eps_square * one_by_sqrt_r_square_plus_eps_square * one_by_sqrt_r_square_plus_eps_square;

    float x_unit_vector = x_diff * one_by_r;
    float y_unit_vector = y_diff * one_by_r;

    float x_force = accel * x_unit_vector;
    float y_force = accel * y_unit_vector;

    body1->a_x -= (x_force * body2->mass/10.0);
    body1->a_y -= (y_force * body2->mass/10.0);

    body2->a_x += (x_force * body1->mass/10.0);
    body2->a_y += (x_force * body1->mass/10.0);

}