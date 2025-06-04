# lab 10 outline

---

## node struct example

```c
typedef struct Airport_struct {
    char* country;
    char* continent;
    double latitude;
    double longitude;
    // other details
} Airport;

typedef struct TripNode_struct {
    Airport* airportPtr;
    struct TripNode_struct* nextTripNodePtr;
} TripNode;

int main() {
    Airport* airports = malloc(3 * sizeof(Airport));

    // fill in airport details
    // ...
    // ...

    TripNode* trip = malloc(sizeof(TripNode));
    trip->airportPtr = &airports[0];
    trip->nextTripNodePtr = malloc(sizeof(TripNode));
    trip->nextTripNodePtr->airportPtr = &airports[1];
    trip->nextTripNodePtr->nextTripNodePtr = malloc(sizeof(TripNode));
    trip->nextTripNodePtr->nextTripNodePtr->airportPtr = &airports[2];
    trip->nextTripNodePtr->nextTripNodePtr->nextTripNodePtr = NULL;
}
```

## doubly-linked list

```c
typedef struct Node_struct {
    int data;

    // pointer to previous and next nodes
    struct Node_struct* prev;
    struct Node_struct* next;
} Node;
```

## circularly-linked list

```c
typedef struct Node_struct { // pointer to next node
    int data;
    struct Node_struct* next;
} Node;

Node* head = malloc(sizeof(Node));
Node* node1 = malloc(sizeof(Node));
Node* node2 = malloc(sizeof(Node));

head->next = node1;
node1->next = node2;
node2->next = head;
```

## binary search tree

in a binary search tree (BST), each node has at most two children, referred
to as the left child and the right child. the key in each node must be
greater than or equal to any key stored in the left child, and less than or
equal to any key stored in the right child.

```c
typedef struct Node_struct {
    int data;
    struct Node_struct* left;
    struct Node_struct* right;
} Node;

Node* root = malloc(sizeof(Node));
root->data = 5;
root->left = malloc(sizeof(Node));
root->left->data = 3;
root->right = malloc(sizeof(Node));
root->right->data = 7;

// traversal
void inOrder(Node* node) {
    if (node == NULL) { return; }

    // recursive call starts at leftmost node, so order is from smallest to largest
    inOrder(node->left);

    printf("%d\n", node->data);

    inOrder(node->right);
}
```

## graph traversal

graphs are more complex than trees because they can have cycles.
trees have a strictly defined parent-child relationship, but graphs can
have arbitrary connections between nodes.

types of graph traversal:
- breadth first search (BFS): queue up nodes to visit and then visit each neighbor
- depth first search (DFS): visit a node and then recursively visit each neighbor
