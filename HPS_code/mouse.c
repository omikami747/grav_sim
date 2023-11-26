#include "mouse.h"

int fd;

void init_mouse()
{
    // this code is directly taken from prof bruce land mouse code part
    const char *pDevice = "/dev/input/mice";

    // Open Mouse
    fd = open(pDevice, O_RDWR);
    if(fd == -1)
    {
        printf("ERROR Opening %s\n", pDevice);
        return ;
    }

    //needed for nonblocking read()
    // int flags = fcntl(fd, F_GETFL, 0);
    // fcntl(fd, F_SETFL, flags | O_NONBLOCK); 
}

int poll_mouse(mouse_clicks *mouse_data)
{
    // part of this code from prof bruce land code of mouse part

    signed char x,y;
    char data[3];

    int left, right, middle;

    // poll the mouse

    int bytes = read(fd, data, sizeof(data));

    // data[2] = dy
    // data[1] = dx
    // data[0] = 00000001 ---> left, 00000010 ---> middle, 00000100 ----> right
    if(bytes > 0)
    {
        left = data[0] & 0x1;
        right = data[0] & 0x2;
        middle = data[0] & 0x4;

        
        x = data[1];
        y = data[2];

        mouse_data->left = left;
        mouse_data->middle = middle;
        mouse_data->right = right;

        mouse_data->dx = x;
        mouse_data->dy = -y;

        return 1;

    }

    else
    {
        mouse_data->left = 0;
        mouse_data->middle = 0;
        mouse_data->right = 0;

        mouse_data->dx = 0;
        mouse_data->dy = 0;
    }

    return 0;

}

void update_vga_cursor_loc(mouse_clicks *mouse_data, cursor_on_vga *vga_cursor_data)
{
    if(poll_mouse(mouse_data) == 0)
    {
        return ; 
    }

    int cur_x = vga_cursor_data->cur_x + mouse_data->dx;
    int cur_y = vga_cursor_data->cur_y + mouse_data->dy;

    if(cur_x < 0)
    {
        cur_x = 0;
    }

    else if(cur_x > 639)
    {
        cur_x = 639;
    }

    else if (cur_y < 0)
    {
        cur_y = 0;
    }

    else if(cur_y > 479)
    {
        cur_y = 479;
    }

    vga_cursor_data->prev_x = vga_cursor_data->cur_x;
    vga_cursor_data->prev_y = vga_cursor_data->cur_y;

    vga_cursor_data->cur_x = cur_x;
    vga_cursor_data->cur_y = cur_y;

}