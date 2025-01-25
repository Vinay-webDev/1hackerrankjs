"""Minimum Costs to Assign Jobs"""
crew_id1, job_id1 = [1, 3, 5], [2, 8, 4]
crew_id2, job_id2 = [10, 20, 30], [15, 25, 35]
class Solution:
    def getMinCost(self, crew_id, job_id):
        crew_id.sort()
        job_id.sort()
        N, cost = len(crew_id), 0
        for i in range(N):
            cost += abs(crew_id[i] - job_id[i])
        return cost
sol = Solution()
print(sol.getMinCost(crew_id1, job_id1)) #5
print(sol.getMinCost(crew_id2, job_id2)) #15
#✅✅




