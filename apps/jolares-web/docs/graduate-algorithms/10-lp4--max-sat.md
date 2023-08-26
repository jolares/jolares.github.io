---
sidebar_position: 4
---

## MAX-SAT Problem Definition

Input: boolean formula $f$ in CNF form, with $n$ variables and $m$ clauses

Output: an assignment that maximizes the number of satisfied clauses


## MAX-SAT Problem Notes

MAX-SAT is the optimization version of the SAT problem.

MAX-SAT $\notin$ NP
- This is because we cannot verify in polynomial time whether the number of clauses satisfied by the output is maximum

- $\therefore$ MAX-SAT is not a _Search Problem_

MAX-SAT is NP-Hard
- It is at least as hard as the SAT problem.
- We can reduce SAT $\rightarrow$ MAX-SAT


We cannot solve MAX-SAT in polynomial time, so instead we approximate it. We will cover three algorithms that can do this:

- _Simple Scheme_ algorithm that achieves a 1/2-approximation in expectation.
- _LP-Based Scheme_ algorithm that achieves a $(1-1/e)$-approximation in expectation.
- Best of Two Scheme algorithm that achieves a 3/4-approximation in expectation.


### 1. Simple Scheme Algorithm

Take the input $f$ with variables $x_1, x_2, ..., x_n$, and clauses $C_1, C_2, ..., C_m$.

Perform a _Random Assignment_ for each variable $x_i$, independently, as follows:

$$
  x{i} =
    \begin{cases}
      TRUE & \text{with probability 1/2}\\
      FALSE & \text{with probability 1/2}\\
    \end{cases}
$$

Measure the _Expected Performance_ of the _Random Assignment_ as follows:

  - Let W be equal to the number of satisfied clauses, where W is a random variable.
  - We want to to compute expected value of W, denoted as E[W]:
    $$
    E[W]=\sum_{l=0}^{m} l \, P(w=l)
    $$

    However, this is hard to do, so we instead do the following:

    - For clause $C_j$,
          $$
            \text{Let} \,\, w_{j} =
              \begin{cases}
                1 & \text{if $C_j$ is satisfied}\\
                0 & \text{otherwise}\\
              \end{cases}
          $$

    - Compute the number of satisfied clauses:

        $$
            W = \sum_{j=1}^{m} w_j
        $$
    
    - We can now do some math:

        $$
          E[W] = E[\sum_{j=1}^{m} w_j] \\
               = \sum_{j=1}^{m} E[w_j]
        $$

    We know that
        $$
          E[w_j] = 1 \times P(w_j=1) + 0 \times P(w_j=0) \\
                 = P(w_j=1)
        $$

    Therefore
        $$
          E[W] = \sum_{j=1}^{m} P(w_j=1)
        $$

    We now proceed to compute $P(w_j=1)$ as follows:

    - We know that $P(w_j=0)=(1/2)^{k}$
    - We know that $P(w_j=1)=1-P(w_j=0)$
    - Therefore:
        $P(w_j=1)=1-2^{-k}$

    - Notice that $P(w_j=1)$ will have the lowest probability, $P(w_j=1)=1/2$, in cases where $C_j$ only has one literal, since that is the minimum size of any clause in $f$.
        - Therefore:
            $$
                P(w_j=1)=1-2^{-k} \geq 1/2 \,\, \text{since} \,\, k \geq 1
            $$

    
    Going back to our computation for $E[W]$:
        $$
            E[W] = \sum_{j=1}^{m} P(w_j=1) \\
                 \geq \sum_{j=1}^{m}  1/2 \\
                 \geq \ m/2
        $$

    Therefore, we can say that the expected performance of this randomized algorithm is 1/2-approximation in expectation.


### De-Randomize the Algorithm

We can de-randomize this algorithm and make it Deterministic, by employing the method of conditional expectation, as follows:

  - For $i = 1 \rightarrow n$
      - Try $ x_i=TRUE \,\, \& \,\, x_i=FALSE $ while using fixed values for $x_1,...x_{i-1}$
      - Compute the Expected Performance for each case, while using a random assignment for the remainding $x_i+1,...x_n$ variables.
      - Take the better performing value for $x_i$ and add it to the fixed values for the next iteration.
- We cannot claim that this algorithm achieves optimal number of satisfied clauses, but we can claim that it satisfies at least $m/2$ clauses.
    - We can reason about this as the average setting satisfies at least $m/2$ clauses, then at least one setting must achieve at least $m/2$ satisfied clauses.


