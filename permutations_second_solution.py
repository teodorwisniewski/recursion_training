

def permute(input_arr, perms=None, curr_perm=None, indent=0):

    if perms is None:
        perms = []

    if curr_perm is None:
        curr_perm = []
    depth = "." * (indent + 1)
    # base case
    if len(input_arr) == 0 and curr_perm:
        print(f"{depth} adding the following permutation: {curr_perm}")
        perms.append(curr_perm)
        
    
    # recursive case
    for i in range(len(input_arr)):
        print(f"{depth} The input_arr is {input_arr} and the input_arr[i]={input_arr[i]}")
        # all characters exept the one we remove from the array
        new_array = input_arr[:i] + input_arr[i+1:]
        new_perm = curr_perm + [input_arr[i]]
        permute(new_array, perms, new_perm, indent=indent+1)

    return perms    


        


        






if __name__ == "__main__":

    test = list("ABCD")
    res = permute(test)
    print(f"The end result is: \n {[res]}")
    print(f"\n number of permutations is {len(res)}")

    # input_arr = list("AB")
    # print(f"The input array has {input_arr}")
    # # recursive case
    # head = input_arr[0]
    # tail = input_arr[1:]
    # for i in range(len(tail)+1):
    #     new_perm = tail[:i] + [head] + tail[i:]
    #     print(f"index={i} check new perm {new_perm}")



