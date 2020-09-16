//********** Singly Linked Listed **************//
// Linked List: A data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each nodes is composed of a data and a reference (link) to the next nodes in the sequence.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            var tail = this.tail;
            tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        var oldtail = this.head;
        var newtail = oldtail;
        while (oldtail.next) {
            newtail = oldtail;
            oldtail = oldtail.next
        }
        newtail.next = null;
        this.tail = newtail;
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldtail

    }

    makeLoop(num) {
        var runner = this.head;
        var tail = this.tail;
        var temp;
        while (runner.next) {
            if (runner.val === num) {
                temp = runner;
            }
            runner = runner.next
        }
        if (temp === null) {
            console.log("Node body here.");
            return this;
        }
        tail.next = temp;
        console.log("LOOP CREATED! " + "Tail Now Pointing at ==> " + temp.val);
        return this
    }

    DetectLoop() {
        if (!this.length) {
            return undefined;
        }
        var tail = this.tail;
        if (tail.next) {
            console.log("LOOP DETECTED")
            return true
        } else {
            console.log("NO LOOP HERE")
            return false
        }
        // console.log(this.tail)
    }

    breakLoop() {
        var tail = this.tail;
        if (tail.next) {
            tail.next = null
            console.log("LOOP BROKEN")
        } else {
            console.log("No Need to Break")
        }
    }


    print() {
        var arr = [];
        var runner = this.head;
        while (runner) {
            arr.push(runner.val);
            runner = runner.next
        }
        console.log(arr)
    }

    transverse() {
        var runner = this.head;
        while (runner) {
            console.log(runner.val);
            runner = runner.next;
        }
    }
}

var list = new SLL()
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.pop();
list.pop();
list.pop();
list.pop();
list.print();


// Pushing Pseudocode:
// 1. this function should accept a value
// 2. Create a new node using the value passed to the function
// 3. If there is no head property on the list, set the head and tail to be the newly created node
// 4. Otherwise set the next property on the tail tro be the new node and set the tail property on the list to be the newly create node
// 5. increment the length by one.

// Pop Pseudocode:
// 1. If there are no nodes in the list return undefined
// 2. Loop through the list until you reach the tail
// 3. Set the next property on the 2nd to last node to be null
// 4. Set tail to be 2nd to last node
// 5. Decrement the length of the list by 1
// 6. return the value of the node removed
// 7. Set a condition for when the list is empty the head and tail becomes null.


//********** Doubly Linked Listed ************//

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // return undefine if there is no head
    // save value of the current tail
    // if list length is 1 then set head and tail to null
    // otherwise set the tail to the node before it
    // set the next property of the tail to null
    // decrement the length
    // return the removed tail

    pop() {
        if (!this.head) return undefined;
        var currentTail = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currentTail.prev;
            this.tail.next = null;
        }
        this.length--
        return currentTail;
    }

    // return undefine if there is no head
    // return the value of the head

    front() {
        if (!this.head) {
            return undefined;
        } else {
            console.log("STARTING VALUE => " + this.head.val);
            return this.head.val;
        }
    }

    // return undefine if there is no head
    // return the value of the tail

    back() {
        if (!this.head) {
            return undefined;
        } else {
            console.log("LAST VALUE => " + this.tail.val);
            return this.tail.val;
        }
    }

    // return undefine if there is no head
    // set a runner variable equal to the head
    // create a loop to traverse through the values
    // if the runner's value is equal to the input value then return true
    // set runner to next node
    // after the loop end return false

    contains(val) {
        if (!this.head) return undefined;
        var runner = this.head;
        while (runner) {
            if (runner.val == val) {
                console.log(val + " Is in the list  ")
                return true;
            }
            runner = runner.next;
        }
        console.log("List does not contain => " + val)
        return false;
    }

    // return length

    size() {
        console.log("The list has " + this.length + " values")
        return this.length;
    }

    print() {
        var arr = [];
        var runner = this.head;
        while (runner) {
            arr.push(runner.val)
            runner = runner.next;
        }
        console.log(arr)
    }
}

var list = new DLL()
list.push(4)
list.push(5)
list.push(6)
list.push(8)
list.push(23)
console.log(list)


