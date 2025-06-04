# definition of probability and additive rules

---

## definition of probability

- in sample space S each element is assigned a weight between 0-1 representing likelihood of occurance
- sum of all weights (outcome probabilities) = 1
- probability of event A is sum of all elements' weights in A denoted by `P(A)`
- `0 <= P(A) <= 1`
- `P(null set) = 0`
- `P(S) = 1`

### special case

if an experiment can result in any one of `N` different equally likely outcomes
and if `n` of these outcomes are contained by A, then `P(A) = n/N`;

## additive rule

- if A and B are two events then `P(A u B) = P(A) + P(B) - P(A n B)`
    - (`u` as union, `n` as intersection)

### special case

- if A and B are mutually exclusive then no subtracting intersection
