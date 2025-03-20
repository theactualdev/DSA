function quickSort(arr){
    if(arr.length <= 1) return arr;
    
    let pivot = arr[arr.length - 1];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    let mid = arr.filter(x => x === pivot)
    return[...quickSort(left), ...mid, ...quickSort(right)]
}

console.log(quickSort([5, 7, 8, 2, 3]))