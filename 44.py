"""MEDIUMs"""
"""Non-Divisible subset"""

class Solution:
    def nonDivisibleSubset(self, s, k):
        arr = [*set(s)]
        N = len(arr)
        temp = []
        for i in range(N):
            if arr[i] % k != 0:
                temp.append(arr[i])
        N2 = len(temp)
        res = []
        for i in range(N2):
            for j in range(i + 1, N2):
                if (temp[i] + temp[j]) % k != 0:
                    res.append(temp[i])    
        return res
# sol = Solution()
# print(sol.nonDivisibleSubset(s1, k1))   #3
# print(sol.nonDivisibleSubset(s2, k2))   #6
#❌WRONG ANSWER❌
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
s1, k1 = [1, 7, 2, 4], 3
s2, k2 = [19, 10, 12, 24, 10, 25, 22], 4
class Solution:
    def nonDivisibleSubset(self, s, k):
        r = [num % k for num in s]
        sett = set(r)
        count = 0
        print(r)
        for remainder in r:
            if (k - remainder) in sett:
                count += 1
        return count
sol = Solution()
print(sol.nonDivisibleSubset(s1, k1))   #0
print(sol.nonDivisibleSubset(s2, k2))   #2
#❌WRONG ANSWER❌           
#huge logic issue😿
""""""""""""""""""""""""""""""""""""""""""""""""""""""






































