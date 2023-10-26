#!/usr/bin/env python3
import struct
import math

def float_to_ieee754(float_number):
    ieee754 = struct.pack('f', float_number)
    return struct.unpack('I', ieee754)[0]


input_file = '../test/fisqr_decimal.txt'
output_file = 'fisqr_binary.txt'
output_file_1 = 'expected_result.txt'

try:
    with open(input_file, 'r') as input_file, open(output_file, 'w') as output_file, open(output_file_1, 'w') as output_file_1:
        for line in input_file:
            #print(line)
            try:
                float_number = float(line.strip())
                ieee754_representation = float_to_ieee754(float_number)
                # print(bin(ieee754_representation))
                # print(bin(ieee754_representation)[2:].zfill(32)[0:26])
                binary_string = bin(ieee754_representation)[2:].zfill(32)[0:27]  # Convert to binary string
                output_file.write(binary_string + '\n')
                output_file_1.write(str(1/math.sqrt(float_number))+'\n')
            except ValueError:
                print(f"Skipping invalid input: {line.strip()}")
                
except FileNotFoundError:
    print(f"File not found: {input_file}")
except Exception as e:
    
    print(f"An error occurred: {str(e)}")

