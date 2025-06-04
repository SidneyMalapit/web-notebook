# lab 08 outline

---

## linear v.s. binary search

### linear search
- works on unsorted data
- usually implemented iteratively (using a for loop for example)
- time complexity: O(n) - runtime is linear, proportional to the size of the input data

### binary search
- works only on sorted data
- usually implemented recursively
- time complexity: O(log n) - runtime grows logarithmically with the size of the input data

## sorting algorithms

### insertion sort
- iterates over the input data, finding the correct position for each element and inserting it there
- usually implemented iteratively
- time complexity: O(n^2)

### bubble sort
- iterates over the input data, comparing adjacent elements and swapping them if they are in the wrong order
- usually implemented iteratively
- time complexity: O(n^2)

### merge sort
- divides the input data into two halves, sorts each half recursively, and then merges the sorted halves
- usually implemented recursively
- time complexity: O(n log n)

### quick sort
- selects a pivot element, partitions the input data around the pivot, and recursively sorts the partitions
- usually implemented recursively
- time complexity: O(n log n) on average, O(n^2) in the worst case

## how to use time.h library functions

- `time()`: returns the time since the epoch in seconds as type time_t
- `difftime(time_t end, time_t start)`: calculates the difference between two time values
- `clock()`: returns the processor time used by the program as a type clock_t

example usage of `clock()`:
```c
#include <stdio.h>
#include <time.h>
#include <unistd.h>

int main()
{
    double t = 0.0;

    // timestamp before operation
    clock_t start = clock();

    for (int i = 0; i < 10000; i++) {
        // do some work
        printf("Working...\n");
    }

    // timestamp after operation
    clock_t end = clock();

    // dividing by CLOCKS_PER_SEC gives time in seconds
    t += (double)(end - start) / CLOCKS_PER_SEC;

    printf("The elapsed time is %f seconds", t);

    return 0;
}
```

## pseudo-random numbers in C

including the `stdlib.h` header allows you to use the `rand()` function to
generate pseudo-random numbers between the range of 0 and `RAND_MAX`,
which is machine-dependent, but at least 32767. in order to confine the
output of `rand()` to a specific range, the modulo operator can be used in
conjunction with the starting value of the range.

## using gprof

1. compile program using `gcc` with `-pg` flag to include profiling information
2. run program as you would normally with `./a.out`
3. analyze the output using `gprof a.out > output.txt`
4. open `output.txt` with a text editor to view the profiling information

## practice with gprof

i timed the execution of insertion sort of an array of 10000 elements and
it took 0.00s. then i added a nested loop to the insertion sort function
which iterated dummy code 1000 times. the output from gprof showed that
the time taken increased to 0.08s.
