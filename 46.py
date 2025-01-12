"""Pairs"""
class Solution:
    def pairs(self, arr, k):
        arr.sort(reverse=True)
        N = len(arr)
        count = 0
        for i in range(N):
            for j in range(i + 1, N):
                if arr[i] - arr[j] == k:
                    count += 1
        return count
# sol = Solution()
# print(sol.pairs(arr1, k1))  #3
# print(sol.pairs(arr2, k2))  #3
#❌TIME LIMIT EXCEEDED❌ ofc lol this O(N^2)
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
arr1, k1 = [1, 5, 3, 4, 2], 2
arr2, k2 = [1, 2, 3, 4], 1
class Solution: 
    def Pairs(self, arr, k):
        arr.sort(reverse=True)
        sett = set(arr)
        N, count = len(arr), 0
        for i in range(N):
            if (arr[i] - k) in sett:
                count += 1
        return count
sol = Solution()
print(sol.Pairs(arr1, k1))  #3
print(sol.Pairs(arr2, k2))  #3
#✅✅





















