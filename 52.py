"""anagrams"""
s1, s2, s3 = "aaabbb", "ab", "abc"
s4, s5, s6 = "mnop", "xyyx", "xaxbbbxx"
class Solution:
    def anagram(self, s):
        from collections import Counter
        N = len(s)
        if N % 2 != 0:
            return -1
        cut = N // 2
        left_half, right_half = s[:cut], s[cut:]
        left_count = Counter(left_half)
        right_count = Counter(right_half)
        res = 0
        for char in right_count:
            if char in left_count:
                res += max(0, right_count[char] - left_count[char])
            else:
                res += right_count[char]
        return res
sol = Solution()
print(sol.anagram(s1))  #3
print(sol.anagram(s2))  #1
print(sol.anagram(s3))  #-1
print(sol.anagram(s4))  #2
print(sol.anagram(s5))  #0
print(sol.anagram(s6))  #1




