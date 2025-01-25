"""Range sum with zero substitution"""
numbers1 = [1, 2, 0, 4, 5]
queries1 = [[0, 2, 3], [1, 4, 2], [2, 2, 7]]
numbers2 = [0, 0, 0, 0]
queries2 = [[0, 3, 5], [1, 2, 1]] 
numbers3 = [1, 2, 3, 4, 5]
queries3 = [[0, 4, 10], [2, 3, 7]] 
numbers4 = [-1, 0, -3, 4, 0]
queries4 = [[0, 1, 2], [3, 4, 3], [0, 4, 1]]
class Solution:
    def findSum(self, numbers, queries):
        N = len(numbers)
        p = [0] * (N + 1)
        for i in range(1, N + 1):
            p[i] = p[i - 1] + numbers[i - 1]
        p_zero = [0] * (N + 1)
        for j in range(1, N + 1):
            p_zero[j] = p_zero[j - 1] + (1 if numbers[j - 1] == 0 else 0)
        res = []
        for l, r, x in queries:
            total = p[r + 1] - p[l]
            zero_count = p_zero[r + 1] - p_zero[l]
            total += zero_count * x
            res.append(total)
        return res
sol = Solution()
print(sol.findSum(numbers1, queries1))  #[6, 13, 7] ❌
print(sol.findSum(numbers2, queries2))  #[20, 2] ✅
print(sol.findSum(numbers3, queries3))  #[15, 7] ❌
print(sol.findSum(numbers4, queries4))  #[1, 7, 2] ❌








