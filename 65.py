"""Most active customers"""
customers1 = ["Alice", "Bob", "Alice", "Alice", "Bob", "Charlie", "Alice"]
customers2 = ["John", "John", "Mary", "Jane", "Mary", "John", "Jane"]
customers3 = ["A", "B", "C", "A", "B", "A", "C", "C", "C"]
class Solution:
    def mostActive(self, customers):
        customer_count = {}
        for customer in customers:
            if customer in customer_count:
                customer_count[customer] += 1
            else:
                customer_count[customer] = 1
        N, res =len(customers),[]
        for customer, count in customer_count.items():
            if count / N >= 0.05:
                res.append(customer)
        return sorted(res)
sol = Solution()
print(sol.mostActive(customers1))   #['Alice', 'Bob', 'Charlie']
print(sol.mostActive(customers2))   #['Jane', 'John', 'Mary']
print(sol.mostActive(customers3))   #['A', 'B', 'C']