//********** Stacks ***********//

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var first = this.first;
            this.first = newNode;
            this.first.next = first;
        }
        this.length++
        return this;
    }

    // if no node in the stack return undefined ("NOthing to pop")
    // if there's one node set the length to 0 and the first and last property to null
    // otherwise Save the first val to a variable
    // Set the first node's next property to be the first
    // decrement the list by one

    pop() {
        if (!this.first) return null;
        var first = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--
        return first.val;
    }

    print() {
        var arr = []
        var runner = this.first;
        if (this.length >= 1) {
            while (runner) {
                arr.push(runner.val);
                runner = runner.next
            }
        } else {
            console.log("Stack not big enough")
        }

        console.log(arr)
    }

}


var stack = new Stack();

stack.push("I")
stack.push("am")
stack.push("sad")
stack.pop()
stack.print()


//********** Queues **********//

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        return ++this.length
    }

    dequeue() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first == this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.length--
        return temp.val
    }

    print() {
        var arr = []
        var runner = this.first;
        if (this.length >= 1) {
            while (runner) {
                arr.push(runner.val);
                runner = runner.next
            }
        } else {
            return null;
        }
        console.log(arr)
    }
}


var q = new Queue()

q.enqueue("1st")
q.enqueue("2nd")
q.enqueue("3rd")
q.print()
q.dequeue()
q.print()
q.dequeue()
q.print()

//********** Binary Search Tree ***********//

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.count = 0;
    }


    // Create a new node
    // Check if there's a root if not set the root to the new node and return this
    // Check if the val has already been adding if so return undefined
    // Create a loop that going until false
    // Create a variable runner to iterate through the tree
    // Check if the val is greater or less then the current node the runner is on
    // if greater 
    // Then check is the right property is null
    // if so make the right property the new node
    // if not repeat the sequence.
    // if less: do the same as for the right

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            this.count++
            return this
        } else {
            var runner = this.root;
            while (true) {
                if (val === runner.val) return undefined;
                if (val > runner.val) {
                    if (!runner.right) {
                        runner.right = newNode;
                        this.count++
                        return this;
                    } else {
                        runner = runner.right;
                    }
                } else if (val < runner.val) {
                    if (!runner.left) {
                        runner.left = newNode;
                        this.count++
                        return this;
                    } else {
                        runner = runner.left;
                    }
                }
            }
        }
    }

    insert_recursive(val, runner = this.root) {
        var newNode = new Node(val);
        if (!runner) {
            this.root = newNode;
            return this
        }
        if (val === runner.val) return undefined;
        if (val > runner.val) {
            if (!runner.right) {
                runner.right = newNode;
                this.count++
                return this;
            } else {
                return this.insert_recursive(val, runner = runner.right)
            }
        } else if (val < runner.val) {
            if (!runner.left) {
                runner.left = newNode;
                this.count++
                return this;
            } else {
                return this.insert_recursive(val, runner = runner.left)
            }
        }
    }

    contains(val) {
        if (!this.root) {
            return false;
        } else {
            var runner = this.root;
            while (runner) {
                if (val > runner.val) {
                    runner = runner.right;
                } else if (val < runner.val) {
                    runner = runner.left;
                } else {
                    return true;
                }
            }
            return false
        }
    }

    contains_recurise(val, runner = this.root) {
        if (!runner) {
            return false;
        }
        if (val == runner.val) {
            return true
        } else if (val > runner.val) {
            return this.contains_recurise(val, runner = runner.right)
        } else {
            return this.contains_recurise(val, runner = runner.left)
        }
    }

    // Check for root or if there is just one value. return undefine if there is none
    // set input so that runner = this.root
    // create a base case; if left property is null return the runner.val
    // otherwaise recursively set the runner to left property

    min_recurisve(runner = this.root) {
        if (!this.root || this.count == 1) {
            return undefined;
        } else {
            if (!runner.left) {
                return runner
            } else {
                return this.min(runner = runner.left)
            }
        }
    }

    // Set a base case for if the Node at the root is null. if so return -1
    // set a left and right variable the recurively checks for each node in the tree
    // check for max between the left and the right then return the greater

    height(node = this.root) {
        if (!node) {
            return 0;
        }

        const left = this.height(node.left);
        const right = this.height(node.right);
        if (left > right) {
            return left + 1
        } else {
            return right + 1
        }
        // return Math.max(left, right) + 1
    }

    // Set a base case if the "checker node" is null return 1
    // Set recursive functions to check the left and right children
    // if not null have the "checker node" move to the left in the recursive function
    // when null return the sum of the left and right additions plus 1

    size(node = this.root) {
        if (node === null) {
            return 0;
        }
        let left = this.size(node.left)
        let right = this.size(node.right)
        return (left + right) + 1
    }

    min(node = this.root) {
        var current = node
        while (current.left) {
            current = current.left
        }
        return current
    }

    // if head is null return undefine
    // loop through the tree for the given value
    // if the node is present
    // set a condition to check if its the head
    // if so, set the minimum value on the right side to the head
    // set a sondition to check if it has children
    // if so set the minimum val of that side to its position
    // if not set the the prev node right or left property to null

    Remove(val, node = this.root) {
        if (!this.root) {
            return this.root;
        }
        console.log(node.val)
        if (val < node.val) {
            node.left = this.Remove(val, node.left)
        } else if (val > node.val) {
            node.right = this.Remove(val, node.right)
        } else {
            if (node.left == null) {
                return node.right
            } else if (node.right == null) {
                return node.left
            }
            var temp = this.min(node.right);
            node.val = temp.val
            node.right = this.Remove(val, node.right)
        }
        return node;
    }

}

