# lab 02 outline

---

**pointer**: a variable that stores the address of a memory location

## scope and lifetime

| memory type | scope | lifetime |
| --- | --- | --- |
| global | the entire file | lifetime of the application |
| static | the function it's declared within | lifetime of the application |
| automatic (local) | the function it's declared within | while the function is executing |
| dynamic | determined by the pointers that reference this memory | until the memory is freed |

## declaring a pointer

`<data type> *<name>;`

ex. 
```c
int *p;
double *doublePtr;
```
(whitespace is a matter of user preference)

## different pointer type declarations

the type of a pointer is important in the case of incrementing/decrementing pointers;
for example, if an integer pointer is incremented it will point two locations ahead
instead of one, as a character pointer would when incremented.

this is due to the fact that different data types within C require different
amounts of memory. in the case of char and int, their sizes are, respectively,
one byte and four bytes.

## referencing and dereferencing

**`&`** - reference operator. used to retrieve the address of a variable for use as a pointer

**`*`** - dereference operator. retrieves the value that a pointer variable points to

## pass-by-reference

as function parameters, pointers can be useful to manipulate variables outside a function's scope
when using a pointer as a parameter, referencing the pointer gives the function access to
change the value at the location which the pointer points to.

this can be used to set multiple variables which would normally be outside of a function's control -
thus, multiple values can be received from a function

ex.
```c
#include <stdio.h>

void setValues(int *a, int *b) { // two pointer parameters, two outputs
    *a = 3 * *a; // dereferencing the pointer to assign a value
    *b += 4;
}

int main() {
    int a = 12;
    int b = 2;

    setValues(&a, &b); // referencing variables a and b
    
    printf("%d, %d", a, b); // 36, 6
}
```

## more usages of pointers

### an array is actually just a pointer

the value which an array variable refers to is actually a pointer to the memory location
of the first value of the array. if an array `int nums[] = {2, 7, 5}` is defined, accessing `nums`
would give a pointer that points to where the value `2` of the array is stored in memory

### incrementing/decrementing a pointer

pointers may be incremented and decremented. incrementing a pointer simply means that the pointer
will point to the next/previous location in memory. the location depends on the type of the pointer;
that is, different types of data in C hold different amounts of memory, so incrementing/decrementing
would mean that the pointer has to point to the corresponding amount of memory the data type holds.
since a character is only one byte, incrementing a pointer of type character would move the pointer
by one byte as well

since pointers can be incremented, this can be useful in dealing with arrays - since arrays store
information in adjacent memory locations, a pointer may be incremented to traverse the array.
referencing the array variable retrieves the pointer to the first element in an array, so setting
a pointer variable with the aforementioned pointer and using a for loop to continuously increment
the pointer would be sufficient in traversing through the elements in an array

## `main` parameters

**`argc`** - integer count of how many arguments were entered on the command line when
the program was started

**`argv`** - array of strings representing the arguments entered on the command line
when the program was started

these parameters are useful when the author of the program wants to give the user
some control by providing them options that augment the execution of the program
