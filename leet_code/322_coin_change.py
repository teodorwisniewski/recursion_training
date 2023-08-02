
from typing import List
import math

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [math.inf] * (amount + 1)
        if amount == 0:
            return 0
        dp[0] = 0
        for coin in coins:
            for new_amount in range(1, amount + 1):
                if new_amount >= coin:
                    dp[new_amount] = min(dp[new_amount], 1 + dp[new_amount-coin])
       
        return dp[amount] if dp[amount] != math.inf else -1



class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:            
        def coinChangeInner(rem, cache):
            if rem < 0:
                return math.inf
            if rem == 0:                    
                return 0       
            if rem in cache:
                return cache[rem]
            
            cache[rem] = min(coinChangeInner(rem-x, cache) + 1 for x in coins)                         
            return cache[rem]      
        
        ans = coinChangeInner(amount, {})
        return -1 if ans == math.inf else ans    

s = Solution()

# denoms = [1, 5, 10]
# target = 10

# res = s.coinChange(denoms, target)
# print(f"denoms {denoms} target={target}")
# print(f"coinChange {res}")

# denoms = [1, 3, 4, 5]
# target = 7
# res = s.coinChange(denoms, target)
# print(f"denoms {denoms} target={target}")
# print(f"coinChange {res}")


# denoms = [1, 2, 5]
# target = 100
# res = s.coinChange(denoms, target)
# print(f"denoms {denoms} target={target}")
# print(f"coinChange {res}")

# denoms = [186,419,83,408]
# target = 6249
# res = s.coinChange(denoms, target)
# print(f"denoms {denoms} target={target}")
# print(f"coinChange {res}")


# denoms = [1]
# target = 0
# res = s.coinChange(denoms, target)
# print(f"denoms {denoms} target={target}")
# print(f"coinChange {res}")

denoms = [1]
target = 1
res = s.coinChange(denoms, target)
print(f"denoms {denoms} target={target}")
print(f"coinChange {res}")

