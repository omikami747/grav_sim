#ifndef MOUSE_H
#define MOUSE_H

#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

#define cursor_size  1

typedef struct mouse_clicks
{
    /// different clicks in mouse

    int left;
    int right;
    int middle;

    /// change in x and y

    int dx;
    int dy;

} mouse_clicks;

typedef struct cursor_on_vga
{
    int prev_x;
    int prev_y;


    int cur_x;
    int cur_y;

} cursor_on_vga;

void init_mouse();
int poll_mouse(mouse_clicks *mouse_data);
void update_vga_cursor_loc(mouse_clicks *mouse_data, cursor_on_vga *vga_cursor_data);

#endif