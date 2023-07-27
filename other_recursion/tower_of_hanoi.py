

def pm(start, end):
    print(start, '->', end)


def hanoi(n, start, end):
    if n == 1:
        return pm(start, end)
    other = 6 - (start+end)
    hanoi(n-1, start, other)
    pm(start, end)
    hanoi(n-1, other, end)


hanoi(3, 1, 3)
