all:
	arm-linux-gnueabihf-gcc -Dsoc_cv_av -O2 -o test display.c hps_accelerator.c hps_vga.c mouse.c top.c ui.c utils.c -lm
	arm-linux-gnueabihf-strip -s test

clean:
	rm -rf test