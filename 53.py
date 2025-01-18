"""subarray division"""
s1, d1, m1 = [2,2,1,3,2], 4, 2
s2, d2, m2 = [1,2,1,3,2], 3, 2
class Solution:
    def birthday(self, s, d, m):
        count = 0
        for i in range(len(s)):
            for j in range(i + 1, len(s)):
                if s[i] + s[j] == d:
                    count += 1
        return count
# sol = Solution()
# print(sol.birthday(s1, d1, m1))
# print(sol.birthday(s2, d2, m2))
"""""""""""""""""""""""""""""""""""""""""""""""""""""""'"""
s1, d1, m1 = [2,2,1,3,2], 4, 2
s2, d2, m2 = [1,2,1,3,2], 3, 2
s3, d3, m3 = [1,1,1,1,1,1], 3, 2
class Solution:
    def birthday(self, s, d, m):
        N = len(s)
        count, current_sum = 0, 0
        for i in range(m):
            current_sum += s[i]
            if current_sum == d:
                count += 1
        for i in range(m, N):
            current_sum += s[i]
            current_sum -= s[i - m]
            if current_sum == d:
                count += 1
        return count
sol = Solution()
print(sol.birthday(s1, d1, m1)) #2
print(sol.birthday(s2, d2, m2)) #2
print(sol.birthday(s3, d3, m3)) #0
#✅✅




