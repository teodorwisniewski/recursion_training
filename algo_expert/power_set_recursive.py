

# TC O( n.2^n) SC(2^n.n)
def power_set(arr, idx=None):
    if len(arr) == 0:
        return [[]]

    if idx is None:
        idx = len(arr) - 1
    elif idx < 0:
        return [[]]
    
    el = arr[idx]
    subsets = power_set(arr, idx - 1)
    for i in range(len(subsets)):
        current_subset = subsets[i]
        subsets.append(current_subset + [el])
    return subsets

arr = [1, 2, 3]
print(f"The powerset for {arr} is \n {power_set(arr)}")
