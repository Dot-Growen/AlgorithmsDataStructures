

# 

def r_sigma(num):

    print('x'*20)
    print(f"num becomes => {num} + {num-1} ")

    if num <= 1:
        return 1
    else:
        return num + r_sigma(num-1)


print(r_sigma(4))
# Recurision prnciples
# 1: forward progress
# 2: break case
# 3: recusive call


def factorial(num):
    print('x'*20)
    print(f"num becomes => {num} * {num-1} ")
    if num <= 1:
        return 1
    else:
        return num * factorial(num-1)


print(factorial(3))


def factorial1(num):
    if num > 1:
        multi = num*factorial1(num-1)

        print(num)
    else:
        multi = 0
    return multi


print(factorial1(3))

# Algos 7/28/2020

# 1: forward progress
# 2: break case
# 3: recusive call

print("\n\nRecursion Example Results")
tri_recursion(6)


def recur_fibo(n):
    if n <= 1:
        return n
    else:
        return(recur_fibo(n-1) + recur_fibo(n-2))


nterms = 10

# check if the number of terms is valid
if nterms <= 0:
    print("Number needs to be positive")
else:
    print("Fibonacci sequence:")
    for i in range(nterms):
        print(recur_fibo(i))

# Algos 7/29/2020


def r_binary_search(list_input, val, start, end):
    mid = math.floor((start+end)/2)
    print(start, mid, end)
    if val > list_input[end] or val < list_input[start]:
        return False
    if list_input[mid] == val:
        return True
    if start > end:
        return False
    elif val < list_input[mid]:
        return r_binary_search(list_input, val, start, mid-1)
    elif val > list_input[mid]:
        return r_binary_search(list_input, val, mid+1, end)
    else:
        return True


list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(r_binary_search(list, -2, 0, len(list)-1))


def flood_fill(list_input, y, x, newVal):
    print('y', y)
    print('x', x)
    val = list_input[y][x]
    list_input[y][x] = newVal
    # print(val)
    if val == newVal:
        return "please work"
    elif y >= len(list_input) - 1 or y < 0:
        return "Your y is out of range!"
    elif x >= len(list_input[y]) - 1 or x < 0:
        return "Your x is out of range!"
    if val == list_input[y][x+1]:
        print("right", list_input[y][x+1])
        flood_fill(list_input, y, x+1, newVal)
    if val == list_input[y-1][x]:
        print('up', list_input[y-1][x])
        flood_fill(list_input, y-1, x, newVal)
    if val == list_input[y+1][x]:
        print('down', list_input[y+1][x])
        flood_fill(list_input, y+1, x, newVal)
    if val == list_input[y][x-1]:
        print('left', list_input[y][x-1])
        flood_fill(list_input, y, x-1, newVal)


map = [
    [5, 3, 1, 2, 4],
    [4, 3, 2, 4, 1],
    [2, 3, 3, 2, 4],
    [2, 4, 3, 1, 1],
    [4, 3, 3, 2, 1]
]

for x in map:
    print(x)

print(flood_fill(map, 3, 2, 4))
print(map)

for x in map:
    print(x)


def r_binary_str_expansion(str_input, index=0, str_builder='', return_list=[]):
    if index == len(str_input):
        print(str_builder)
        return_list.append(str_builder)
        return
    if str_input[index] == '0' or str_input[index] == '1':
        str_builder += str_input[index]
        r_binary_str_expansion(str_input, index + 1, str_builder, return_list)
    else:
        r_binary_str_expansion(str_input, index + 1, str_builder + '0', return_list)
        r_binary_str_expansion(str_input, index + 1, str_builder + '1', return_list)
    return return_list

print(r_binary_str_expansion('01?'))
# ['010','011']



import random
def strblabla(str_input):

    str_builder=""
    return_list=[]
    question_mark=1

    for i in range(len(str_input)):
        if str_input[i] != "?":
            str_builder=str_builder + str_input[i]
        if str_input[i] == '?':
            question_mark *= 2

    for i in range(question_mark):
        return_list.append(str_builder+str(random.randint(0, 1)))

    return return_list

print(strblabla('01???'))

import math
def reverseList(arr):
    x = 1
    for i in range(math.floor(len(arr)/2)):
        temp = arr[i]
        arr[i] = arr[len(arr)-x]
        arr[len(arr)-x] = temp
        x = x + 1
    return arr
print(reverseList([1,3,5,3,4,5]))