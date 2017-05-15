def isPrime(n):
    if n == 1:
        return False
    for x in range(2, n):
        if n % x == 0:
            return False
        else:
            return True

# Generator function:
# yield is like return but when
# returning to the isPrime it will go right back to 
# the n+=1 instead of going to if isPrime(n)
def primes(n = 1):
    while(True):
        if isPrime(n): yield n
        n += 1

# Prints out prime numbers:
for n in primes():
    if n > 100: break
    print(n)