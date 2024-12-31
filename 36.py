"""Drawing Book"""

n1, p1 = 5, 4
n2, p2 = 5, 3
n3, p3 = 6, 2
class Solution:
    def pageCount(self, n, p):
        ans = 0
        m = n // 2
        if p == m:
            ans = p // 2
        elif p < m:
            ans = (m - p) // 2
        else:
            ans = (p - m) // 2
        return ans
sol = Solution()
print(sol.pageCount(n1, p1)) #0
print(sol.pageCount(n2, p2)) #1
print(sol.pageCount(n3, p3)) #2







