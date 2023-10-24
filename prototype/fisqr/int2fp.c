#include<stdio.h>


void conv (float a,FILE* wr_file){
  int b = *((int*)(&a));

  int fp[32];
  int c = 2;
  int reps = 1;
  int i = b;
  while (reps <= 32) {
    int rem = i%2;
    i /= 2;
    fp[32-reps] = rem;
    reps++;
  }
  for (int i = 0; i < 27; i++){
    fprintf(wr_file,"%d",fp[i]);
    /*if (i == 0 || i == 8) {
      printf(" ");
      }*/
  }
  //fprintf(wr_file,"\n");
  char s[32];
  int result = 0;
  int factor = 1;

}



int main(){
  //float a = 6.9;
  FILE * ptr;
  FILE * wr_file;
  wr_file = fopen("float.txt","w");
  ptr = fopen("vec.txt","r");
  if (ptr == NULL) {
    printf("not able to open the file, exiting.\n");
    return 0;
  }
  int count = 0;
  while (1) {
    float s1,s2;
    // int a = fscanf(ptr,"%f %f",&s1,&s2);
    int a = fscanf(ptr,"%f",&s1);
    if (feof(ptr)) {
      break;
    }
    conv(s1,wr_file);
    /* fprintf(wr_file," "); */
    /* conv(s2,wr_file); */
    fprintf(wr_file,"\n");
    count ++;
  }
  //printf("\n");
  fclose(ptr);
}
