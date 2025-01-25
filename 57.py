"""Find Substring with maximum vowels"""
s1, k1 = "aeaeaeaeae", 4
s2, k2 = "bcdfghjklmnpqrtsvwxyz", 4
s3, k3 = "abcde", 2
s4, k4 = "aeiobcdfaeio", 4
class Solution:
    def findSubstring(self, s, k):
        vowels = ('a', 'e', 'i', 'o', 'u')
        N = len(s)
        if k > N:
            return "Not found!"
        curr_w, curr_c = "", 0 
        for i in range(k):
            if s[i] in vowels:
                curr_c += 1
            curr_w += s[i]
        max_w, max_c = curr_w, curr_c
        for j in range(k, N):
            if s[j] in vowels:
                curr_c += 1
            if s[j - k] in vowels:
                curr_c -= 1
            curr_w = curr_w[1:] + s[j]
            if curr_c > max_c:
                max_c = curr_c
                max_w = curr_w
        if curr_c > 0:
            return max_w
        else:
            return "Not found!"
sol = Solution()
print(sol.findSubstring(s1, k1))    #aeae
print(sol.findSubstring(s2, k2))    #Not found!
print(sol.findSubstring(s3, k3))    #ab
print(sol.findSubstring(s4, k4))    #aeio
#✅✅



