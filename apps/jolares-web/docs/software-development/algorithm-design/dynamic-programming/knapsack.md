---
sidebar_position: 1
title: Knapsack
---

# Knapsack Problem

For all practical purposes, a knapsack is a backpack.

The Knapsack problem is a classic one in _combinatorial optimization_, defined as:

    ```
        Given a set of items, each with a weight and a value, determine which items to include in
        the knapsack so that the total weight is less than or equal to a given limit and the total
        value is as large as possible.
    ```

There are two main versions, or flavours, of the Knapsack problem:
- Knapsack with Repetition
- Knapsack without Repetition


## Knapsack without Repetition

### Problem definition

- Input: `n` objects with `v_1,...,v_n` values and `w_1,...,w_n` weights, and total capacity `B`

- Output: subset `S` of objects such that:

    a) Sum of the weights $ \leq $ total capacity:

        $$ \sum{i \in S} w_i \leq B $$

    b) Maximizes the sum of the values in S:
        $$ \max{ \sum_{i \in S }} v_i $$

    c) Items selected cannot be repeated


### Pseudocode

```
KnapsackwithoutRepetition(w_1,...,w_n, v_1,...,v_n , B):
    // Base Cases:
    T[i, 0] = 0 for 1 <= i <= n // this takes O(n) time
    T[0, b] = 0 for 0 <= b <= B // this takes O(B) time

    // General Recurrence:
    For i = 1 to n: // this takes O(n) time
        For b = 1 to B: // this takes O(B) time
            If w_i <= b:  // this takes O(1) time
                T[i, b] = max{ T[i-1, b - w_i] + v_i, T[i-1, b] } // this takes O(1) time 
            Else:
                T[i, b] = T[i-1, b]  // this takes O(1) time
    
    Return( T[n, B] ) // this takes O(1) time
```

### Runtime

So the total runtime is: O(n) + O(B) +  O(n) * O(B) = O(nB)

This runtime is _Pseudo-Polynomial_ (not polynomial) in the input size,
because of `B`.


## Knapsack with Repetition

- Input: same as Knapsack without Repetition

- Output: same as Knapsack without Repetition, but instead:
    c) Items can be repeated

### Pseudocode

```
KnapsackWithRepetition(v_1, ..., v_n, w_1, ..., w_n, B):

    // Base Case
    T[b] = 0 for 0 <= b <= B  // this takes O(B) time

    // General Recurrence:
    For b = 1 to B:  // this takes O(B) time
        If w_i <= b and T[b] < vi + T[b - w_i]:  // this takes O(1) time
            Then T[b] = vi + T[b - w_i]  // this takes O(1) time
    
    Return( T[B] )  // this takes O(1) time
```

### Runtime

The total runtime is: $ O(B) + O(B) = O(B) $

This runtime is not polynomial in size with respect to the input.


## References

- [Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem)
- [Unbounded Knapsack (Repetition of items allowed)](https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/)