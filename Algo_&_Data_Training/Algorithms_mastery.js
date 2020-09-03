// Sorting Algorithm
// Rearranging the item in a collection

// Bulit in JavaScript Sorts
// arr.sort(a,b) = [zebra, lion, apple, banana].sort() => [apple, banana, lion, zebra]
// If a returns a negative a should come before b
// If a returns a postive b should come before a
// if it return 0 it stays the same.

function numberCompare(num1, num2) {
    return num1 - num2
}

[6, 4, 15, 10].sort(numberCompare)

function compareByLen(str1, str2) {
    return str2.length - str1.length
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)

//************  Elementary Sorting algos ************//
// All average time complexities that are quadratic

//*****  BubbleSort *****//

//Swaping ES5
function swap1(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// Swaping ES2015
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

// Big O(n^2) => nested loop
// Start looping with a variable call i at the end of the array and decrementing to the beginning
// start an inner loop with a variable call j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap those two values!
// repeat this until the array is sorted
// return the sorted arr
// add a variable no swap before the parent loop
// set noSwap to true in the parent loop then to false inside of the conditional the swapping occurs
// set a condition if noswap is true the break the parent loop 

// Big O(n) => nearly sorted data
// Add noSwaps for optimization & Linear Time

// Space complexitiy
// Big O(1)

function bubbleSort(arr) {
    var noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break;
        // console.log("ONE PASS COMPLETE")
    }
    return arr
}

bubbleSort([765, 34, 5, 65, 75, 89, 90, 100])

//*****  Selection Sort *****//

// Time complexity
// Big O(n^2) => nested loop

// Space complexitiy
// Big O(1)

// Start looping with varible i through the array until the end, incrementing by 1
// save i to a variable named lowest
// start looping with variable j at i + 1 until the end of the array
// if the value of lowest is greater than the value of j then make lowest(index) equal j
// if lowest does not equal i swap the values of i with lowest
// return the array

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

selectSort([1, 2, 1, 4])

//*****  Insertion Sort *****//

// Time complexities 
// Big O(n^2) => nested loop
// Big O(n) => nearly sorted data

// Space complexitiy
// Big O(1)

// Works well when you have data coming in

// Start by picking the second element in the array
// compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the element in the correct place.
// repeat until the array is sorted.

// Start looping at index 1 with i until the end of the array
// Set a variable current to the value of i
// Start looping backward at i - 1 until the beginning of the array and while current is less than the value of j
//*** assign the value of j to j + 1 
// assign current to j + 1 


function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i]
        for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
            console.log(arr)
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = current
    }
    return arr
}
console.log(insertionSort([3, 5, 6, 8, 7, 4]))

function insertionSort(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < arr[i - 1]){
            min = arr[i];
            for (var j = i; j >= 0; j--){
                if (min < arr[j]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    return arr;
}
let new_arr = [5,3,4,2,1];
console.log(insertionSort(new_arr));

//*****  Merge Sort *****//
// Big O  => O(n*Log n)
// Set result varible for the combined array
// set to iterator starting at 0
// start looping until the length of both iterators
    // Set a condition if one is less than the other push it into results
    // else push the other
// start looping both iterator to add the remaining values
//return result arr

function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

// set base case
// set a variable to the midpoint
// set a left variable to recursively split the array for the left side
// do the same for the right side
// return a call of the merge to combine left and right after reaching base case 
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([14, 12, 8, 3, 2, 11, 5, 6]))