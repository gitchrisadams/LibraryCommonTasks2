#!/usr/bin/python3

def main():
	# Open txt file for reading / utf encoding:
    fin = open('utf8.txt', 'r', encoding = 'utf_8')

    # Open file for output w/ write:
    fout = open('utf8.html', 'w')

    # Create a byte array:
    outbytes = bytearray()

    # Iterate through file, then through each line.
    # ord gives the integer equivalent of char passed in.
    # If the integer value at counter is higher than 127(outside ascii range)
    # then format the byte w/ html entity bytes and utf_8 encoding.
    for line in fin:
    	for c in line:
    		if ord(c) > 127:
    			outbytes += bytes('&${:04d};'.format(ord(c)), encoding = 'utf_8')
    		else: outbytes.append(ord(c))

    # Convert to string and encode w/ utf-8
    outstr = str(outbytes, encoding='utf_8')

    # Output to our file:
    print(outstr, file = fout)

    # Output to screen too:
    print(outstr)

if __name__ == "__main__": main()
