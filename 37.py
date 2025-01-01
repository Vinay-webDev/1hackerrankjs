"""Picking Numbers"""
arr1 = [4,6,5,3,3,1]
arr2 = [1,2,2,3,1,2]
arr3 = [1,1,2,2,4,4,5,5,5]
class Solution:
    def pickingNumbers(self, arr):
        maxx = 0
        current_max_len = 0
        for i in range(len(arr)):
            for j in range(i + 1, len(arr)):
                if abs(arr[i] - arr[j]) <= 1:
                    current_max_len += 1
                if abs(arr[i] - arr[j]) > 1:
                    maxx = max(maxx, current_max_len)
                    current_max_len = 0
        return maxx
sol = Solution()
print(sol.pickingNumbers(arr1)) #3
print(sol.pickingNumbers(arr2)) #9
print(sol.pickingNumbers(arr3)) #3
#❌❌WRONG ANSWER❌❌


