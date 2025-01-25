"""PossibleChanges"""
usernames1 = ["abc", "cba", "a", "bca"]
usernames2 = ["x", "y", "z"]
usernames3 = ["abcd", "efgh", "ijkl"]
class Solution:
    def possibleChanges(self, username):
        res = []
        for user in username:
            change = "NO"
            for i in range(1, len(user)):
                if user[i - 1] > user[i]:
                    change = "YES"
                    break
            res.append(change)
        return res
sol = Solution()
print(sol.possibleChanges(usernames1))  #['NO', 'YES', 'NO', 'YES']
print(sol.possibleChanges(usernames2))  #['NO', 'NO', 'NO']
print(sol.possibleChanges(usernames3))  #['NO', 'NO', 'NO']
#✅✅







