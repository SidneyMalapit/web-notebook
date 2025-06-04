# lab 11 outline

---

## c vs c++

- input/output
    - c: \<stdio.h\> as header, scanf/printf, used with parentheses
    - c++: \<iostream\> as header, cin/cout, used with << and >>, no format specifiers needed
    - ex.
```c
int x;
scanf("%d", &x);
printf("%d\n", x);
```
```c++
int x;
cin >> x;
cout << x << endl;
```
- procedural vs. object-oriented programming
    - c is a procedural language - code is executed in order from top to bottom
    - c++ is object-oriented - code is organized into classes and objects
    - ex.
```c
int x = 5;
int y = 10;
int z = x + y;
```
```c++
class Adder {
    public:
        int add(int x, int y) { return x + y; }
};
Adder a;
int z = a.add(5, 10);
```
- information hiding
    - c: no built-in support for data hiding
    - c++: classes can have private data members that are hidden from outside
    access declared with the private keyword

- function and operator overloading
    - c: no support for function overloading
    - c++: functions and operators can be overloaded with different parameters
    - ex.
```c++
int add(int x, int y) { return x + y; }
int add(int x, int y, int z) { return x + y + z; }
```

## defining a class

- data members and methods
    - data members are variables that store information about the class
    - methods are functions that operate on the data members
    - ex.
```c++
class Point {
    public:
        int x, y;
        void set(int x, int y) { this->x = x; this->y = y; }
        void print() { cout << "(" << x << ", " << y << ")" << endl; }
};
```
- public vs. private
    - public members are accessible from outside the class
    - private members are only accessible from within the class
    - ex.
```c++
class Point {
    private:
        int x, y;
    public:
        void set(int x, int y) { this->x = x; this->y = y; }
        void print() { cout << "(" << x << ", " << y << ")" << endl; }
};
```
- setters & getters
    - setters are methods that set the value of a data member
    - getters are methods that return the value of a data member
    - ex.
```c++
class Point {
    private:
        int x, y;
    public:
        void setX(int x) { this->x = x; }
        void setY(int y) { this->y = y; }
        int getX() { return x; }
        int getY() { return y; }
};
```
- constructors and destructors
    - constructors are special methods that are called when an object is created
    - destructors are special methods that are called when an object is destroyed.
    they are usually used to clean up any resources allocated by the object
    - ex.
```c++
class Point {
    private:
        int x, y;
    public:
        Point() { x = 0; y = 0; }                         // default constructor
        Point(int x, int y) { this->x = x; this->y = y; } // parameterized constructor
        Point(const Point& p) { x = p.x; y = p.y; }       // copy constructor
        ~Point() { cout << "Point destroyed" << endl; }   // destructor
};
```

## example linked list class

```c++
class Node {
    public: // public data members and methods, accessible from outside the class
        Node(int data) { this->data = data; next = nullptr; }                // default constructor
        Node(int data, Node* next) { this->data = data; this->next = next; } // parameterized constructor
        Node(const Node& n) { data = n.data; next = n.next; }                // copy constructor
        getNext() { return next; }                                           // getter

    private: // private data members, inaccessible from outside the class
        int data;
        Node* next;
};

class LinkedList {
    public:
        LinkedList() { head = nullptr; }
        void append(Node* node) {
            if (head == nullptr) { head = node; }
            else {
                Node* current = head;
                while (current->getNext() != nullptr) {
                    current = current->getNext();
                }
                current->next = node;
            }
        }
        void prepend(Node* node) {
            node->next = head;
            head = node;
        }
        void removeAfter(Node* node) {
            if (node->getNext() != nullptr) {
                Node* temp = node->getNext();
                node->next = temp->getNext();
                delete temp;
            }
        }
    private:
        Node* head;
};
```

## declaring objects

```c++
Point p1;        // default constructor
Point p2(5, 10); // parameterized constructor
Point p3(p2);    // copy constructor
p1.setX(3);      // setter method
p1.setY(7);

// getter method to print private data members
cout << p1.getX() << ", " << p1.getY() << endl;
```
