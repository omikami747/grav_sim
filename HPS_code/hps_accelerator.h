#ifndef HPS_ACCELERATOR_H
#define HPS_ACCELERATOR_H

#include <stdio.h>  // file handling functions
#include <stdlib.h> // atoi
#include <math.h>   // powf
#include <float.h>  // FLT_MAX

#include "particles.h"
#include "utils.h"

void hps_comp_accel(particles *bodies, int num_bodies);
void hps_calc_accel(particles *body1, particles *body2);

#endif

