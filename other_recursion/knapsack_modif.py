





def knapsack(weights, max_weight):
    combs = []
    knapack_helper(weights, max_weight, 0, [], combs)
    return combs


def knapack_helper(weights, max_weight, idx, comb, combs):

    if max_weight < 0:
        return 
    if idx == len(weights):
        combs.append(comb.copy())
        return
    item_weight = weights[idx]
    comb.append(item_weight)
    knapack_helper(weights, max_weight-item_weight, idx+1, comb, combs)
    comb.pop()
    knapack_helper(weights, max_weight, idx+1, comb, combs)   


weights = [1, 2, 3]
max_weight = 3
res = knapsack(weights, max_weight)
print(f"For the following max_weight={max_weight} and weights={weights}")
print(f"possible combs are {res}")