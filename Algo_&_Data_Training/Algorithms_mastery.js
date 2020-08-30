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
// Add noSwaps for optimization 

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

// Big O(n^2) => nested loop
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

// Big O(n^2) => nested loop
// Big O(n) => nearly sorted data

// Works well when you have data coming in

// Start by picking the second element in the array
// compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the element in the correct place.
// repeat until the array is sorted.

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i]
        for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = current
    }
    return arr
}

console.log(insertionSort([2, 3, 1, 4]))