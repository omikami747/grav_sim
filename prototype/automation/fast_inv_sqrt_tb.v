// `timescale 1ns / 1ps

// module fast_inv_sqrt_tb();
   
//    reg clk;
//    reg [26:0] data_in;
//    reg     rst;
//    integer res;
   

// wire [26:0] data_out;


// reg [5:0] input_count;

// integer f1,f2;

// fast_inv_sqrt DUT(clk,rst,data_in,data_out);


// initial
// begin
// 	forever #5 clk = !clk;
// end

// always @(posedge clk or negedge rst)
// begin
// 	if(rst)
// 		input_count <= input_count-'d1;
// end

// initial
// begin
// f1=$fopen("module_output.txt","w");
// f2=$fopen("fisqr_binary.txt","r");

// input_count = 'd5 + 'd2  ; // number of clock cycles for 3 inputs
// clk = 0;
// rst = 0;

// #2 rst = 1;

// 	while(!$feof(f2))
// 	begin
// 		 res = $fscanf(f2,"%b\n",data_in);
// 		#10;
// 	end
	
// 	$fclose(f2);
	
// //#2000 $finish ;
// end

// always @(posedge clk)
// begin

// if(input_count)
// 	$fwrite(f1,"%b\n",data_out);


// else
// begin
// 	$fclose(f1);
// 	$finish;
// end
	
// end

// endmodule      
`timescale 1ns / 1ps

module fast_inv_sqrt_tb();

reg clk;
reg [26:0] data_in;
reg rst;


wire [26:0] data_out;


reg [5:0] input_count;

integer f1,f2,file_res,count = 0;

fast_inv_sqrt DUT(clk,rst,data_in,data_out);


initial
begin
	forever #5 clk = !clk;
end

//always @(posedge clk or negedge rst)
//begin
//	if(rst)
//		input_count <= input_count-'d1;
//end

   initial
     begin
        f1=$fopen("module_output.txt","w");
        f2=$fopen("fisqr_binary.txt","r");
        
        clk = 0;
        rst = 0;
        
        #2 rst = 1;
        
	      while(!$feof(f2))
	        begin
		         file_res = $fscanf(f2,"%b\n",data_in);
		         #10;
	        end
	      #40;
        
        if ($feof(f2))
          begin
	           $fclose(f2);
	           $finish;
          end
        //#2000 $finish ;
     end
   
   always @(posedge clk)
     begin
	      $fwrite(f1,"%b\n",data_out);
	      
     end

endmodule      
