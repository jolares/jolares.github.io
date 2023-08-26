---
sidebar_position: 4
---

# NP1 Definitions

---

## The MST Problem

Input:
- Undirected graph G=(V,E) with positive edge lengths

Output:
- Tree T with minimum weight


### MST Problem $\in$ NP

We proof that the MST problem is in the class NP below.

1. The problem has the correct form: we always output a tree T which is guaranteed to be of minimum weight. There is never a NO tree solution; there is always a solution.

2. The problem's solution can be verified in Polynomial time in the input size as follows:

```
Given G and solution tree T

Step 1:
Run BFS/DFS to check that T is a tree; this checks that T connects up the graph G, and that T has no cycles. This step takes O(mlogn) time.

Step 2:
Run Kruskal's or Prim's algorithm to check that T is a tree of minimum weight (a MST), and output an MST (call it T'). This step takes O(mlogn) time.

Step 3:
Check the total weight of the tree output in the previous step, and compare it to the total weight of T'. There is no guarantee that T' will be the same MST as T, but the weight of T' must be equal to that of T in order for T to be a MST. 
```

The total runtime to verify that T is an MST of G is O(mlogn). Therefore,
this shows that the MST Problem $\in$ NP (and thus, that MST is a _search
problem_)


### MST Problem $\in$ P

We proof that the MST problem can be solved in polynomial time by using
Kruskal's or Prim's algorithm.


---


## The Knapsack Problem

**Input:**
- _n_ objects with integer value weights $w_1, ..., w_n$
- integer values for each object: $v_1, ..., v_n$
- capacity _B_

**Output:**
- subset _S_ of objects with _total weight_ $\leq$ _B_, and that _maximum total value_

$$
\sum_{i \in  S}{w_i \leq B}
\\
\max{ \sum_{i \in  S} v_i}
$$


### Knapsack Problem $\in$ NP

Given the instance
{$w_1, ..., w_n$, $v_1, ..., v_n$, _B_}, and the solution _S_

we need to check in polynomial time that S is correct, in other words, we need to check that:

$$\sum_{i \in  S}{w_i \leq B}$$
This takes O(n) time (TODO: how?)

We also need to check that:

$$
\max{ \sum_{i \in  S} v_i}
$$