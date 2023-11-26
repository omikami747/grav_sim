#ifndef DISPLAY_H
#define DISPLAY_H

// used for drawing the celestial bodies
#include "particles.h"
#include "hps_vga.h"
#include "utils.h"
#include "mouse.h"
#include "ui.h"

void display_bodies(particles *bodies, int num_bodies);
void erase_bodies(particles *bodies, int num_bodies);
void display_plus_erase_bodies(particles *bodies, int num_bodies, int width, int height, int pixel_to_mt);
void display_plus_erase_mouse_cursor(cursor_on_vga *vga_cursor_data);
void display_buttons(buttons *button, int num_buttons, int play);

#endif