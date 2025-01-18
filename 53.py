"""subarray division"""
s1, d1, m1 = [2,2,1,3,2], 4, 2
s2, d2, m2 = [1,2,1,3,2], 3, 2
class Solution:
    def birthday(self, s, d, m):
        count = 0
        for i in range(len(s)):
            for j in range(len(s)):
                if s[i] + s[i + 1] == d:
                    count += 1
        return count
sol = Solution()
print(sol.birthday(s1, d1, m1))
