#ifndef TOP_H
#define TOP_H

#include <stdio.h>  
#include <time.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/ipc.h> 
#include <sys/shm.h> 
#include <sys/mman.h>
#include <signal.h>
#include <sys/time.h>

#include "mem_map.h"
#include "particles.h"
#include "hps_vga.h"
#include "utils.h"
#include "display.h"
#include "hps_accelerator.h"
#include "mouse.h"
#include "ui.h"


int main(); // main function
void PIO_SETUP();
void init_sim();
void reset_sim();
void sigintHandler(int sig_num);
void one_cycle();
void timedDelaying();
void send_to_fpga();
void receive_from_fpga();
void mouse_handling();
void draw();
void exceute_button_function(int which_button);

void play_pause();
void increase_time_step();
void decrease_time_step();
void add_new_particle();
void turn_on_fpga();
void turn_on_hps();
void load_new_map();

#define NUM_MAPS 4

// enum of map names
enum mapNames{
    CELESTIAL_BODY_MAX_MAP,
    CELESTIAL_BODY_SMALL_MAP,
    ORBITING_MAP,
    SOLAR_SYSTEM_MAP,
};

// dictionary of map file names
char map_file_names[NUM_MAPS][80] = {
    "StarMaps/celestial_objects_max.csv",
    "StarMaps/celestial_objects_small.csv",
    "StarMaps/orbital_system.csv",
    "StarMaps/spiral_system.csv",
};

// array of number of bodies in each map
int map_num_bodies[NUM_MAPS] = {
    2200,
    100,
    1009,
    1681,
};


#endif