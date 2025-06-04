# lab 05 outline

---

## declaration of c-strings

there are two main ways to declare strings in C:
- using array notation: `char myStr[10];`
- using a char pointer: `char *myStr;`

defining a string using array notation will store it on the stack, which is
automatically processed by the program. also, if the variable is not defined
at declaration, then a value must be given to tell the program how much memory
on the stack should be defined for the string. the string's length will be
constant if declared in this way, assuming best practice.

using pointers, there is no need to set the length of the string, as the pointer
simply tells the program where in memory the string starts, and not how long it
is. thus, strings can be treated as a dynamic array of chars, where more or less
memory can be allocated depending on the situation. note that defining a string
as a pointer implies that memory will be allocated on the heap for the string,
instead of the stack with array notation.

## initializing c-strings

there are various ways to initialize c-strings:
- double quotes: `char myStr[] = "this is my string";`
- array of `char`s: `char myStr[] = {'H', 'e', 'l', 'l', 'o'};`
- `scanf()`, which reads from input until whitespace is found:
```c
char myStr[100];
scanf("%s", myStr);
```
- `fgets()`, which reads a line of input up to a given amount of characters to read:
```c
char myStr[100];
fgets(myStr, 100, stdin);
```
- `strcpy()`, which can copy a string to given destination:
```
char myStr[] = "Hello";
char dest[10];
strcpy(dest, myStr);
```

## notable string.h functions

- `strcpy()`: example above
- `strcat()`: concatenates strings
```c
char myStr[20];
strcat(myStr, "hello ");
strcat(myStr, "world\n");
// myStr = "hello world"
```
- `strcmp()`: compares strings
```c
char str1 = "One";
char str2 = "One";

// strcmp returns 0 if strings are equal
if (strcmp(str1, str2) == 0) { printf("equal"); }
```
- `strchr()`: finds the first occurence of a character in a string and returns its location
```c
char myStr[] = "hello";
printf("%p", strchr(myStr, 'e'));
// assume myStr[0] address is 0x7ff12a2889 - then 0x7ff12a288a will be printed
// if not found, strchr returns NULL
```
- `strstr()`: finds the first occurence of a substring in a string and returns its location
```c
char myStr[] = "hello";
printf("%p", strchr(myStr, "ll"));
// assume myStr[0] address is 0x7ff12a2889 - then 0x7ff12a288b will be printed
// if not found, strstr returns NULL
```
- `strlen()`: gets the length of a string
```c
char myStr[] = "i don't know the length of this string!";
printf("%d", strlen(myStr)); // "39"
```

## null termination

all c-strings are null-terminated. that is, the array of characters must end with a null value,
usually represented as '\0'. if a string is not null-terminated, then it is not a string, and
string functions will not work on it.

## my take on `strlen()`

```c
int strlen(char *str) { // we can't assume anything about the string's length
    int count = 0;

    // loop will iterate through string until null terminator is found
    while (str[count] != '\0') {
        count++;
    }
        
    return count;
}
```
