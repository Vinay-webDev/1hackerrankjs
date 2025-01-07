"""Extra Long Factorial"""
n1 = 5
n2 = 30
n3 = 25
class Solution:
    def extraLongFactorials(self, n):
        factorial = 1
        while n > 0:
            factorial = factorial * n
            n -= 1
        return factorial
sol = Solution()
print(sol.extraLongFactorials(n1)) #120
print(sol.extraLongFactorials(n2))
#265252859812191058636308480000000  
print(sol.extraLongFactorials(n3))  
#15511210043330985984000000

