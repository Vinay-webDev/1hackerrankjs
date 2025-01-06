"""Picking Numbers"""

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
# print(sol.pickingNumbers(arr1)) #3
# print(sol.pickingNumbers(arr2)) #9
# print(sol.pickingNumbers(arr3)) #3
#❌❌WRONG ANSWER❌❌

""""""""""""""
a1 = [4,6,5,3,3,1]
a2 = [1,2,2,3,1,2]
a3 = [1,1,2,2,4,4,5,5,5]
class Solution:
    def pickingNumbers(self, a):
        frequency = {}
        maxx = 0
        for num in a:
            if num in frequency:
                frequency[num] += 1
            else:
                frequency[num] = 1
        for num in frequency:
            maxx = max(maxx, frequency[num] + frequency.get(num + 1, 0))
        return maxx
sol = Solution()
print(sol.pickingNumbers(a1))   #3
print(sol.pickingNumbers(a2))   #5
print(sol.pickingNumbers(a3))   #5


























