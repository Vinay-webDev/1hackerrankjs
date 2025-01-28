"""Nearly similar rectangles"""
sides1 = [[4, 8], [2, 4], [6, 12]]
sides2 = [[1, 2], [2, 4], [3, 6], [4, 8]]
sides3 = [[1, 1], [2, 3], [4, 5]]
class Solution:
    def nearlySimilarRectangles(self, sides):
        def func_gcd(a, b):
            if b == 0:
                return a
            else:
                return func_gcd(b, a % b)
        ratio_count = {}
        for w, h in sides:
            gcd = func_gcd(w, h)
            ratio = (w // gcd, h // gcd)
            if ratio in ratio_count:
                ratio_count[ratio] += 1
            else:
                ratio_count[ratio] = 1
        similar_pairs = 0
        for count in ratio_count.values():
            similar_pairs += (count * (count - 1)) // 2
        return similar_pairs
sol = Solution()
print(sol.nearlySimilarRectangles(sides1)) #3
print(sol.nearlySimilarRectangles(sides2)) #6
print(sol.nearlySimilarRectangles(sides3)) #0


