#ifndef UI_H
#define UI_H

#include <stdio.h>  // file handling functions
#include <stdlib.h> // atoi

#include "hps_vga.h"

typedef struct buttons
{
    int top_left_x;
    int top_left_y;


    int bottom_right_x;
    int bottom_right_y;

    unsigned int border_color;
} buttons;

void build_buttons(buttons *button, int num_buttons);
void build_sub(buttons *button, int button_num);
int get_activated_button(buttons *button, int num_buttons, int x, int y);
#endif