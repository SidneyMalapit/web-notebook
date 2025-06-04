# lab 13 outline

---

Create an outline of what you read to prepare for lab. This can be in any format that you like, and it can be electronic or on paper. It should make sense to you, and it should be organized and legible. Bring this to your lab session. It will help you complete the lab activity, and the TAs will be checking that you have this done.
Your outline should at the very least address the following:

- Is-a vs. has-a relationships and how it relates to inheritance vs. composition as programming concepts
- Inheriting multiple classes (with an example)
- compile-time vs. runtime polymorphism
- compile-time polymorphism: function and operator overloading (with examples)
- runtime polymorphism:
    - derived/base class pointer conversion (with an example)
    - virtual functions (with an example)
    - override keyword (with an example)
    - virtual function (with an example) 
    - virtual class (with an example)
    - abstract vs. concrete classes (with examples)

---

## is-a vs. has-a relationships

- is-a relationship: inheritance
- has-a relationship: composition

ex. is-a relationship: class Dog inherits from class Animal because a dog
is an animal
ex. has-a relationship: class Car has a class Engine because a car has an
engine

## inheriting multiple classes

- class Dog inherits from class Animal and class Pet

ex. `class Dog : public Animal, public Pet { ... }`

## compile-time vs. runtime polymorphism

- compile-time polymorphism: function and operator overloading
- runtime polymorphism: derived/base class pointer conversion, virtual
functions, override keyword, virtual function, virtual class, abstract vs.
concrete classes

## compile-time polymorphism

- function overloading: multiple functions with the same name but
different parameters
- operator overloading: defining operators for user-defined classes

ex. function overloading: `int add(int a, int b) { return a + b; }`
`double add(double a, double b) { return a + b; }`

ex. operator overloading: `class Complex { ... };`
`Complex operator+(Complex a, Complex b) { ... }`

