"""Diagonal Difference"""
arr1 = [[1,2,3],[4,5,6],[9,8,9]]
arr2 = [[11,2,4],[4,5,6],[10,8,-12]]
class Solution:
    def diagonalDifference(self, arr):
        d1 = 0
        d2 = 0
        for i in range(len(arr)):
            d1 += arr[i][i]
            d2 += arr[i][len(arr) - 1 - i]
        return abs(d1 - d2)
sol = Solution()
print(sol.diagonalDifference(arr1)) #2
print(sol.diagonalDifference(arr2)) #15
 



 