// 8/3/2020

// Balance Point
// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

function balancePoint(arr) {
    var first = 0
    var second = 0
    for (var i = 0; i < arr.length / 2; i++) {
        first += arr[i]
    }
    for (var i = arr.length - 1; i > arr.length / 2; i--) {
        second += arr[i]
    }
    if (first == second) {
        return true
    } else {
        return false
    }
}
console.log(balancePoint([1, 2, 11, 4, 10])) // False

// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.

function balanceIndex(arr) {
    var first = 0
    var second = 0
    for (var i = 0; i < (arr.length / 2) - 1; i++) {
        first += arr[i]
    }
    for (var i = arr.length - 1; i > Math.floor((arr.length / 2)); i--) {
        second += arr[i]
    }
    if (arr.length % 2 == 0) {
        return -1
    }
    else if (first == second) {
        return Math.ceil(arr.length / 2)
    }
}

console.log(balanceIndex([1, 2, 5, 4, 3, 4, 5, 2, 1]))

// 8/4/2020

// Array: Binary Search
// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

// create a function with the parameters of an array, value, end and start.
// set of a base case for a recusive functions
// have a conditional check whether the val is greater of lesser then the mid point of the array
// if greater set up a return of a recurisve function that has a start point equals the mid point
// if lesser do the opposite with the end point
// if array length equals zero return false  
// if val is equal to mid point return true
// if start is greater then end return false

function binarySearch(arr, val, end, start) {
    mid = Math.floor((arr.length) / 2)
    console.log(start, mid, end)
    if (val > arr[end] || val < arr[start]) {
        return false
    } if (start > end) {
        return false
    } if (val == arr[mid]) {
        return true
    } else if (val < arr[mid]) {
        return binarySearch(arr, val, mid - 1, start)
    } else if (val > arr[mid]) {
        return binarySearch(arr, val, end, mid + 1)
    } else {
        return true
    }
}
arr = [1, 2, 3, 4, 4, 5]
console.log(binarySearch(arr, 4, arr.length - 1, arr[0]))


// 8/5/2020

// Given a sorted array return a array with the duplicates removes

function removeDuplicates(arr) {

    let newarr = [arr[0]];
    let j = 1
    for (i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            newarr[j] = arr[i]
            j++
        }
    }
    return newarr;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6, 7]))

// Return the sum of all the values in an arr

function sumOfAllValues(ar){
    
    if ( i == 0){
        return ar[0]
    } else {
        ar[i] + sumOfAllValues(ar)
    }
}

console.log(sumOfAllValues([10,2]))

// 8/10/2020

// Singly Linked List

// Swap the head and tail
// Create a variable called next
// Create a variable called prev
// Create a variable called node and initialize it to the head property
// Loop through he list
// Set next to be the next property on whatever node is
// Set the next property on the node to be whatever prev is
// Set prev to be the value of the node variable
// Set the node variable to be the walue of the next variable

// NODE:
// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SSL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    push(val){
        var newnode = new Node(val)
        if (!this.head){
            this.head = newnode;
            this.tail = this.head;
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length ++
        return this
    }

    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new SSL()
list.push(0)
list.push(2)
list.push(3)
list.push(4)

list.reverse()
list.print()

// 8/11/2020

// Singly Linked List (Day 2)  

// Add a child pointer to nodes
// Save first node to connect variable
// point the head to next list head
// point the tail of the next list to the head of the prev list

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.child = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newnode = new Node(val)
        if (!this.head){
            this.head = newnode;
            this.tail = this.head;
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length ++
        return this
    }

    addChild(list, num){
        var runner = this.head;
        while(runner != null){
            if(runner.val === num){

                runner.child = list;
                return this;
            }
            runner = runner.next;
        }
        return this;
    }

    flatten(){
        var runner = this.head;
        while(runner !== null){
            if(runner.child){
                var temp = runner.next;
                var runnerTwo  = runner.child.head;
                runner.next = runnerTwo;
                while(runnerTwo.next !== null){
                    runnerTwo = runnerTwo.next;
                    this.count ++;
                }
                runnerTwo.next = temp;
                runner = temp;
            }
            else{
                runner = runner.next;
            }
        }
        return this;
    }

    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SLL();
list.push(6).push(9).push(14);
var child = new SLL();
child.push(5).push(16).push(19);
list.addChild(child,9);
// list.display();
list.flatten().print();

// 8/12/2020

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

    breakLoop(){
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


// 8/13/2020

// Double Linked List (Day 1)

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

// 8/14/2020

// Double Linked List (Day 2)


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
list.print()