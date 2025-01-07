"""Halloween Sale"""

class Solution:
    def howManyGames(self, p, d, m, s):
        if s < p:
            return 0
        count = 1
        temp = p
        s = s - p
        while temp > m:
            temp = p - d
            p = temp
            if temp > m:
                count += 1
                s = s - temp
        if s > m:
            count += s // m
        return count
# sol = Solution()
# print(sol.howManyGames(p1, d1, m1, s1)) #5
# print(sol.howManyGames(p2, d2, m2, s2)) #6
# print(sol.howManyGames(p3, d3, m3, s3)) #7
# print(sol.howManyGames(p4, d4, m4, s4)) #6  ❌WRONG ANSWER❌
# print(sol.howManyGames(p5, d5, m5, s5)) #0
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
p1, d1, m1, s1 = 20, 3, 6, 70
p2, d2, m2, s2 = 20, 3, 6, 80
p3, d3, m3, s3 = 20, 3, 6, 85
p4, d4, m4, s4 = 100, 19, 1, 180
p5, d5, m5, s5 = 100, 11, 10, 1
class Solution:
    def howManyGames(self, p, d, m, s):
        if s < p:
            return 0
        count = 0
        while s >= p:
            s = s - p
            count += 1
            p = max(p - d, m)
        return count
sol = Solution()
print(sol.howManyGames(p1, d1, m1, s1)) #5
print(sol.howManyGames(p2, d2, m2, s2)) #6
print(sol.howManyGames(p3, d3, m3, s3)) #7
print(sol.howManyGames(p4, d4, m4, s4)) #1  
print(sol.howManyGames(p5, d5, m5, s5)) #0





