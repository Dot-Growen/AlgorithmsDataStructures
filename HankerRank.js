// 8 - 29 - 2020 
// 1. Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    var diag1 = 0
    var diag2 = 0
    var x = 0
    var y = 0
    var boxSize = arr[x].length
    var z = boxSize - 1

    for (var i = 1; i <= boxSize; i++) {
        diag1 += arr[x][y]
        diag2 += arr[x][z]
        x++
        y++
        z--
    }

    return Math.abs(diag1 - diag2)
}

console.log(diagonalDifference(
    [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]]))


// 2. Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Pseudo Flow
// set 3 variables pos, neg, zer equal to 0
// Loop through the arr
// if val is negative, postitive or zero add 1 to the corresponding variable
// print the ratio of each variable to the length of the arr with a set decimal place of 6

function plusMinus(arr) {
    var pos = 0
    var neg = 0
    var zer = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zer++
        } else if (arr[i] > 0) {
            pos++
        } else {
            neg++
        }
    }
    console.log((pos / arr.length).toFixed(6) + "\n" + (neg / arr.length).toFixed(6) + "\n" + (zer / arr.length).toFixed(6))

}

plusMinus([-1, -2, 0, 9, 8, 9])

// 3. Write a program that prints a staircase of size n.

// create a varible x with the value of n - 1
// create a loop the ends at n and increments by 1 
// prints " " x times and "#" i times for each loop
// decrement x


function staircase(n) {
    var x = n - 1
    for (var i = 1; i <= n; i++) {
        console.log(" ".repeat(x) + "#".repeat(i))
        x--
    }
}

staircase(4)

// 4. Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// sort the incoming arr
// create a variable x that equals the inpuat array's length
// create a variable y and z starting at 0
// create a loop that iterate by 1 until the 1 before the last item
// plus equals y to arr[i]
// plus equals z to arr[x]
// decrement x 
// console log x and y one space apart



function miniMaxSum(arr) {
    arr.sort()

    var x = arr.length - 1
    var y = 0
    var z = 0

    for (var i = 0; i < arr.length - 1; i++) {
        y += arr[i]
        z += arr[x]
        x--
    }
    console.log(y + " " + z)
}

miniMaxSum([3, 5, 1, 4, 2])

// 5. You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// find the max on the input arr
// create a variable "count" to count the number of tallest candles 
// create a loop the iterate through the arr
// set a condition increments the count for each tallest



function birthdayCakeCandles(arr) {

    let tallest = Math.max(...arr)
    let count = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == tallest) {
            count++
        }
    }
    return count;

}

birthdayCakeCandles([3, 2, 1, 3])
