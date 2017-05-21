#!/usr/bin/python3

def main():
    # Set the buffer size:
    buffersize = 50000

    # Create input and output files:
    infile = open('bigfile.txt', 'r')
    outfile = open('new.txt', 'w')

    # Read from buffer using buffer size:
    buffer = infile.read(buffersize)

    # Iterate as long as buffer is not empty.
    # Write to the output file via buffer.
    # Print a dot just to show status.
    # Read in the buffer into the infile.
    while len(buffer):
        outfile.write(buffer)
        print('.', end='')
        buffer = infile.read(buffersize)
    print("")
    print('Done')

if __name__ == "__main__": main()
