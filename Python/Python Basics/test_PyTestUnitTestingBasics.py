# Unit testing w/ pytest example:
# Run python3 -m pytest in directory of this file to test.

# Create function to add 1 to number passed in:
def func(x):
    return x + 1

# Tests:
def test_answer():
    # 3 + 1 should equal 4.
    assert func(3) == 4

    # 7 + 1 should equal 8.
    assert func(7) == 8



