"""Easy"""
"""Sherlock and Squares"""
a1, b1 = 24, 49
a2, b2 = 3, 9
a3, b3 = 17, 24
class Solution:
    def squares(self, a, b):
        import math
        start = round(math.sqrt(a))
        end = round(math.sqrt(b))
        count = 0
        for i in range(start, end + 1):
            if i * i >= a and i * i <= b:
                count += 1
        return count
sol = Solution()
print(sol.squares(a1, b1))  #3
print(sol.squares(a2, b2))  #2
print(sol.squares(a3, b3))  #0
#kinda cheating answer but it works lol


