"""Plus Minus"""
arr1 = [-4, 3, -9, 0, 4, 1]
arr2 = [1, 1, 0, -1, -1]
class Solution:
    def plusMinus(self, arr):
        n = len(arr)
        pos, neg, zero = 0, 0, 0
        for num in arr:
            if num == 0:
                zero += 1
            elif num > 0:
                pos += 1
            else:
                neg += 1
        print(f"{pos / n:.6f}")
        print(f"{neg / n:.6f}")
        print(f"{zero / n:.6f}")
sol = Solution()
sol.plusMinus(arr1) #0.500000 0.333333 0.166667
sol.plusMinus(arr2) #0.400000 0.400000 0.200000








