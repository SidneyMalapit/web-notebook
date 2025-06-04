# lab 14 outline

---

# testing & tic-tac-toe smart computers

- general description of how the Tinkertoy Tic-Tac-Toe computer worked
    - to encode tic-tac-toe boards, the computer could represent each spot on the board with 3 possible values: empty, X, or O
    - the computer was essentially a lookup table that stored the best move for each possible board configuration

- how symmetries cut down on the number of cases needed to make a "smart" move
    - symmetries can be used to reduce the number of distinct board configurations that need to be considered
    - for example, the following board configurations are equivalent under rotation symmetries:
    ```
    _ _ _ | O _ _
    _ _ _ | B _ _
    O B O | O _ _
    ```
    - the first 8 cases shown in the image are essentially equivalent as they are rotations and/or reflections
    of each other, therefore can be collapsed into one

# code review

- functionality - does the code do what it is supposed to do?
- readability - is the code easy to understand and maintain?
- style - does the code follow consistent style guidelines?
- naming - are variable and function names descriptive and meaningful?
- comments - are there sufficient comments to explain the code?
- testing - has the code been tested thoroughly?
- performance - is the code efficient and optimized?
- error handling - does the code handle errors and exceptions properly?

# exception handling in c++

- what is exception handling used for?
    - exception handling is used to handle errors that occur during the execution of a program

- how to effectively use try/catch statements to handle exceptions in c++

```cpp
try {
    // code that may throw an exception
} catch (exceptionType1 e1) {
    // handle exceptionType1
} catch (exceptionType2 e2) {
    // handle exceptionType2
} catch (...) {
    // handle any other exceptions
}
// only one catch block will be executed even if multiple exceptions are thrown
```

- why is handling exceptions preferred over manual error checking?
    - handling exceptions is preferred because it allows for cleaner code
    and separates error handling from the normal flow of the program

- what are some common types of exceptions that can be thrown?
    - exceptions are objects, so they can be of any type
    - common types of exceptions include std::runtime_error, std::logic_error, std::invalid_argument, etc.

- what is catch(...)?
    - catch(...) is used to catch any type of exception that is not caught by the previous catch blocks
    - it is a catch-all for any exceptions that are not explicitly handled

- provide an example of an exception thrown inside a function, but caught outside the function. how is this helpful?

```cpp
void foo() {
    throw std::runtime_error("error in foo");
}

int main() {
    try {
        foo();
    } catch (std::runtime_error e) {
        std::cout << "caught exception: " << e.what() << std::endl;
    }
}
```

- in this example, the exception is thrown inside the `foo` function and
caught in the `main` function
- this is helpful because it allows the program to handle errors at
different levels of the call stack
