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
        console.log("List does not contain => " +val)
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


// push(value) - add the value to the end of the list

// pop()  -  remove the value from the end of the list 

// front()  - return the value at the start of the list 

// back()  -   return the value at the end of the list

// contains(value)  -  return true if the value is present false otherwise

// size()   - return the number of values stored in the list


var list = new DLL()
list.push(4)
list.push(5)
list.push(6)
list.push(8)
list.push(23)

list.pop()
list.print()


list.front()
list.back()

// console.log(list.contains(4))
// console.log(list.contains(2))

list.size()


