"""Decrypt the encrypted password"""
s1 = "51Pa*0Lp*0e" #"aPpLe"
s2 = "12h*0El*0lo" #"hEllo"
s3 = "321Ba*0ll*0T" #"allBaT"
class Solution:
    def decryptPassword(self, s):
        s = list(s)
        N = len(s)
        i = 0
        while i < N and s[i].isdigit() and s[i] != "0":
            i += 1
        digits = s[:i]
        digits.reverse()
        for zero_index in range(len(digits)):
            zero_position = s.index("0", i)
            s[zero_position] = digits[zero_index]
        for j in range(i, len(s)):
            if s[j] == "*":
                s[j - 1], s[j - 2] = s[j - 2], s[j - 1]
        decrypted_password = "".join(s[i:]).replace("*", "")
        return decrypted_password
sol = Solution()
print(sol.decryptPassword(s1)) #"aP1pL5e"
