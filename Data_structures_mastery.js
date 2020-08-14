// Singly Linked Listed
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


// Doubly Linked Listed

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

    pop() {
        if (this.head == null) {
            return undefined;
        }
        var currentTail = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        var newTail = this.tail.prev;
        newTail = this.tail;
        newTail.next = null;
        this.length--
        return currentTail;
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


