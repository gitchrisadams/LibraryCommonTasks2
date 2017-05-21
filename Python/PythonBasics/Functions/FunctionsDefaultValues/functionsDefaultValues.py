#!/usr/bin/python3
# Christopher Adams
# date here.
# Code description here.

# Imports
import sys

def main():
    testFunc(5, 60)
    testFunc2(32)


def testFunc(number, another = 43, oneMore = 75):
    """ Basic function with default values.
        
    If nothing passed for 2nd/3rd param, then the
    default values take effect. So 2nd and 3rd arg
    are optional.

    Args:
        number (int): A number to diplay.
        another (int): Another number to display.
        oneMOre (int): One more number to display.
    """
    print("This is a test", number, another, oneMore)


def testFunc2(number2, another2 = None, oneMore2 = 75):
    """Function w/ default values and None
    
    Uses conditional to set another2 if to default 112
    if no arg is passed in.

    Args:
        number2 (int): A number to output.
        another2 (int): Another number.
        oneMore2 (int): One more number.
    """
    if another2 is None:
        another2 = 112
    print('This is another test', number2, another2, oneMore2)


if __name__ == '__main__':
    sys.exit(main())
