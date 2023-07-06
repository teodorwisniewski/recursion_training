

def get_perumations(array):
    perms = []
    permutation_helper(array, [], perms)
    return perms


def permutation_helper(array, current_perm, perms):
    if not len(array) and len(current_perm):
        perms.append(current_perm)
    else:
        for i in range(len(array)):
            new_array = array[:i] + array[i+1:]
            new_perm = current_perm + [array[i]]
            permutation_helper(new_array, new_perm, perms)