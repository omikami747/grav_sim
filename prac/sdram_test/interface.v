module interface;
   reg clk;
   reg rst;
   
   wire switch;
   wire addr;
   wire dq;
   wire init_comp;
   wire [3:0] cmd;
   wire [1:0] cmd_sent;
   wire reply;
   
       
   ctrl dut1 (
              .clk(clk),    // clk in from PLL = 100 MHz  
              .switch(),
              .addr(),
              .dq(),
              .ba(),
              .ldqm(),
              .udqm(),
              .ras_n(),
              .cas_n(),
              .cke(),
              .outclk(),
              .we_n(),
              .cs_n(),
              .hex1(),
              .hex2(),
              .init_comp(init_comp),
              .cmd(cmd),
              .cmd_sent(cmd_sent),
              .reply(cmd_done)
              );
   
   command dut2 (
                .rst(rst),
                .clk(clk),
                .cmd(cmd),
                .init_comp(init_comp),
                .cmd_done(cmd_done),
                .switch(switch),
                .cmd_sent(cmd_sent)
                );

   always
     begin
        clk <= 'b0;
        #5;
        clk <= 'b1;
        #5;
     end

   initial
     begin
        $dumpvars;
        rst <= 'b0;
        
        repeat (5)
          begin
             @(posedge clk);
          end
          
        rst <= 'b1;

        repeat (5)
          begin
             @(posedge clk);
          end
          
        rst <= 'b0;

        repeat (5)
          begin
             @(posedge clk);
          end
          
        rst <= 'b1;

        repeat (5)
          begin
             @(posedge clk);
          end

        #200000;
        $finish;
     end
endmodule
