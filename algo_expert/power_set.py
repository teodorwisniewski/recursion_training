

# TC O( n.2^n) SC(2^n.n)
def power_set(arr):
    power_set = [[]]
    for num in arr:
        for i in range(len(power_set)):
            current_subset = power_set[i]
            new_subset = list(set([num] + current_subset))   
            power_set.append(new_subset)
    return power_set


arr = [1, 2, 3]
print(f"The powerset for {arr} is \n {power_set(arr)}")
