// Singly Linked List (Day 3)

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

    push(val) {
        var newnode = new Node(val)
        if (!this.head) {
            this.head = newnode;
            this.tail = this.head;
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length++
        return this
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
        var current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SLL()

list.push(0).push(2).push(3).push(4)
list.print()

list.makeLoop(2)

// list.breakLoop()

list.DetectLoop()

