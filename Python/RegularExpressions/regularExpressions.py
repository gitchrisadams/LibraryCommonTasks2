# Christopher Adams
# date here.
# Code description here.

# Imports
import sys
import re

def searchLenoreNevermore():
    """ Opens text file for reading and loops through the file
        then loops through the file searching for the String and
        printing it out.
    """
    fh = open('raven.txt')
    for line in fh:
        if re.search('(Len|Neverm)ore', line):
            print(line, end='')

def searchReplaceLenoreNevermore():
    """ Searches file for pattern defined in re.sub and
        the second arg is the pattern to replace with in this case
        is '###'
    """
    fh = open('raven.txt')
    for line in fh:
        print(re.sub('(Len|Neverm)ore', '###', line), end='')

def searchReplaceWithReuseablePattern():
    """ Create pattern first, then search/replace using pattern.
        The pattern ignores case can also just use re.I
    """
    fh = open('raven.txt')
    pattern = re.compile('(Len|Neverm)ore', re.IGNORECASE)
    for line in fh:
        if re.search(pattern, line):
            print(line, end='')

def main():
    #searchLenoreNevermore()
    #searchReplaceLenoreNevermore()
    searchReplaceWithReuseablePattern();

if __name__ == '__main__':
    sys.exit(main())