var tree = new BinarySearchTree()

tree.insert_recursive(10)
tree.insert_recursive(12)
tree.insert_recursive(6)
tree.insert_recursive(4)
tree.insert_recursive(2)
console.log(tree.contains_recurise(2, runner = this.root))

//******** Tree Traversal *********//

// Trees are non linear data structures that contain a root and child nodes
// Binary Trees can have value of any type, but at most two children for each parent
// Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
// We can search through Trees using BFS and DFS

// visit the node
// explore the entre left side 
// explore the entre right side


// Time complexity = the same
// Breadth First 
// Depth First

// Space complexity 
// Breadth First => takes up more space as the tree widens
// Depth First => takes up more is the tree is linear

// Depth First 
// Post Order => Can be used to "export" a tree structure so that it is easily reconstructed or copied.
// Pre Order 
// In Order => use commonly with BST. receive nodes in the tree in their underlying order


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    transverse() {
        let queue = []
        let visited = []
        let runner = this.root
        queue.push(runner.val)
        for (var i = 0; i < queue.length; i++) {
            visited.push(queue.shift())
            if (runner.left) {
                queue.push(runner.left.val)
            }
            if (runner.right) {
                queue.push(runner.right.val)
            }
        }
        return visited
    }

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this
        } else {
            var runner = this.root;
            while (true) {
                if (val === runner.val) return undefined;
                if (val > runner.val) {
                    if (!runner.right) {
                        runner.right = newNode;
                        return this;
                    } else {
                        runner = runner.right;
                    }
                } else if (val < runner.val) {
                    if (!runner.left) {
                        runner.left = newNode;
                        return this;
                    } else {
                        runner = runner.left;
                    }
                }
            }
        }
    }

    // Breadth first Search
    // we want to visit every node on the same level; every sibling node before we head to a child

    // Create a queue(this can be an array) and a variable to store the values of nodes visted
    // place the root node in the queue.
    // Loop as long as there is anything in the queue.
    //** */ Dequeue a node from the queue and push the value of the node into the variable that stores the nodes 
    //** */ if there is a left property on the node dequeued - add it to the queue
    //** */ if there is a right property on the node dequeued - add it to the queue
    // Return the variable that stores the values

    breadthFirstSearch() {
        var queue = []
        var visited = []
        var runner = this.root
        queue.push(runner)
        while (queue.length) {
            runner = queue.shift()
            visited.push(runner.val)
            if (runner.left) queue.push(runner.left)
            if (runner.right) queue.push(runner.right)
        }
        return visited
    }

    // create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    //** */ Push the value of the node to the variable that stores the values.
    //** */ If the node has a left property, call the helper function with the left property on the node
    //** */ if the node has a right property, call the helper function with the right property on the node
    // invoke the helper function with the current variable 
    // Return the array of values

    depthFirstPreOrder() {
        var visited = []
        var current = this.root
        function traverse(node) {
            visited.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited
    }

    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current 
    // Write a helper function which accepts a node
    //** */ If the node has a left property, call the helper function within the left property on the node
    //** */ If the node has a right property, call the helper function within the right property on the node
    //** */ Push the value of the node to the variable that stores the values
    // Invoke the helper function with the current variable
    // Return the array of values

    depthFirstPostOrder() {
        var visited = []
        var current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.val)
        }
        traverse(current)
        return visited

    }


    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current 
    // Write a helper function which accepts a node
    //** */ If the node has a left property, call the helper function within the left property on the node
    //** */ Push the value of the node to the variable that stores the values
    //** */ If the node has a right property, call the helper function within the right property on the node
    // Invoke the helper function with the current variable
    // Return the array of values

    depthFirstInOrder() {
        var visited = []
        var current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            visited.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited

    }

}
