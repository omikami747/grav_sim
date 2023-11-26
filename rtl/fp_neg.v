module fp_neg
(	input [26:0] i_in,
	output [26:0] o_out
);

assign o_out = {~i_in[26], i_in[25:0]};

endmodule
