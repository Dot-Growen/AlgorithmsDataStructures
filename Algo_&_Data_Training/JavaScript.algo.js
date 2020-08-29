
//// Problem solving Patterns
// 1. Frequency Counter Pattern

// The Frequency counter uses an object to break down the contents of an arr(or string) and then your able compare the contents of those objects

// Big O Time complexity: O(3n) 
// if we have 1000 element we'd have 3,000 iteration
// 1.1 Same frequency of numbers in both arrays
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(same([1, 2, 3], [1, 9, 4]))

// Big O Time complexity: O(n) 
// if we have 1000 element we'd have 2,000 iteration
// 1.2 Both sided have the same letter
function validAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false
    }
    let checkup = {}

    for (let val of str1) {
        checkup[val] ? checkup[val] += 1 : checkup[val] = 1
    }
    console.log(checkup)
    for (var i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!(checkup[letter])) {
            return false
        } else {
            checkup[letter] -= 1;
        }
    }
    return true
}

console.log(validAnagram('assyusdfdffp', 'ffsddfuspsya'))

// 2. Multiple Pointers Pattern (for sorted arrays)
// 2.1 find where the first sum equals 0
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum == 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10]))

// 2.2 countUniqueValues

function countUniqueValues(arr){
    let point1 = 0
    let point2 = 1
    
    if (arr.length === 0){
        return 0
    }
    while(point2 < arr.length) {
        if (point2 == arr.length-1){
            return (point1+1)
        } 
        if (arr[point1] == arr[point2]){
            point2++
        } 
        if (arr[point1] !== arr[point2]){
            point1++
            arr[point1] = arr[point2]
        }
    }
}

// example                     i
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6]))
// output: 6
countUniqueValues([])
// output: 0


function countUniqueValues3(arr){
    let i = 0
    if (arr.length === 0 ){
        return 0
    }
    for(var j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return (i+1)
}
console.log(countUniqueValues3([1, 2, 3, 4, 4, 4, 5, 6]))

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
console.log(balancePoint([1, 2, 13, 4, 12])) 

// Remove Duplicates
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

//////////////////////////////////////////////////////////

// Recursive Function

// Two essential
// 1. Base Case
// 2. differnt input(recursive call)

// wHERE THINGS GO WRONG 
// No base case
// Forgetting to return or returning the wrong thing
//Stack overflow

function countDown(num) {
    if (num <= 0) {
        console.log('all done')
    } else {
        console.log(num)
        countDown(num - 1)
    }
}
countDown(3)

function sumRange(num) {
    console.log(num)
    if (num === 1) {
        return 1;
    }

    return num + sumRange(num - 1)
}
console.log(sumRange(5))

function factorial(num) {
    if (num <= 0) return 1
    return num * factorial(num - 1)
}

console.log(factorial(4))


// Helper method Recursion
// Let's try to collect all of the odd values in an array!

function collectOddValues(arr) {

    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// Helper method Recursion ( pure recursion )
// Let's try to collect all of the odd values in an array!

// For array - slice, the spread operator, and concat that make copies of arrays so you dont mutate them
// For strings - slice, substr or substring to make copies
// for objects - Object.assign or spread operator

function collectOddValues(arr) {
    let newArr = []
    if (arr.length === 0) {
        return newArr
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))



