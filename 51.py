"""Jumping on the Clouds: Revisited"""
c1, k1 = [0, 0, 1, 0, 0, 1, 1, 0], 2
c2, k2 = [0, 0, 1, 0], 2
# c3, k3 = [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0], 3
c4, k4 = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3
class Solution:
    def jumpingOnClouds(self, c, k):
        e = 100
        player, N = 0, len(c)
        # no_of_jumps = N / k
        while player < N - 1:
            if player + k < N and c[player] == 0:
                e -= 1
            else:
                e -= 3
            player += k
        return e
# sol = Solution()
# print(sol.jumpingOnClouds(c1, k1))  #92
# print(sol.jumpingOnClouds(c2, k2))  #96
# print(sol.jumpingOnClouds(c3, k3))  #95
# print(sol.jumpingOnClouds(c4, k4))  #95 ❌WRONG ANSWER❌
#due to stupid problem description (constraints n % k = 0) ❌WRONG ANSWER❌
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
c1, k1 = [0, 0, 1, 0, 0, 1, 1, 0], 2
c2, k2 = [0, 0, 1, 0], 2
c4, k4 = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3
class Solution:
    def jumpingOnClouds(self, c, k):
        N, player = len(c), 0
        e = 100
        while True:
            player = (player + k) % N
            e -= 1 + 2 * c[player]
            if player == 0:
                break
        return e
sol = Solution()
print(sol.jumpingOnClouds(c1, k1))  #92
print(sol.jumpingOnClouds(c2, k2))  #96
print(sol.jumpingOnClouds(c4, k4))  #80
















