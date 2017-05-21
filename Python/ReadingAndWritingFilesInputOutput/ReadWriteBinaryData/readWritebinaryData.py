#!/usr/bin/python3

def main():
    # Create a buffer size:
    buffersize = 50000

    # Open image in 'rb' or read binary mode.
    infile = open('olives.jpg', 'rb')

    # Output/new file in write binary mode:
    outfile = open('new.jpg', 'wb')

    # Read in the file using our buffersize:
    buffer = infile.read(buffersize)

    # Loop through file the length of the buffer and
    # write to the output file.
    while len(buffer):
        outfile.write(buffer)

        # Print dot to show status ...etc
        print('.', end='')

        # Read in the next buffer:
        buffer = infile.read(buffersize)
    print("\nDone")


if __name__ == "__main__": main()