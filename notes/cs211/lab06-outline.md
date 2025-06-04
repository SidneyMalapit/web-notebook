# lab 06 outline

## file reading

here's an example of a program that gets input from a file:
```c
#include <stdio.h>

int main(void) {
    FILE *inFile = NULL; // 1
    int fileNum1;        
    int fileNum2;        

    printf("Opening file myfile.txt.\n");

    inFile = fopen("myfile.txt", "r"); // 2
    if (inFile == NULL) { // 3
        printf("Could not open file myfile.txt.\n");
        return -1; 
    }

    printf("Reading two integers.\n");
    fscanf(inFile, "%d %d", &fileNum1, &fileNum2); // 3
    
    printf("Closing file myfile.txt.\n");
    fclose(inFile); // 4

    printf("num1 = %d\n", fileNum1);
    printf("num2 = %d\n", fileNum2);
    printf("num1+num2 = %d\n", (fileNum1 + fileNum2));

    return 0;
}
```

1. create a `FILE` pointer variable, which will hold a pointer
to the file's data once memory is allocated for it
2. open the file using `fopen`, where the first argument specifies
the file's name, and the second argument specifies whether the file
should be opened for reading or writing (or both)
3. there are many ways to read input from a file, but one way is to
use the `fscanf` function, which is similar to the `scanf` function,
but the first argument is used to specify from what stream to read
in input from - in this case, a file stream
4. `fclose` is necessary to discard the rest of unread information,
in order to free memory

## `FILE` pointers and io streams

`FILE` pointers are what is returned by file functions such as `fopen`
and are used to interact with files, whether that is by reading in
data from files, or modifying them, or both. 

when including standard c libraries in a file, one usually has
`#include <stdio.h>` as one of the headers. this allows access to
`printf` and `scanf`, as well as the `stdin` and `stdout` objects.
these objects allow the programmer to access the console input and
output streams, respectively. read streams allow reading of data
within the stream, while write streams allow data to be written
into the stream - `stdin` would correspond to the read stream
of the console, while `stdout` corresponds to the write stream.

## io functions

### input

- `scanf` - read data from `stdin` into variable(s)
- `sscanf` - read data from a string into into variable(s)
- `fscanf` - read data from a stream into into variable(s)
- `fgets` - read a specified size of data from a stream into a string

(each function besides `fgets` uses a format string)

from cplusplus.com:

```c
int scanf ( const char * format, ... );
int sscanf ( const char * s, const char * format, ...);
int fscanf ( FILE * stream, const char * format, ... );
char * fgets ( char * str, int num, FILE * stream );
```

### output

- `printf` - write data from given arguments into `stdout`
- `sprintf` - write data from given arguments into a string
- `fprintf` - write data from given arguments into a stream
- `fputs` - write a string into a stream

(each function besides `fputs` uses a format string)

from cplusplus.com:

```c
int printf ( const char * format, ... );
int sprintf ( char * str, const char * format, ... );
int fprintf ( FILE * stream, const char * format, ... );
int fputs ( const char * str, FILE * stream );
```

## vim important commands

`i` - insert mode
`<Esc>` - exit insert mode into normal mode
`:` - ex (command) mode
`:e filename` - edits file "filename"
`:w` - saves current file
`:w filename` - saves current file to "filename"
`hjkl` - left down up right
`dd` - delete a line
`C` - change from cursor position to end
`S` - change line
`0` - move to beginning of line
`^` - move to beginning of text
`$` - move to end of line

## breaking a program into multiple files

programs can be broken up into .c and .h files - 
for example, each struct defined in a program can
be each be given its own .h and .c file, and programs
can be broken up into multiple .c files by separating
the main code from other functions

## using a makefile

makefiles make compiling c files easier, as compilation
commands can be stored in the makefile and may be easily
called using `make`. using makefiles, one doesn't have
to repeatedly type tedious commands in order to compile
c file(s).

consider a c project that has three files; main.c,
threeintsfcts.h, and threeintsfcts.c. we want to
compile these files and then link them. below is
an example makefile in order to accomplish
compilation and linking:

```makefile
myprog.exe : main.o threeintsfcts.o
	gcc main.o threeintsfcts.o -o myprog.exe

main.o : main.c  threeintsfcts.h
	gcc -Wall -c main.c 

threeintsfcts.o : threeintsfcts.c threeintsfcts.h
	gcc -Wall -c threeintsfcts.c 

clean :
	rm *.o myprog.exe
```

this makefile will compile the .c and .h files to
create their respective object files (.o), which
will then be linked to create a program myprog.exe.
every time make is called, it will only recompile
files based on whether their prerequisites were
modified or not.
