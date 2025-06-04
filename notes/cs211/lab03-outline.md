# lab 03 outline

---

## stack vs heap

the stack implements a last in, first out (LIFO) structure - 
items are put into the stack, and are taken out in the reverse order of which they are inserted.
the stack only allows access to the data that was inserted first.

the stack is where all automatic (non-static) variables are contained.

the heap is more flexible than the stack. while the stack only allows for the program
to deallocate memory in the reverse order of which the memory was allocated, the heap
allows the returning of memory in any order - thus, it is possible that free space exists
within the heap. that is, unallocated memory.

the heap has restrictions regarding allocated memory - the memory must form a block
that's large enough to satisfy the request by the program to store data. thus,
the heap must be scanned until a block of unallocated memory large enough is found
to store the requested data. not only this, but when the memory is freed,
the program must find more free space to append the recently deallocated memory
to. this makes the heap slower to use.

## `malloc()`

the `malloc()` function is used to explicitly allocate memory to be used by the program.
it returns a pointer of type `void` that points to the location of the memory
allocated.

let us take this example call and explain each component:

```c
int* ptr = (int\*)malloc(sizeof(int)\*100);
```

`sizeof(int)\*100` - this is the amount of data we want to allocate in bytes.
in this example, `sizeof()` gets how bytes is needed to allocate an integer,
and it is multiplied by 100 to signify that 100 integers worth of bytes needs
to be stored by the program.

`(int\*)` - here, we are typecasting the pointer that `malloc()` returns.
it isn't necessary for C, but since `malloc()` returns a pointer of type
`void`, one might want to explicitly typecast the pointer to the desired
type.

`int* ptr` - we store the pointer to `ptr`, and mentions of this variable
later in the code will allow the program to access the allocated memory
returned by the `malloc()` call.

## `realloc()`

the purpose of `realloc()` is to reallocate memory to a larger or smaller
amount based on a previously allocated block of memory. while `malloc()`
simply allocates memory based on a specific amount of bytes passed as
parameter, `realloc()` takes a pointer, and allocates more or less bytes.
if the amount of bytes is smaller, `realloc()` will return excess memory
to the heap. if the amount of bytes is larger, then the function will
attempt to add more bytes of memory at the same location as the pointer
passed. if not enough freed memory is found, then it will find another
chunk of free memory within the heap.

## `free()`

`free()` is used by a program to deallocate memory for other uses.
given a pointer, `free()` will deallocate the memory used at that
pointer. if a programmer doesn't deallocate memory that isn't being
used anymore, it may lead to memory leaks.
