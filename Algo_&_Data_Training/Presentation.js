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
        if (this.length > 1) {
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
