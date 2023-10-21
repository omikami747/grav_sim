PRAC=../prac
LINES:=$(shell python3 ${PRAC}/linelength)
TEST=../test


FpAdd.out: ${PRAC}/FpAdd.v ${PRAC}/FpAdd_tb.v 
	iverilog ${PRAC}/FpAdd.v ${PRAC}/FpAdd_tb.v -o FpAdd.out

FpAdd_rtl.temp: FpAdd.out
	vvp FpAdd.out > FpAdd_rtl.temp

FpAdd_rtl.out: ${TEST}/Fp_Add_tstvec.txt FpAdd.out FpAdd_rtl.temp
	tail -n +4 FpAdd_rtl.temp| head -n ${LINES} > FpAdd_rtl.out

FpAdd_ref.out: ${PRAC}/py_FpAdd ${TEST}/Fp_Add_tstvec.txt
	./${PRAC}/py_FpAdd

FpAdd.log: ./FpAdd_rtl.out ./FpAdd_ref.out ../scripts/makefile
	#diff -s FpAdd_rtl.out FpAdd_ref.out
	cmp FpAdd_rtl.out FpAdd_ref.out > FpAdd.log
clean:
	rm -f ./*
#no_test_vec:
##${PRAC}/linelength
