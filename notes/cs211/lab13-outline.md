# lab 13 outline

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

## runtime polymorphism

- derived/base class pointer conversion: converting a derived class pointer
to a base class pointer, which can happen implicitly when objects of a
derived class are assigned to spaces in a vector of base class pointers

ex.
```cpp
class Base { ... };
class Derived : public Base { ... };

vector<Base*> v;
Derived *d = new Derived();
v.push_back(d);
```

- virtual functions: functions denoted by `virtual` that can be overridden
in derived classes

ex.
```cpp
class Base {
    virtual void print() { cout << "Base" << endl; }
};

class Derived : public Base {
    void print() { cout << "Derived" << endl; }
};

Base *b = new Derived();
b->print(); // prints "Derived"
```

- override keyword: used to indicate that a function is meant to override a
virtual function in a base class

ex.
```cpp
class Base {
    virtual void print() { cout << "Base" << endl; }
};

class Derived : public Base {
    void print() override { cout << "Derived" << endl; }
};

Base *b = new Derived();
b->print(); // prints "Derived"
// same output as above, but with override keyword to denote more
// explicitly that Derived::print() is meant to override Base::print()
```

- abstract vs. concrete classes

abstract class: a class with at least one pure virtual function
these classes cannot be instantiated because their methods are not
implemented

concrete class: a class with all implemented methods

ex.
```cpp
class Base {
    virtual void print() = 0;
};

class Derived : public Base {
    void print() { cout << "Derived" << endl; }
};

Derived d; // works fine
Base b; // error: cannot instantiate abstract class
```
