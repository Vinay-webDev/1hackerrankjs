"""anagrams"""
s1, s2, s3 = "aaabbb", "ab", "abc"
s4, s5, s6 = "mnop", "xyyx", "xaxbbbxx"
class Solution:
    def anagram(self, s):
        from collections import Counter
        N = len(s)
        if N % 2 != 0:
            return -1






