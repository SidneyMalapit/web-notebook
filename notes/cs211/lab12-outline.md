# lab 12 outline

---

## base vs. derived class

- base class is the class that is inherited from
- derived class is the class that inherits from the base class

ex. 
```cpp
class Base {
    public:
        int x;
};

class Derived : public Base { // colon indicates right side is derived from left side
    public:
        int y;
        // x is also a member of Derived as it is inherited from Base
};
```

## overloading vs. overriding functions

- overloading: multiple functions with the same name but different parameters
- overriding: redefining a function in a derived class

ex.
```cpp
class Base {
    public:
        void display() {
            cout << "display of Base" << endl;
        }
};

class Derived : public Base {
    public:
        void display() {
            cout << "display of Derived" << endl;
        }
};
```

## constructors & destructors for derived class

- constructors are called in the order of inheritance
- destructors are called in the reverse order of inheritance

ex.
```cpp
class Base {
    public:
        Base() {
            cout << "Constructor of Base" << endl;
        }
        ~Base() {
            cout << "Destructor of Base" << endl;
        }
};

class Derived : public Base {
    public:
        Derived() {
            cout << "Constructor of Derived" << endl;
        }
        ~Derived() {
            cout << "Destructor of Derived" << endl;
        }
};

/* output:
Constructor of Base
Constructor of Derived
Destructor of Derived
Destructor of Base
*/

```

## public vs. protected vs. private access specifiers and inheritance type

- public: members are accessible from outside the class
- protected: members are accessible from derived class
- private: members are not accessible from derived class

ex.
```cpp
class Base {
    public: int x;
    protected: int y;
    private: int z;
};

class Derived : public Base {
    // x is public
    // y is protected
    // z is not accessible
};

class Derived2 : private Base {
    // x is not accessible
    // y is not accessible
    // z is not accessible
};
```

## basic UML diagram for base and derived classes

```
+-----------------+
|     Base        |
+-----------------+
| x: int          |
+-----------------+
| display()       |
+-----------------+
         ^
         |
+-----------------+
|    Derived      |
+-----------------+
| y: int          |
+-----------------+
| display()       |
| reset()         |
+-----------------+
```
