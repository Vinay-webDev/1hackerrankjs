"""MEDIUM"""
"""Encryption"""
s1 = "haveaniceday"
s2 = "feedthedog"
s3 = "chillout"
s4 = "hellobro"
class Solution:
    def encryption(self, s):
        import math
        L = len(s)
        row = math.floor(math.sqrt(L))
        column = math.ceil(math.sqrt(L))
        grid = []
        for i in range(0, L, column):
            grid.append(s[i:i + column])
        j, counter = 0, column
        res, temp = "", ""
        while counter > 0:
            for i in range(len(grid)):
                if j < len(grid[i]):
                    temp += grid[i][j]
            temp +=" "
            res += temp
            temp = ""
            j += 1
            counter -= 1
        return res
sol = Solution()
print(sol.encryption(s1))   #hae and via ecy
print(sol.encryption(s2))   #fto ehg ee dd
print(sol.encryption(s3))   #clu hlt io
print(sol.encryption(s4))   #hlr eoo lb
#✅✅done first try and it's done✅✅💪😤🔥











