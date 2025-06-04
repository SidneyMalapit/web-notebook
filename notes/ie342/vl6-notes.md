# counting

---

## multiplication rule

take the product of all operations to determine the amount of outcomes

first operation: flipping a coin - 2 outcomes
second operation: rolling a die - 6 outcomes
third operation: drawing a card - 52 outcomes

N = 2 * 6 * 52 = 624 outcomes

use multiplication rule to help with combining multiple operations

### sampling with replacement (multiplication rule special case)

choosing `r` times out of `n` objects has a total of `n^r` possible outcomes

## permutations

**permutation** - an arrangement of all or part of a set of objects where the
order of the objects matters

- no replacement (each object only appears/chosen once)
- number of permutations of `n` objects is `n!`

permutations of `n` objects taken `r` at a time:
`n(n-1)(n-2)...(n-r+1)` or `n!/(n-r)!`

## combinations

- order is not important

number of combinations of `n` distinct objects taken `r` at a time:
`n!/r!(n-r)!`
