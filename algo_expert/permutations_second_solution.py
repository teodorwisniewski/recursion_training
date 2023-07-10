

# TC O(N.N!) SC O(N.N!)
def permute(input_arr):

    perms = []   
    curr_perm = []
    helper_permute(0, input_arr, perms=perms, indent=0)
    return perms    


def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]


def helper_permute(idx, input_arr, perms=None, indent=0):

    depth = "." * (indent + 1)
    # base case
    if len(input_arr)-1 == idx:
        print(f"{depth} adding the following permutation: {input_arr}")
        perms.append(input_arr.copy())
        
    else:
        for j in range(idx, len(input_arr)):
            swap(input_arr, idx, j)
            helper_permute(idx+1, input_arr, perms, indent=indent+1)
            swap(input_arr, j, idx)



if __name__ == "__main__":

    test = list("ABC")
    res = permute(test)
    print(f"The end result is: \n {[res]}")
    print(f"\n number of permutations is {len(res)}")

    # input_arr = list("ABC")
    # print(f"The input array has {input_arr}")
    # # recursive case
    # head = input_arr[0]
    # tail = input_arr[1:]
    # for i in range(len(tail)+1):
    #     new_perm = tail[:i] + [head] + tail[i:]
    #     print(f"index={i} check new perm {new_perm}")



