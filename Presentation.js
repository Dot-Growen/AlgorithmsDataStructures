// Start looping with varible i through the array until the end, incrementing by 1
// save i to a variable named lowest
// start looping with variable j at i + 1 until the end of the array
// if the value of lowest is greater than the value of j then make lowest(index) equal j
// if lowest does not equal i swap the values of i with lowest
// return the array

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (lowest !== i) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

console.log(selectionSort([3, 2, 4, 1]))