import time
import timeit

def getNbOfWaysToTopOfStaircase(height, max_nb_steps):

    if height <= 1:
        return 1
    
    nb_of_ways = 0
    for steps in range(1, min(height, max_nb_steps) + 1):
        nb_of_ways += getNbOfWaysToTopOfStaircase(height - steps, max_nb_steps)
    return nb_of_ways


def getNbOfWaysToTopOfStaircase2(height, max_nb_steps, memo=None):

    if height <= 1:
        return 1
    
    if memo is None:
        memo = dict()
    elif (height, max_nb_steps) in memo:
        return memo[(height, max_nb_steps)]
    
    nb_of_ways = 0
    for steps in range(1, min(height, max_nb_steps) + 1):
        res = getNbOfWaysToTopOfStaircase2(height - steps, max_nb_steps, memo=memo)
        if (height, max_nb_steps) not in memo:
            memo[(height, max_nb_steps)] = res
        nb_of_ways += res

    return nb_of_ways


def wrapper(func, *args, **kwargs):
    def wrapped():
        return func(*args, **kwargs)
    return wrapped


height = 25
max_steps = 8


# start_time = time.time()

# res = getNbOfWaysToTopOfStaircase(height, max_steps)

# end_time = time.time()
# elapsed_time = end_time - start_time

# # 2.89 seconds
# print(f"For height={height} and max_steps={max_steps} the number of ways to is {res}")
# print(f"The function took {elapsed_time} seconds to execute.")


start_time = time.time()
res = getNbOfWaysToTopOfStaircase2(height, max_steps)
end_time = time.time()
elapsed_time = end_time - start_time

# 0 seconds
print(f"For height={height} and max_steps={max_steps} the number of ways to is {res}")
print(f"The function took {elapsed_time} seconds to execute.")


wrapped = wrapper(getNbOfWaysToTopOfStaircase, height, max_steps)
print(f'getNbOfWaysToTopOfStaircase {timeit.timeit(wrapped, number=1)}')
wrapped2 = wrapper(getNbOfWaysToTopOfStaircase2, height, max_steps)
print(f'getNbOfWaysToTopOfStaircase2 {timeit.timeit(wrapped2, number=1000)}')