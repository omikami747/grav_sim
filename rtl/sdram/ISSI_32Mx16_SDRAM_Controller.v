// SDRAM Model ISSI IS4216320D 32Mx16 SDRAM
`include "ISSI_32Mx16_SDRAM_Commands.h"
module ISSI_32Mx16_SDRAM_Controller
  (
   input             CLK,
   input             nRST,

   // request connections
   input             request,
   output reg        ready, 
   input             is_write,
   input [31:0]      address,
   inout [31:0]      data,

   // SDRAM connections
   output            CKE, 
   output reg        nCS = 0,
   output reg        nRAS = 1,
   output reg        nCAS = 1,
   output reg        nWE = 1,
  
   output reg [1:0]  BA,
   output reg [12:0] A,
  
   output reg [1:0]  DQM,
   inout [15:0]      DQ
   );

   // count of cycles at 100 MHz
   localparam [15:0] 
     REFRESH_PERIOD = 375,
     // REFRESH_PERIOD = 750,
     PRECHARGE_DELAY = 2,
     LOAD_MODE_REGISTER_DELAY = 2;
   
   localparam 
     MAX_COMMAND_LENGTH = 8,
     REFRESH_COMMAND_DELAY = 7,
     SINGLE_RD_LENGTH = 7,
     SINGLE_WR_LENGTH = 7;
   
   // power-on
   localparam [15:0] 
     BOOTCYCLE_POWERON_DELAY = 24000,
     BOOTCYCLE_REFRESH_COUNT = 6;

   // state machine
   localparam [5:0]
     AWAIT_RESET = 6'b000_000,
     BOOTCYCLE_BIT = 6'b001_000,
	
     AWAIT_BOOTCYCLE_POWEREDON = 6'b001_001,
     AWAIT_BOOTCYCLE_PRECHARGE = 6'b001_010,
     ISSUE_BOOTCYCLE_REFRESHES = 6'b001_011,
     AWAIT_BOOTCYCLE_SELECTMODE = 6'b001_100,

     AWAIT_ACTION = 6'b010_000,
     COMMAND_BIT = 6'b100_000,
     DOING_REFRESH_CYCLE = 6'b100_000,
     DOING_READ_CYCLE = 6'b100_001,
     DOING_WRITE_CYCLE = 6'b100_010;

   reg [5:0]         state = AWAIT_RESET;
   reg [15:0]        countdown = 0;

   // 1 << (n-1) indicates n cycles remain
   reg [MAX_COMMAND_LENGTH-2:0] cmdcyclebit = 0;

   reg                          rq_flag = 0;
   reg                          we_flag = 0;
   reg                          en_flag = 0;
   reg [31:0]                   addr_buf = 0;
   reg [31:0]                   data_buf = 0;

   reg [15:0]                   DQ_buf = 0;
   reg                          dq_flag = 0;

   assign CKE = 1;
   assign data = en_flag? data_buf : 32'bZ;
   assign DQ = dq_flag? DQ_buf : 16'bZ;

   always @(posedge CLK) begin
      nCS <= 0;
      en_flag <= 0;
      dq_flag <= 0;
      `ISSUE_NOP
	`ZERO_ADDRESS
	
	  if (nRST == 0) begin
	     
	     state <= AWAIT_BOOTCYCLE_POWEREDON;
	     countdown <= BOOTCYCLE_POWERON_DELAY;
	     ready <= 0;
	     
	  end else begin
	     
	     if (countdown > 0)
	       countdown <= countdown - 1;

	     if (ready & request) begin
		rq_flag <= request;
		we_flag <= is_write;
		addr_buf <= address;
		data_buf <= data;
		ready <= 0;
	     end

	     if (cmdcyclebit == 0) begin
		if (state & COMMAND_BIT)
		  state <= AWAIT_ACTION;
	     end else
	       cmdcyclebit <= (cmdcyclebit >> 1);

	     case(state)
	       
	       AWAIT_RESET: 
		 ; // do nothing
	       
	       AWAIT_BOOTCYCLE_POWEREDON: begin
		  if (countdown == 0) begin
		     `ISSUE_PRECHARGE_ALLBANKS
		       state <= AWAIT_BOOTCYCLE_PRECHARGE;
		     countdown <= PRECHARGE_DELAY - 1;
		  end
	       end
	       
	       AWAIT_BOOTCYCLE_PRECHARGE: begin
		  if (countdown == 0) begin
		     state <= ISSUE_BOOTCYCLE_REFRESHES;
		     countdown <= BOOTCYCLE_REFRESH_COUNT*REFRESH_COMMAND_DELAY - 1;
		     `ISSUE_REFRESH
		       `SET_COMMAND_LENGTH(cmdcyclebit, REFRESH_COMMAND_DELAY)
		  end
	       end

	       ISSUE_BOOTCYCLE_REFRESHES: begin
		  if (cmdcyclebit == 0) begin
		     `ISSUE_REFRESH
		       `SET_COMMAND_LENGTH(cmdcyclebit, REFRESH_COMMAND_DELAY)
		  end
		  
		  if (countdown == 0) begin
		     `ISSUE_MODE_SELECT
		       `SELECT_BURST32_MODE
			 state <= AWAIT_BOOTCYCLE_SELECTMODE;
		     countdown <= LOAD_MODE_REGISTER_DELAY - 1;
		  end
	       end

	       AWAIT_BOOTCYCLE_SELECTMODE: begin
		  if (countdown == 0) begin
		     state <= AWAIT_ACTION;
		     countdown <= REFRESH_PERIOD;
		     ready <= 1;
		  end
	       end

	       AWAIT_ACTION: begin
		  if (countdown == 0) begin					
		     state <= DOING_REFRESH_CYCLE;
		     countdown <= REFRESH_PERIOD;
		     `ISSUE_REFRESH
		       `SET_COMMAND_LENGTH(cmdcyclebit, REFRESH_COMMAND_DELAY)
		  end else if (rq_flag & ~we_flag) begin
		     state <= DOING_READ_CYCLE;
		     rq_flag <= 0;			
		     `ISSUE_ACTIVATE(addr_buf[24:23], addr_buf[22:10])
		     `SET_COMMAND_LENGTH(cmdcyclebit, SINGLE_RD_LENGTH)
		  end else if (rq_flag & we_flag) begin
		     state <= DOING_WRITE_CYCLE;
		     rq_flag <= 0;
		     `ISSUE_ACTIVATE(addr_buf[24:23], addr_buf[22:10])
		     `SET_COMMAND_LENGTH(cmdcyclebit, SINGLE_WR_LENGTH)
		  end
	       end

	       DOING_REFRESH_CYCLE:
		 ; // do nothing

	       DOING_READ_CYCLE: begin
		  if (cmdcyclebit == 6'b010000) begin
		     `ISSUE_RD_WITH_AUTOCHARGE(addr_buf[24:23], addr_buf[9:0])
		  end else if (cmdcyclebit == 6'b001000) begin
		     DQM <= 0;
		  end else if (cmdcyclebit == 6'b000010) begin
		     data_buf[15:0] <= DQ;
		  end else if (cmdcyclebit == 6'b000001) begin
		     data_buf[31:16] <= DQ; 
		     en_flag <= 1;
		     ready <= 1;
		  end
	       end

	       DOING_WRITE_CYCLE: begin
		  if (cmdcyclebit == 6'b010000) begin
		     `ISSUE_WR_WITH_AUTOCHARGE(addr_buf[24:23], addr_buf[9:0], data_buf[15:0])
		  end else if (cmdcyclebit == 6'b001000) begin	
		     DQM <= 0; DQ_buf <= data_buf[31:16]; dq_flag <= 1;
		  end else if (cmdcyclebit == 6'b000000) begin	
		     ready <= 1;
		  end
	       end

	     endcase

	  end
   end

endmodule
