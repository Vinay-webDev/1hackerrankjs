"""MEDIUMs"""
"""Non-Divisible subset"""
s1, k1 = [1, 7, 2, 4], 3
s2, k2 = [19, 10, 12, 24, 10, 25, 22], 4
class Solution:
    def nonDivisibleSubset(self, s, k):
        set_arr = [*set(s)]
        N = len(set_arr)
        temp = set()
        for i in range(N):
            for j in range(i+1, N):
                if (set_arr[i] + set_arr[j]) % k != 0:
                    temp.add(set_arr[i])
                    temp.add(set_arr[j])
        return len([*temp])
sol = Solution()
print(sol.nonDivisibleSubset(s1, k1))   #3
print(sol.nonDivisibleSubset(s2, k2))   #6
#❌WRONG ANSWER❌


