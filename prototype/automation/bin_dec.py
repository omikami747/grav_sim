#!/usr/bin/env python3
import struct

def ieee754_to_float(binary_string):
    if len(binary_string) != 32:
        raise ValueError("Binary string must be 32 bits long")
    ieee754_int = int(binary_string, 2)
    return struct.unpack('f', struct.pack('I', ieee754_int))[0]


input_file = 'module_output.txt'
output_file = 'verilog_result.txt'
i=0

try:
    with open(input_file, 'r') as input_file, open(output_file, 'w') as output_file:
        for line in input_file:
            if(i<=3):
                i+=1
                continue
            
            try:
                binary_string = line.strip()
                decimal_number = ieee754_to_float(binary_string+'00000')
                output_file.write(f'{decimal_number}\n')
            except ValueError:
                print(f"Skipping invalid input: {line.strip()}")
                
            i+=1
except FileNotFoundError:
    print(f"File not found: {input_file}")
except Exception as e:
    print(f"An error occurred: {str(e)}")

