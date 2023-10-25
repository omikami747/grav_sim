PROTO=../prototype
FPADD=${PROTO}/FpAdd
FISQR=${PROTO}/automation
LINES:=$(shell python3 ${FPADD}/linelength)
TEST=../test
#---------------------------------------------------------------------
# FpAdder section
#---------------------------------------------------------------------

FpAdd.out: ${FPADD}/FpAdd.v ${FPADD}/FpAdd_tb.v 
	iverilog ${FPADD}/FpAdd.v ${FPADD}/FpAdd_tb.v -o FpAdd.out

FpAdd_rtl.temp: FpAdd.out
	vvp FpAdd.out > FpAdd_rtl.temp

FpAdd_rtl.out: ${TEST}/Fp_Add_tstvec.txt FpAdd.out FpAdd_rtl.temp
	tail -n +4 FpAdd_rtl.temp| head -n ${LINES} > FpAdd_rtl.out

FpAdd_ref.out: ${FPADD}/py_FpAdd ${TEST}/Fp_Add_tstvec.txt
	./${FPADD}/py_FpAdd

FpAdd.log: ./FpAdd_rtl.out ./FpAdd_ref.out ../scripts/makefile
	#cmp FpAdd_rtl.out FpAdd_ref.out > FpAdd.log
	diff -s FpAdd_rtl.out FpAdd_ref.out | tee -i FpAdd.log

#---------------------------------------------------------------------
# Fast Inverse Square Root section
#---------------------------------------------------------------------

expected_result.txt: ${FISQR}/dec_bin.py ${TEST}/fisqr_decimal.txt
	./${FISQR}/dec_bin.py
fisqr.out: ${FISQR}/fast_inv_sqrt_tb.v ${FISQR}/fast_inv_sqrt.v ${FISQR}/fp_mul_new.v ${FISQR}/FpAdd.v
	iverilog ${FISQR}/fast_inv_sqrt_tb.v ${FISQR}/fast_inv_sqrt.v ${FISQR}/fp_mul_new.v ${FISQR}/FpAdd.v -o fisqr.out
module_output.txt: fisqr.out
	./fisqr.out
verilog_result.txt: ${FISQR}/bin_dec.py module_output.txt ${TEST}/fisqr_decimal.txt
	./${FISQR}/bin_dec.py
comp_result.txt: ${FISQR}/comp expected_result.txt verilog_result.txt
	./${FISQR}/comp

#---------------------------------------------------------------------
# Universal section
#---------------------------------------------------------------------

clean:
	rm -f ./*
	touch .gitignore
