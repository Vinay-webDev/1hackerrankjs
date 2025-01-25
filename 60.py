"""Filled Orders"""
order1, k1 = [10, 30, 20, 40], 50
order2, k2 = [5, 10, 15], 50
class Solution:
    def filledOrders(self, order, k):
        order.sort()
        fullfilled = 0
        N = len(order)
        for i in range(N):
            if order[i] <= k:
                fullfilled += 1
                k -= order[i]
            else:
                break
        return fullfilled
sol = Solution()
print(sol.filledOrders(order1, k1)) #2
print(sol.filledOrders(order2, k2)) #3