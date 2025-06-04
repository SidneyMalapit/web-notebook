# lab 07 outline

---

## recursion

in the context of programming, recursion is the process of when a function
calls itself; such a function is known as a recursive function. an example
of a recursive function could be the factorial:

```c
int factorial(int n) {
    if (n == 0) { return 1; }
    return n * factorial(n - 1);
}
```

in order to prevent a recursive function from running indefinitely, it is
necessary to define a base case; in the `factorial` function, this is
shown by the if statement returning 1 once the function is given 0 as an
input. in the event that a recursive function calls itself too many times,
a stack overflow occurs, where the stack cannot allocate enough memory for
the function calls, leading to a runtime error when the program is
executed.

## pick and do not pick algorithm for power set

one possible algorithm in order to generate the power set of a set could
be the pick and do not pick algorithm. the premise of the algorithm is as
follows: for each possible subset of our starting set, we can iterate
through each element *n*. this element *n* is either in the subset, or not
in the subset; we must consider both cases. below is an example of this
algorithm in C++:

```cpp
// str - stores the input string
// index - the index in current subset, curr
// curr - stores current subset
void powerSet(string str, int index = 0, string curr = "")
{
    int n = str.length();

    // base case - if function has run n times, print and
    // return
    if (index == n) {
        cout << curr << endl;
        return;
    }

    // element is part of subset - move onto next element,
    // concatenate to curr
    powerSet(str, index + 1, curr + str[index]);

    // element is not part of subset - move onto next element,
    // do not concatenate to curr
    powerSet(str, index + 1, curr);
}

int main()
{
    string str = "abc";
    powerSet(str);
    return 0;
}

/* output:
abc
ab
ac
a
bc
b
c
*/
```

## memoization

memoization for recursive functions is basically caching the output of the
recursive function in order to reduce computation time when calling the
function. if the function has already calculated a certain output, then
it wouldn't make sense to do all the computation again. take this memoized
version of the factorial from earlier:

```c
// computed outputs stored here
// outputs[<function input>] = <function output>
int outputs[100];

int factorial(int n) {
    if (outputs[n] != 0) { return outputs[n]; } // memoization
    if (n == 0) { return 1; }

    int output = n * factorial(n - 1);
    outputs[n] = output;
    return output;
}
```

memoization is helpful when a recursive function needs to be called
multiple times - storing previous output would prevent any unnecessary
computation. if `factorial(10)` was first called, the function would have
to recurse 10 layers deep. however, each previous output would be stored
in `outputs`. if `factorial(11)` is called soon afterwards in the same
program, which would run `11 * factorial(10)`, the function would not need
to continue, since the output for `factorial(10)` has been stored in
`outputs`, and does not need to be recalculated.

## git commands

- `config`

this argument itself has many options, such as `list`, `get`, `set`, etc.
it is used to configure repository or global options, such as globally
configuring the git user's username and email. ex.
running `git config --global user.name "Sidney Malapit"` and `git config
--global user.email "smala6@uic.edu"` would globally set the credentials i
use for each repository.
    
- `clone [URL]`

clones a repository from [URL] into a new local directory. this command is
needed in order to work with repositories stored on GitHub. ex. `git clone
https://github.com/myuser/myfirstrepo.git` would clone the "myfirstrepo"
repository from *myuser* into a new local directory called "myfirstrepo".
if *myuser* gives editing permission, then this would enable you to start
viewing and editing files in order to be committed and pushed later on.

- `diff`

this argument can be used to show the difference in content between many
different things, such as files, commits, branches, the result of a merge,
etc. running `git diff` would show the user the changes between the index
(the staged changes for the next commiti) and the unstaged, more recent
changes.

- `status`

allows the user to see the state of the current working directory and the
staging area. it also allows the user to see which changes have been
staged, which have not, and the files that aren't currently being tracked
by git.

- `add [item]`

adds files/directories to be tracked by git. this will stage the item(s)
for the next commit.

- `rm [item]`

removes an item/items from being staged for the next commit.

- `commit -m [message]`

this command allows the user to commit - that is, create a snapshot for
the project that may be reverted to. a short message describing what has
been committed is helpful for others to understand what's been changed at
a glance.

- `push`

updates the remote repository by sending data containing the user's
changes in the form of commits. this is projects can be updated and
configured by individuals.

- `pull`

gets the latest changes from the repository and updates the user's local
repository to match, provided that the user has not made any new changes
themself. in such cases, the user is asked to specify how git should
handle it.

- `log`

this command simply shows a log of the commits made in a repository.
