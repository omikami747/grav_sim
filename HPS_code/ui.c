#include "ui.h"

void build_buttons(buttons *button, int num_buttons)
{
    int i;
    for(i=0; i<num_buttons; i++)
    {
        build_sub(&button[i], i);
    }
}

void build_sub(buttons *button, int button_num)
{
    switch (button_num)
    {
        case 0: // Reset Button
            button->top_left_x = 268;
            button->top_left_y = 5;

            button->bottom_right_x = 283;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;

        case 1: //pause and play button
            button->top_left_x = 298;
            button->top_left_y = 5;

            button->bottom_right_x = 313;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;

        case 2: //increase time step
            button->top_left_x = 328;
            button->top_left_y = 5;

            button->bottom_right_x = 343;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;

        case 3: //decrease time step
            button->top_left_x = 358;
            button->top_left_y = 5;

            button->bottom_right_x = 373;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;

        case 4: // Add particles button
            button->top_left_x = 388;
            button->top_left_y = 5;

            button->bottom_right_x = 403;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;

        case 5: //Run on FPGA button
            button->top_left_x = 419;
            button->top_left_y = 5;

            button->bottom_right_x = 434;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;

        case 6: //Run on HPS
            button->top_left_x = 445;
            button->top_left_y = 5;

            button->bottom_right_x = 460;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;

        case 7: //loading different maps
            button->top_left_x = 478;
            button->top_left_y = 5;

            button->bottom_right_x = 493;
            button->bottom_right_y = 20;

            button->border_color = blue;

            break;
        
        default:
            break;
    }
}

int get_activated_button(buttons *button, int num_buttons, int x, int y)
{
    int i;

    for(i=0; i<num_buttons; i++)
    {
        if(x >= button[i].top_left_x && x <= button[i].bottom_right_x && y >= button[i].top_left_y && y <= button[i].bottom_right_y)
        {
            return i;
        }
    }

    return -1;
}