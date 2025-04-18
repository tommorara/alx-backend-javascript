#!/usr/bin/python3
"""
Module that generates Pascal's Triangle.
"""

def pascal_triangle(n):
    """
    Return a list of lists of integers representing the Pascal's triangle of n rows.

    - If n <= 0, returns an empty list.
    - n is assumed to be an integer.
    """
    if n <= 0:
        return []

    triangle = [[1]]  # First row
    for i in range(1, n):
        prev_row = triangle[-1]
        # Each row starts and ends with 1
        row = [1]
        # Compute inner values as sum of two values above in the previous row
        for j in range(1, i):
            row.append(prev_row[j - 1] + prev_row[j])
        row.append(1)
        triangle.append(row)

    return triangle

