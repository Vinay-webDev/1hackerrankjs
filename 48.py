"""Ice Cream Parlor"""
"""This just hackerrank version of Two Sum problem"""
m1, cost1 = 6, [1, 3, 4, 5, 6]
m2, cost2 = 4, [1, 4, 5, 3, 2]
m3, cost3 = 4, [2, 2, 4, 3]
class Solution:
    def icecreamParlor(self, m, cost):
        cost_map = {}
        N = len(cost)
        for i in range(N):
            if (m - cost[i]) in cost_map:
                return [cost_map[m - cost[i]] + 1, i + 1] #1-indexed
            cost_map[cost[i]] = i
sol = Solution()
print(sol.icecreamParlor(m1, cost1))    #[1, 4]
print(sol.icecreamParlor(m2, cost2))    #[1, 4]
print(sol.icecreamParlor(m3, cost3))    #[1, 2]








