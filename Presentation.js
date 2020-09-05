function arrayParition(arr, start = 0, end = arr.length) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    let pivot = arr[start]
    let swapIdx = start
    for (var i = start + 1; i <= end; i++) {
        if (arr[i] <= pivot) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    console.log(arr)
    return arr.indexOf(pivot)
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = arrayParition(arr, left, right)
        quickSort(arr, left, right = pivotIndex - 1)
        quickSort(arr, left = pivotIndex + 1, right)
    }
    return arr
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))