# Given an integer n, return true if it is a power of two. Otherwise, return false.

# An integer n is a power of two, if there exists an integer x such that n == 2x.

 

# Example 1:

# Input: n = 1
# Output: true
# Explanation: 20 = 1
# Example 2:

# Input: n = 16
# Output: true
# Explanation: 24 = 16
# Example 3:

# Input: n = 3
# Output: false
 
def isPowerOfTwo(n: int) -> bool:

    if n//2 == 2 and n % 2 == 0:
        return True
    elif n == 1:
        return True
    # edge case 2^0 = 1
    elif n < 1:
        return False
    elif n % 2 != 0:
        return False
    return isPowerOfTwo(n//2)


print(f"n={10} isPowerOfTwo {isPowerOfTwo(10)}")
print(f"n={16} isPowerOfTwo {isPowerOfTwo(16)}")
print(f"n={144} isPowerOfTwo {isPowerOfTwo(144)}")
print(f"n={256} isPowerOfTwo {isPowerOfTwo(256)}")