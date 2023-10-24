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
  fp[27] = 0;
  fp[28] = 0;
  fp[29] = 0;
  fp[30] = 0;
  fp[31] = 0;
  for (int i = 0; i < 32; i++){
    fprintf(wr_file,"%d",fp[i]);
  }
  char s[32];
  int result = 0;
  int factor = 1;
}



int main(){
  //float a = 6.9;
  FILE * ptr;
  FILE * wr_file;
  wr_file = fopen("bin.txt","w");
  ptr = fopen("vec.txt","r");
  if (ptr == NULL) {
    printf("not able to open the file, exiting.\n");
    return 0;
  }
  int count = 0;
  while (1) {
    float s1,s2,s3,s4,s5,s6,s7;
    // int a = fscanf(ptr,"%f %f",&s1,&s2);
    int a = fscanf(ptr,"%f %f %f %f %f %f %f\n",&s1,&s2,&s3,&s4,&s5,&s6,&s7);
    //printf("%f %f %f %f %f %f %f\n",s1,s2,s3,s4,s5,s6,s7);
    conv(s1,wr_file);
    fprintf(wr_file," ");
    //printf(" ");
    conv(s2,wr_file);
    fprintf(wr_file," ");
    //printf(" ");
    conv(s3,wr_file);
    fprintf(wr_file," ");
    //printf(" ");
    conv(s4,wr_file);
    fprintf(wr_file," ");
    //printf(" ");
    conv(s5,wr_file);
    fprintf(wr_file," ");
    //printf(" ");
    conv(s6,wr_file);
    fprintf(wr_file," ");
    //printf(" ");
    conv(s7,wr_file);
    fprintf(wr_file,"\n");
    if (feof(ptr)) {
      printf("break");
      break;
    }
    /* conv(s1,wr_file); */
    /* //fprintf(wr_file," "); */
    /* printf(" "); */
    /* conv(s2,wr_file); */
    /* printf(" "); */
    /* conv(s3,wr_file); */
    /* printf(" "); */
    /* conv(s4,wr_file); */
    /* printf(" "); */
    /* conv(s5,wr_file); */
    /* printf(" "); */
    /* conv(s6,wr_file); */
    /* printf(" "); */
    /* conv(s7,wr_file); */
    /* printf("\n"); */
    count ++;
  }
  //printf("\n");
  fclose(ptr);
}
