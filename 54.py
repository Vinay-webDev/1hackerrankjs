"""Beautiful days at the Movies"""
i1, j1, k1 = 20, 23, 6
i2, j2, k2 = 10, 20, 3
class Solution:
    def beautifulDays(self, i, j, k):
        beautiful_days = 0
        for num in range(i, j + 1):
            s1 = str(num)
            num_reversed = int("".join(reversed(s1)))
            if abs(num - num_reversed) % k == 0:
                beautiful_days += 1
        return beautiful_days
sol = Solution()
print(sol.beautifulDays(i1, j1, k1))   #2
print(sol.beautifulDays(i2, j2, k2))   #11
#✅✅


