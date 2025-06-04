# lab 04 outline

---

## valgrind

valgrind provides a tool called memcheck that can be used to help check how memory is being allocated within a program.
it helps to test C programs for memory related errors which may lead to crashes and unpredictable behavior.

## compilation

in order for valgrind to output exact lines when encountering errors,
using the `-g` flag with the gcc compiler is necessary.

## how to run valgrind

if a program is run as such:
```
myprog arg1 arg2
```
then valgrind can be run this way:
```
valgrind --leak-check=yes myprog arg1 arg2
```
where `--leak-check=yes` will enable a detailed memory leak detector.

## options

below is a sample call to valgrind:
```
valgrind --tool=memcheck --leak-check=yes --show-reachable=yes --num-callers=20 --track-fds=yes ./test
```
- `--tool=memcheck` explicitly sets valgrind to check the memory of `test`; however, including this
option is unnecessary, as valgrind's default tool is the memcheck.
- `--leak-check=yes` turns on the detailed memory leak detector.
- `--show-reachable=yes` tells valgrind to show all blocks, not just "definitely lost" and "possibly lost."
- `--num-callers=20` tells valgrind the max number of entries to be shown in stack traces
- `--track-fds=yes` sets valgrind to display a list of open file descriptors on exit

## gdb

gdb stands for "GNU debugger." it allows a programmer to inspect what a program is doing at a specific point in time. it is necessary to include the `-g` flag if one wants to use gdb.

## running gdb

gdb can be run by itself, or a filename may be passed as an argument.
```
gdb prog1.out
```
running this command will load prog1.out into gdb, but to run it, a user can simply input run, which will attempt to run the file, similar as to how compiled c programs are normally run.

## breakpoints

the usefulness of gdb reveals  itself when one makes use of breakpoints. these breakpoints allow the user to pause the execution of a program at a specified line of code. for example, entering `break file1.c:6` will tell the program to pause its execution on the file file1.c, at line 6 of the code. many of these breakpoints may be set.

one can also set breakpoints in functions. for example, inputting break `my_func` where `my_func` is a function will pause the execution of a program each time the function is called.

from here onwards, the user can control the program as they please. entering `run` into gdb will begin execution of the program until the first breakpoint is reached, or an error crashes the program. if the program is paused, entering `continue` in gdb will resume its execution until the next breakpoint. entering `step` will execute just the next line of code. `next` is similar to `step`, but next treats subroutines (function calls) as one instruction instead of multiple.

## clion

clion is a GUI debugger, contrasted with the terminal setting of gdb. similar to gdb, breakpoints can be set and toggled, and execution may be resumed or stepped through. clion also exposes its many available actions through a "find actions" menu. clion also exposes the values of variables in a program when paused on a breakpoint. this is very helpful if inspecting many variables within a program is necessary, as clion provides the user with an accessible display of the variables and their values. using "force step into", a user can step into a function see its source code. 

## comparison and use cases

each of these debuggers aid the programmer in finding what errors occur and where specifically they occur, something that is not immediately obvious when compiling and running a c program again and again trying to figure out what to tweak in order to have the program run successfully. in my opinion, i believe that valgrind would be the most useful when debugging memory, gdb is good for quick terminal debugging, and clion can take a programmer to a more in-depth view of their code's execution.
