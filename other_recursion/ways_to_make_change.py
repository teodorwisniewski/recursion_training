

from collections import Counter




def getWaysToMakeChange(target_amount, denoms):
    # Write your code here.
    unique_ways  = []
    rec_helper(target_amount, denoms, unique_ways, [])
    return unique_ways


def rec_helper(target_amount, denoms, ways, way):
    if target_amount < 0:
        return
    if target_amount == 0:
        new_way = sorted(way)
        if new_way not in ways:
            ways.append(new_way)
    for denom in denoms:
        if denom <= target_amount:
            way.append(denom)
            rec_helper(target_amount-denom, denoms, ways, way)
            way.pop()

denoms = [1, 5, 10]
target = 10
res = getWaysToMakeChange(target, denoms)
print(f"donoms {denoms} target={target}")
print(f"getWaysToMakeChange {res}")