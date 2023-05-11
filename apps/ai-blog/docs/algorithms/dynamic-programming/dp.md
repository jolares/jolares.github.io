---
sidebar_position: 4
---

# Dynamic Programming

DP techniques have a broad applications. They are often useful when more specialized methods fail, but are generally less efficient.

DP is an algorithmic paradigm where we solve a problem by identifying a collection
of subproblems, which we solve one by one, starting with the smallest problems and
using their solutions to solve the larger problems, until we solve the entire collection of problems we are interested in.

DP does not require DAGs explicitly, but rather implicitly:
    - Nodes are subproblems we define
    - Edges are dependencies between subproblems, where a larger subproblem depends in [solving first] a smaller subproblem.


## References

[Algorithms by Dasgupta, Papadimitriou, and Vazirani](https://www.goodreads.com/book/show/138563.Algorithms)

