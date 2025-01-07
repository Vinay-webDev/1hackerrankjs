"""Equalize the Array"""
arr1 = [3, 3, 2, 1, 3]
arr2 = [1, 2, 2, 3]
class Solution:
    def equalizeArray(self, arr):
        n = len(arr)
        count = {}
        for i in range(n):
            if arr[i] in count:
                count[arr[i]] += 1
            else:
                count[arr[i]] = 1
        temp = [value for value in count.values()]
        maximum = max(temp)
        temp.remove(maximum)
        return sum(temp)
sol = Solution()
print(sol.equalizeArray(arr1))  #2
print(sol.equalizeArray(arr2))  #2





