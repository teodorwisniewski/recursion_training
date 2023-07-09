

def power_set(arr):
    power_set = [[]]
    for num in arr:

        for subset in power_set:
            new_subset = list(set([num] + subset))
            if new_subset not in power_set:
                power_set.append(new_subset)
        if [num] not in power_set:
            power_set.append([num])
        
    return power_set


arr = [1, 2, 3]
print(f"The powerset for {arr} is \n {power_set(arr)}")
