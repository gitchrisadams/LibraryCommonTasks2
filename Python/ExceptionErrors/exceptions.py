# Using try except blocks prevents program from crashing and
# instead handles the error.
try:
    fh = open('xlines.txt')
    for line in fh.readlines():
        print(line)
except IOError as e:
    print("Error ({})".format(e))

print("after badness")