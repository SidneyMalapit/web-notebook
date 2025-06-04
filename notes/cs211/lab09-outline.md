# lab 09 outline

---

## linked lists

whereas arrays stores its elements using a contiguous block of memory,
linked lists are collections of nodes which store data, and also store
a pointer to the next node in sequence of the list.

## linked lists v.s. arrays: pros and cons

pros of using a linked list over an array:

- consider inserting new elements into an array with existing elements.
for arrays of smaller sizes, this action won't pose much of a problem -
however, having an array of a large size will require the entire array
to be copied to a new location in memory, which can be costly in terms
of time and space. on the other hand, linked lists can be easily modified
by changing the pointers of the nodes, which is a much more efficient
operation.
- linked lists are also more flexible in terms of size, as they can grow
or shrink as needed. arrays, on the other hand, are fixed in size and need
to be resized if more space is needed.
- for arrays of large sizes, allocating a contiguous block of memory can
be difficult, as the memory may not be available. linked lists, however,
need only allocate memory for each node as it is created, which doesn't
require a contiguous block of memory.

cons:

- linked lists are more difficult to traverse than arrays, as they require
pointers to be followed to access each element. for example, if a program
needs to access the nth element of a linked list, it must traverse the
list from the beginning to find the nth element. this action results in a
time complexity of O(n), whereas arrays can access the nth element with
a time complexity of O(1).
    - this point can be expanded to the action of finding the length of
    a linked list, which also requires traversing the entire list to
    count the number of nodes. arrays, on the other hand, can find the
    length of the array with a time complexity of O(1) by using the
    sizeof() function.
- linked lists also require more memory than arrays, as each node must
store a pointer to the next node in the list. this extra memory usage
can add up quickly, especially for large lists.

## linked lists in C: basics

```c
#include <stdio.h>
#include <stdlib.h>

// definition
struct Node_struct {
    int data;                 // data type is arbitrary
    struct Node_struct* next; // stores the address of the next node
} Node;

// constructor
void createNode(Node* node, int data, Node* next) {
    node->data = data;
    node->next = next;
}

int main() {
    // declaration
    Node* head;
    Node* second;
    Node* third;

    // initialization
    createNode(head, 1, second);
    createNode(second, 2, third);
    createNode(third, 3, NULL);

    return 0;
}
```

## common linked list functions

- traversal - going from one node to the next by using the pointer held
by each node that points to the next node in the list

```c
void displayNodeList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d\n", current->data);
        current = current->next;
    }
}
```

- prepend - inserting a new node at the beginning of the list

```c
void prependNode(Node** head, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));

    newNode->data = data;
    newNode->next = *head;
    *head = newNode;
}
```

- append - inserting a new node at the end of the list

```c
void appendNode(Node* head, int data) {
    Node* current = head;

    while (current->next != NULL) {
        current = current->next;
    }

    Node* newNode = (Node*)malloc(sizeof(Node));

    newNode->data = data;
    newNode->next = NULL;
    current->next = newNode;
}
```

however, if the tail (the last node in the list) is kept track of, the
append function can be optimized to O(1) time complexity.

- insert at specified index

```c
void insertNode(Node* head, int index, int data) {
    Node* current = head;
    int i = 0;

    while (i < index - 1) {
        current = current->next;
        i++;
    }

    Node* newNode = (Node*)malloc(sizeof(Node));

    newNode->data = data;
    newNode->next = current->next;
    current->next = newNode;
}
```

- delete from front

```c
void deleteFrontNode(Node** head) {
    Node* temp = *head;
    *head = (*head)->next;
    free(temp);
}
```

- delete from back

```c
void deleteBackNode(Node* head) {
    Node* current = head;
    Node* previous = NULL;

    while (current->next != NULL) {
        previous = current;
        current = current->next;
    }

    previous->next = NULL;
    free(current);
}
```

- delete specified index

```c
bool deleteNode(Node* head, int index) {
    Node* current = head;
    Node* previous = NULL;
    int i = 0;

    while (i < index) {
        if (current == NULL) { return false; }
        previous = current;
        current = current->next;
        i++;
    }

    previous->next = current->next;
    free(current);

    return true;
}
```

## types of linked lists

- singly-linked list - each node has a pointer to the next node in the
list, whereas the last node points to NULL. this type is the most basic.
- doubly-linked list - each node has a pointer to the next node and the
previous node in the list. this type allows for traversal in both
directions, but requires more memory, as more pointers are needed.
- circularly linked list - the last node in the list points back to the
first node, creating a circular structure. this type can be useful for
applications where the list needs to be traversed in a loop.
