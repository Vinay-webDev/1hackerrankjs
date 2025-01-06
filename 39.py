"""Minimum Distances"""
a1 = [7, 1, 3, 4, 1, 7]
a2 = [3, 2, 1, 2, 3]
a3 = [1, 2, 3, 4, 10]
class Solution:
    def minimumDistances(self, a):
        import math
        seen = set()
        min_dis = math.inf
        for index, num in enumerate(a):
            if num in seen:
                j, i = index, a.index(num)
                current_min_dis = abs(j - i)
                min_dis = min(min_dis, current_min_dis)
            else:
                seen.add(num)
        if min_dis == math.inf:
            return -1
        return min_dis
sol = Solution()
print(sol.minimumDistances(a1)) #3
print(sol.minimumDistances(a2)) #2
print(sol.minimumDistances(a3)) #-1










