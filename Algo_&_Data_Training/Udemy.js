
//// Problem solving Patterns
// 1. Frequency Counter Pattern

// The Frequency counter uses an object to break down the contents of an arr(or string) and then your able compare the contents of those objects

// Big O Time complexity: O(n^2) UNEFFICIENT WAY (nested loop)
// if we have 1000 element we'd have 1,000,000 iteration
function same(arr, arr2) {
    if (arr.length != arr2.length) {
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        let correctIndex = arr2.indexOf(arr[i] * arr[i]) // indxOf is a loop iteration
        if (correctIndex == -1) {
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true
}
console.log(same([1, 2, 3], [1, 9, 4]))

// Big O Time complexity: O(3n) 
// if we have 1000 element we'd have 3,000 iteration
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

// countUniqueValues
// set two pointer
// set a uniqueVal variable to 0
// pointer 1 will equal the start of a unique value
// pointer 2 will equal the next values
// create a while loop that run as long as point 1 is less then the length of the array
// create an condition 
// if point 1 is equal to the length of the array - 1 then return uniqueVal
// if pot 1 is equal to pot 2, pot 2 will increment by 1 
// else if pot 1 not equal to pot 2 uniqueVal plus equals 1 & pot 1 = pot 2 

// NAVIE APPROACH (.064 seconds)
function countUniqueValues(arr) {
    let point1 = 0
    let point2 = 0
    let uniqueVal = 0
    if (arr.length > 0) {
        uniqueVal += 1
    } else {
        return uniqueVal
    }
    while (point1 < arr.length) {
        if (point2 == arr.length - 1) {
            return uniqueVal
        } else if (arr[point1] = arr[point2]) {
            point2++
        }
        if (arr[point1] !== arr[point2]) {
            uniqueVal++
            point1 = point2
        }
    }
}

// example
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6]))
// output: 6
countUniqueValues([4, 3, 2, 2, 5, 7, 7, 7, 8])
// output: 6
countUniqueValues([])
// output: 0

// REFACTORED APPROACH (.06 seconds)
function countUniqueValues2(arr){
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
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 5, 6]))

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

//////////////////////////////////////////////////////////

// Recursive Function

// two essential
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



