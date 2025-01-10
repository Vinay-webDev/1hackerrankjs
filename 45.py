"""Common Child"""
s1, s2 = "ABCD", "ABDC"
s3, s4 = "HARRY", "SALLY"
s5, s6 = "SHINCHAN", "NOHARAAA"
class Solution:
    def commonChild(self, s1, s2):
        N = len(s1)
        length = 0
        for i in range(N):
            for j in range(N):
                if j >= i and s2[i] == s1[j]:
                    length += 1
        return length
sol = Solution()
print(sol.commonChild(s1, s2))
print(sol.commonChild(s3, s4))
print(sol.commonChild(s5, s6))  #6 ❌WRONG ANSWER❌



