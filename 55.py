"""Making Anagrams"""
s1, s2 = "abc", "amnop"
class Solution:
    def makingAnagram(self, s1, s2):
        from collections import Counter
        deletions = 0
        s1_count = Counter(s1)
        s2_count = Counter(s2) 
        for i in range(len(s1)):
            if s1[i] not in s2_count:
                deletions += 1
            else:
                if s1_count[s1[i]] == s2_count[s1[i]]:
                    continue
                else:
                    deletions += abs(s1_count[s1[i]] - s2_count[s1[i]])
        for j in range(len(s2)):
            if s2[j] not in s1_count:
                deletions += 1
            else:
                if s2_count[s2[j]] == s1_count[s2[j]]:
                    continue
                else:
                    deletions += abs(s2_count[s2[j]] - s1_count[s2[j]])
        return deletions
# sol = Solution()
# print(sol.makingAnagram(s1, s2))

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
s1, s2 = "abc", "amnop"
s3, s4 = "cde", "abc"
s5, s6 = "absdjkvuahdakejfnfauhdsaavasdlkj", "djfladfhiawasdkjvalskufhafablsdkashlahdfa"
class Solution:
    def makingAnagram(self, s1, s2):
        from collections import Counter
        deletions = 0
        s1_count = Counter(s1)
        s2_count = Counter(s2) 
        for i in range(len(s1)):
            if s1[i] not in s2_count:
                deletions += 1
            else:
                if s1_count[s1[i]] != s2_count[s1[i]]:
                    deletions += abs(s1_count[s1[i]] - s2_count[s1[i]])
        for j in range(len(s2)):
            if s2[j] not in s1_count:
                deletions += 1
            else:
                if s2_count[s2[j]] != s1_count[s2[j]]:
                    deletions += abs(s2_count[s2[j]] - s1_count[s2[j]])
        return deletions
sol = Solution()
print(sol.makingAnagram(s1, s2))    #6
print(sol.makingAnagram(s3, s4))    #4
print(sol.makingAnagram(s5, s6))    #111❌❌
#❌WRONG ANSWER❌









