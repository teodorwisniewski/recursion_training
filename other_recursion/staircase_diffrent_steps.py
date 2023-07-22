
def get_nb_of_ways_staircase(n, possible_steps):
    """
    n stands for the number of steps of staircase
    possible_steps stands for the number of possible steps we can take
    """
    if n == 0:
        return 1
    nb_of_possible_ways = 0
    for steps in possible_steps:
        new_height = n - steps
        if new_height >= 0:
            nb_of_possible_ways += get_nb_of_ways_staircase(new_height,
                                                        possible_steps)
    return nb_of_possible_ways


n = 10
possible_steps = [2, 4, 5, 8]
result = get_nb_of_ways_staircase(n, possible_steps)
print(f"The staircase of {n} steps, with possible steps {possible_steps} has {result} ways to get to the top.")
assert result == 11