#ifndef UTILS_H
#define UTILS_H

#include "particles.h"

#include <stdio.h>  // file handling functions
#include <stdlib.h> // atoi
#include <string.h> // strtok
#include <math.h>   // pow

#define BUFFER_SIZE 100

void get_particles(char *file_name, particles *bodies, int num_bodies, int pixel_to_mt);
unsigned int radius_to_color(int radius);
void update_on_screen(particles *bodies, int num_bodies, int width, int height, int pixel_to_mt);
int check_on_screen(particles *body, int width, int height, int pixel_to_mt);
unsigned int float32_to_float27(float num);
float float27_to_float32(unsigned int r);
void integrate(particles *bodies, int num_bodies, float time_step);
void integrate_sub(particles *p, float time_step);
float inv_sqrt(float x);

#endif