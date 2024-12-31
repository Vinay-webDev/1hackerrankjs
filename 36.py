"""Drawing Book"""

n1, p1 = 5, 4
n2, p2 = 5, 3
n3, p3 = 6, 2
class Solution:
    def pageCount(self, n, p):
        m = n // 2
        start = p // 2
        end = m - start
        return min(start, end)
sol = Solution()
print(sol.pageCount(n1, p1)) #0
print(sol.pageCount(n2, p2)) #1
print(sol.pageCount(n3, p3)) #1







