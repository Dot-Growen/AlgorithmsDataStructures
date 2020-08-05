// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of

function power (base, expo){
    if (expo == 0 ){
        return 1
    }
    if (expo <= 1){
        return base
    } else {
        return base * power(base, expo - 1)
    }
}
console.log(power(2,0))

// which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!)  ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.factorial zero (0!) is always 1.

function factorial(num){
    if (num === 0){
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(4))

// Write a function called productOfArray  which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
    if (arr.length === 1){
        return 1 
    } else {
        result = arr[0] * productOfArray(arr.slice(1))
    }
    return result
}

console.log(productOfArray[2,3,4])

