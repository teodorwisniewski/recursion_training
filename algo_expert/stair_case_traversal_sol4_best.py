

import time
import timeit
from collections import deque


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

# TC O(n) SC O(max_nb_steps)
def getNbOfWaysToTopOfStaircase4(height, max_nb_steps, memo=None):
    if height < 1:
        return 1
    
    ways_to_top = deque()
    ways_to_top.append(1)
    current_nb_of_ways = 0

    for current_height in range(1, height + 1):
        previous_start_index = current_height - max_nb_steps - 1
        # end_of_window = current_height - 1
        if previous_start_index >= 0:
            first_el_of_the_window = ways_to_top.popleft()
            current_nb_of_ways -= first_el_of_the_window
        current_nb_of_ways += ways_to_top[-1]
        ways_to_top.append(current_nb_of_ways)
        

    return current_nb_of_ways



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
res = getNbOfWaysToTopOfStaircase4(height, max_steps)
end_time = time.time()
elapsed_time = end_time - start_time

# 0 seconds
print(f"For height={height} and max_steps={max_steps} the number of ways to is {res}")
print(f"The getNbOfWaysToTopOfStaircase4 function  took {elapsed_time} seconds to execute.")


wrapped = wrapper(getNbOfWaysToTopOfStaircase3, height, max_steps)
print(f'getNbOfWaysToTopOfStaircase3 {timeit.timeit(wrapped, number=100000)}')
wrapped2 = wrapper(getNbOfWaysToTopOfStaircase4, height, max_steps)
print(f'getNbOfWaysToTopOfStaircase4 {timeit.timeit(wrapped2, number=100000)}')