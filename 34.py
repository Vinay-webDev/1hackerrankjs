"""Beautiful Triplets"""
arr1, d1 = [1,2,4,5,7,8,10], 3
arr2, d2 = [2,2,3,4,5], 1
class Solution:
    def beautifulTriplets(self, d, arr):
        count = 0
        for i in range(len(arr)):
            l, r = i + 1, i + 2
            while l < len(arr) and r < len(arr):
                d1  = arr[l] - arr[i]
                d2  = arr[r] - arr[l]
                if d1 == d and d2 == d:
                    count += 1
                    l += 1
                    r += 1
                elif d1 < d:
                    l += 1
                elif d2 < d:
                    r += 1
                else:
                    break
        return count
sol = Solution()
print(sol.beautifulTriplets(d1, arr1))  #3
print(sol.beautifulTriplets(d2, arr2))  #3





