"""Jumping on the Clouds"""
c1 = [0, 1, 0, 1, 0, 0, 0]
c2 = [0, 0, 1, 0, 0, 1, 0]
c3 = [0, 0, 0, 0, 1, 0]
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
sol = Solution()
print(sol.jumpingOnClouds(c1))
#⚠️Error index out of range⚠️
