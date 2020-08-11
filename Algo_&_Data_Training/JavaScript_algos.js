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

// Singly Linked List () Day 2 )

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

class SSL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    flatten(){

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
        var current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

child1 = Node(12)
child1.c