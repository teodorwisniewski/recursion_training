

import time
import timeit


def getNbOfWaysToTopOfStaircase2(height, max_nb_steps, memo=None):

    # if height <= 1:
    #     return 1
    
    if memo is None:
        memo = {
            0: 1,
            1: 1
        }
    elif height in memo:
        return memo[height]
    
    nb_of_ways = 0
    for steps in range(1, min(height, max_nb_steps) + 1):
        res = getNbOfWaysToTopOfStaircase2(height - steps, max_nb_steps, memo=memo)
        if height not in memo:
            memo[height-steps] = res
        nb_of_ways += res

    return nb_of_ways




# TC O(h * s) SC O(h)
def getNbOfWaysToTopOfStaircase3(height, max_nb_steps):

    if height < 2:
        return 1

    steps = [0] * (height + 1)

    steps[0] = 1
    steps[1] = 1

    for step_no in range(2, height+1):

        first = step_no - min(height, max_nb_steps)
        first = 0 if first < 0 else first
        sum_of_previous = sum(steps[first:step_no])
        steps[step_no] = sum_of_previous
    
    return steps[-1]


def wrapper(func, *args, **kwargs):
    def wrapped():
        return func(*args, **kwargs)
    return wrapped


height = 4
max_steps = 3


# start_time = time.time()

# res = getNbOfWaysToTopOfStaircase(height, max_steps)

# end_time = time.time()
# elapsed_time = end_time - start_time

# # 2.89 seconds
# print(f"For height={height} and max_steps={max_steps} the number of ways to is {res}")
# print(f"The function took {elapsed_time} seconds to execute.")


start_time = time.time()
res = getNbOfWaysToTopOfStaircase3(height, max_steps)
end_time = time.time()
elapsed_time = end_time - start_time

# 0 seconds
print(f"For height={height} and max_steps={max_steps} the number of ways to is {res}")
print(f"The getNbOfWaysToTopOfStaircase3 function  took {elapsed_time} seconds to execute.")


wrapped = wrapper(getNbOfWaysToTopOfStaircase2, height, max_steps)
print(f'getNbOfWaysToTopOfStaircase2 {timeit.timeit(wrapped, number=10000)}')
wrapped2 = wrapper(getNbOfWaysToTopOfStaircase3, height, max_steps)
print(f'getNbOfWaysToTopOfStaircase3 {timeit.timeit(wrapped2, number=10000)}')