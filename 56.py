"""String anagram"""
dictionary1 = ["listen", "silent", "enlist", "google", "gogole"]
query1 = ["google", "listen", "cat"]    #[2, 3, 0]
dictionary2 = ["abc", "bac", "cab", "dog", "god"]  
query2 = ["abc", "god", "xyz"]  #[3, 2, 0]
class Solution:
    def stringAnagram(self, dictionary, query):
        from collections import Counter
        N1 = len(dictionary)
        dict_map= {}
        l, r = 0, 1
        count = 1
        while r < N1:
            if Counter(dictionary[l]) == Counter(dictionary[r]):
                count += 1
                dict_map[dictionary[l]] = count
                r += 1
            else:
                count = 1
                l = r
                r += 1
        N2 = len(query)
        for j in range(N2):
            #if Counter(query[j]) == Counter(dict_map.get)
# sol = Solution()
# print(sol.stringAnagram(dictionary1, query1))
#❌COMPLICATED ANSWER NOT OPTIMAL❌



            

