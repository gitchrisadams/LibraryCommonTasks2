#!/usr/bin/python3

def main():
    # Files for input and output:
    infile = open('lines.txt', 'r')
    outfile = open('new.txt', 'w')

    # Iterate through input and print to output file:
    for line in infile:
        print(line, file = outfile, end = '')
    print('Done')

if __name__ == "__main__": main()
