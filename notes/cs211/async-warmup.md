# async warm up

---

## C vs C++ programming

C implements the procedural programming paradigm, while C++ opts for the object-oriented approach.

Following the principles of object oriented programming, a programmer can create classes,
defining their own custom properties and methods for those classes. Thus, classes are versatile and highly reusable.
As such, they are useful in handling custom data. For example, working with a database is simple if one
creates classes specifically to handle records within the database.

C++ also implements inheritance, which allows a progammer to reuse a class and create another
class based on the previously defined properties and methods of the prior.

When considering that C++ is an object oriented programming language, it's important that a
programmer consider how to make reusable code, while a C programmer's workflow is more akin
to listing a sequence of instructions to be executed by the machine.

In the case of C, it is still possible to handle custom data. For example, structs can be used for
organization by grouping multiple data types together. Structs are a reusable way handle data in C.

## `printf` and `scanf` input and output

`printf` is used for outputting text to a user's terminal screen, while `scanf` allows input from the user
to be read and processed by the C program. Using format specifiers, which are preceded by a percent (%) symbol,
one can output many types of data by inserting format specifiers in the given text surrounded by quotations (").
In the case of `scanf`, the same applies. A programmer may put multiple format specifiers, and multiple pointers
may be passed in to the `scanf` function in order to read multiple data types from a user's input in the terminal.
When the wrong format specifier is used in to read in data with `scanf` or output data with `printf`, unexpected
behavior can occur. A program may not output the right information, or a runtime error may occur. Using the string  
format specifier (%s) with `scanf` is peculiar - an ampersand is not used when reading in data and setting variables.

## C structs

An array of stucts can be used to hold data for an image - for example, there may be a struct `Color`,
which holds a red value, a green value, and a blue value as integers. Using this system, images may be represented
if arrays are used to hold the structs, since images can be reduced to an assortment of pixels of certain colors.

## Unix commands

The unix command `ls -l` outputs to the terminal what permissions a user has to the files in the current directory,
the owner of the files, the files sizes, when it was last modified, and the name of the file. Such information is
useful when one needs to work with files in a specific directory and understand what exactly is possible with the files
while working with them.
