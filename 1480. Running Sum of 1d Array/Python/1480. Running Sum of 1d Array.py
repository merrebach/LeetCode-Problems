from typing import List
from abc import ABC, abstractmethod

class Solution(ABC):
    @property
    @abstractmethod
    def runningSum(self, nums: List[int]) -> List[int]:
        pass
    
class SolutionOne(Solution):
    def runningSum(nums: List[int]) -> List[int]:
        
        runningSums: List[int] = []
        runningSum: int = 0
        for num in nums:
            runningSum += num
            runningSums.append(runningSum)

        return runningSums   
    
if "__main__":
    nums1: List[int] = [1,2,3,4]
    nums2: List[int] = [1,1,1,1,1]
    nums3: List[int] = [3,1,2,10,1]

    solution = SolutionOne
    solution.runningSum(nums1)