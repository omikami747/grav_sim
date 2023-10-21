// SDRAM command and control
// Model ISIS IS4216320D 32Mx16 SDRAM

`define ZERO_ADDRESS \
    A <= 0;

`define ISSUE_NOP \
	nRAS <= 1; nCAS <= 1; nWE <= 1; DQM <= 2'b11;

`define ISSUE_PRECHARGE_ALLBANKS \
    nRAS <= 0; nCAS <= 1; nWE <= 0; A[10] <= 1; 

`define ISSUE_REFRESH \
    nRAS <= 0; nCAS <= 0; nWE <= 1;
	 
`define ISSUE_MODE_SELECT \
    nRAS <= 0; nCAS <= 0; nWE <= 0; A[10] <= 0; BA <= 0;
	 
`define SELECT_NOBURST_MODE \
    BA <= 0; A[12:10] <= 0; A[9] <= 1'b1; A[8:7] <= 0; A[6:4] <= 3'b010; A[3:0] <= 4'b0000;
	 
`define SELECT_BURST32_MODE \
    BA <= 0; A[12:10] <= 0; A[9] <= 1'b0; A[8:7] <= 0; A[6:4] <= 3'b010; A[3:0] <= 4'b0001;

`define SET_COMMAND_LENGTH(cmdcyclebit, length) \
    cmdcyclebit <= length > 1? (1 << (length-2)) : 0;
	 
`define ISSUE_ACTIVATE(BANK, ROW) \
    nRAS <= 0; nCAS <= 1; nWE <= 1; \
	 BA <= BANK; A <= ROW;

`define ISSUE_RD_WITH_AUTOCHARGE(BANK, COL) \
    nRAS <= 1; nCAS <= 0; nWE <= 1; A[10] <= 1; \
	 BA <= BANK; A[9:0] <= COL; DQM <= 0;
	 
`define ISSUE_WR_WITH_AUTOCHARGE(BANK, COL, DATA) \
    nRAS <= 1; nCAS <= 0; nWE <= 0; A[10] <= 1; \
	 BA <= BANK; A[9:0] <= COL; DQM <= 0; DQ_buf <= DATA; dq_flag <= 1;