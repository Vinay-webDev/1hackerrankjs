"""Calculate the Minimum Time to Process Files"""
files1, numCore1, limit1 = [5, 10, 20, 25], 5, 2
files2, numCore2, limit2 = [7, 14, 21, 28], 7, 1
files3, numCore3, limit3 = [10, 20, 30, 40, 50], 5, 3
class Solution:
    def minTime(self, files, numCore, limit):
        parallel_files = []
        sequential_files = []
        for file in files:
            if file % numCore == 0:
                parallel_files.append(file)
            else:
                sequential_files.append(file)
        parallel_files.sort(reverse=True)
        parallel_time = 0
        if len(parallel_files) > 0:
            largest_parallel_files = parallel_files[:limit]
            remaining_parallel_files = parallel_files[limit:]
            parallel_time += sum(largest_parallel_files) // numCore
            parallel_time += sum(remaining_parallel_files)
        sequential_time = sum(sequential_files)
        return parallel_time + sequential_time
sol = Solution()
print(sol.minTime(files1, numCore1, limit1))#24
print(sol.minTime(files2, numCore2, limit2))#46
print(sol.minTime(files3, numCore3, limit3))#54
