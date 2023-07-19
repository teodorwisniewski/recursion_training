


def getNbOfWaysToTopOfStaircase(height, max_nb_steps):

    if height <= 1:
        return 1
    
    nb_of_ways = 0
    for steps in range(1, min(height, max_nb_steps) + 1):
        nb_of_ways += getNbOfWaysToTopOfStaircase(height - steps, max_nb_steps)
    return nb_of_ways


# def getNbOfWaysToTopOfStaircase(height, maxSteps):

    # if height <= 1:
    #     return 1

    # sum_of_ways = 0
    # for step in range(1, min(maxSteps, height) + 1):
    #     sum_of_ways += getNbOfWaysToTopOfStaircase(height - step, maxSteps)
    
    # return sum_of_ways




height = 4
max_steps = 2
res = getNbOfWaysToTopOfStaircase(height, max_steps)
print(f"For height={height} and max_steps={max_steps} the number of ways to is {res}")