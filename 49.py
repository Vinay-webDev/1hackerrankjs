"""Jumping on the Clouds"""

class Solution:
    def jumpingOnClouds(self, c):
        jumps = 0
        player = 0
        N = len(c)
        while player < N:
            if player < N and c[player + 2] != 1:
                jumps += 1
                player += 2
            if player < N and c[player + 2] == 1:
                jumps += 1
                player += 1
        return jumps
# sol = Solution()
# print(sol.jumpingOnClouds(c1))
#⚠️Error index out of range⚠️
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
c1 = [0, 1, 0, 1, 0, 0, 0]
c2 = [0, 0, 1, 0, 0, 1, 0]
c3 = [0, 0, 0, 0, 1, 0]
class Solution:
    def jumpingOnClouds(self, c):
        jumps = 0
        player = 0
        N = len(c)
        while player < N - 1:
            if player + 2 < N and c[player + 2] == 0:
                player += 2
            else:
                player += 1
            jumps += 1
        return jumps
sol = Solution()
print(sol.jumpingOnClouds(c1))  #3
print(sol.jumpingOnClouds(c2))  #4
print(sol.jumpingOnClouds(c3))  #3


