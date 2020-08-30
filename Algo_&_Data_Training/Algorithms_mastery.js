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

//*****  BubbleSort *****//

//Swaping ES5
function swap1(arr, idx1, idx2) {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// Swaping ES2015
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

// Big O(n^2) => nested loop
// Start looping with a variable call i at the end of the array towards the beginning
// start an inner loop with a variable call j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap those two values!

// Big O(n) => linear 
// Add noSwaps for optimization 

function bubbleSort(arr) {
    // var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        // noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                // noSwaps = false
            }
        }
        // if (noSwaps) break;
        console.log("ONE PASS COMPLETE")
    }
    return arr
}

console.log(bubbleSort([765, 34, 5, 65, 75, 89, 90, 100]))

//*****  Selection Sort *****//