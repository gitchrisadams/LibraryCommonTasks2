def merge_sort(list):
    if len(list) == 1:
        return list
    left = list[0:len(list) / 2]
    right = list[len(list) / 2:len(list)]
    return merge_sort(left) + merge_sort(right)

print(merge_sort([45, 55, 88, 33]))