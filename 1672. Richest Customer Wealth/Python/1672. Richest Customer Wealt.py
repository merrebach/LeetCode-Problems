from typing import List

def maximumWealth(accounts: List[List[int]]) -> int:#
    return max(sum(acc) for acc in accounts)

customers: list = [[2,8,7],[7,1,3],[1,9,5]]
print(maximumWealth(customers))
