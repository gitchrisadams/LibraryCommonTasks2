# Example of using recursion to detect palindrome
def palindrome(word):
    if len(word) <= 1:
        return True
    if word[0] != word[-1]:
        return False
    word = word[1:-1]
    return palindrome(word)

print(palindrome('racecar'))