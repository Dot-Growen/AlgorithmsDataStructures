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
