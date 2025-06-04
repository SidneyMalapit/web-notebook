# lab 01 outline

---

Create an outline of what you read. This can be in any format that you like, and it can be electronic or on paper. It should make sense to you, and it should be organized and legible. Bring this to your lab session. It will help you complete the lab activity, and the TAs will be checking that you have this done.

Your outline should at the very least address the following things:

What are the most-often used format types in printf and scanf? What format specifier is used for each type of variable?

**common format types and corresponding specifiers (preceded by %):**
- integer - d
- float - f
- double - lf
- characters - c

What are the similarities and differences between structs in C and classes in C++?
What types of situations are well suited for C-structs vs. C++ classes?
How are subitems/data members accessed/assigned?
Are there any limitations to the data types for subitems/data members?
Specifically, how can a subitem of one struct be an array of other structs?
Ex: a Point struct stores two integers x & y, representing the point (x,y) on a 2D plot;
a Polygon struct may have an array of Points to represent the shape;
what other subitems might the Polygon struct contain?

**comparing/contrasting C structs and C++ classes**
- in C++, members of a class can be public or private or protected, while C doesn't implement this feature for structs
- C++ implements inheritance for classes
- C structs cannot hold functions while a member in a C++ class can be a method
- static members may be defined in C++ classes
- a C structs can be nested within another
- C++ classes can best be used in situations where inheritance is needed, whereas C structs handle grouping data better

Write a brief summary of each of the UNIX commands (ls, ls -l, ls -a, mv, cp, rm, rm -r, mkdir, cd, pwd, cat, more, man), along with example(s) of each one in use.

| command | description |
| ------- | ----------- |
| `ls` | lists files in directory |
| `ls -l` | lists files with more detail/information (long format) |
| `ls -a` | lists all files, which include those normally hidden |
| `mv` | allows you to move a file from one directory to another and/or rename it |
| `cp` | copies a file |
| `rm` | removes a file |
| `rm -r` | removes recursively; removes everything in a directory |
| `mkdir` | creates a directory |
| `cd` | moves into a directory |
| `pwd` | displays the current working directory |
| `cat` | joins files and displays output |
| `more` | allows viewing text files in cli; pagination for text files |
| `man` | manual; shows help for a given command |
