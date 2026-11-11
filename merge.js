function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    } else {
        const half = Math.ceil(arr.length / 2);
        const leftArr = arr.slice(0, half);
        const rightArr = arr.slice(half);
        
        let newLeft = mergeSort(leftArr)
        let newRight = mergeSort(rightArr)
        return merge(newLeft, newRight)
    }
}


function merge(leftArr, rightArr) {
    let newArr = [];
    while(leftArr.length > 0 && rightArr.length > 0) {
        if(leftArr[0] <= rightArr[0]) {
            newArr.push(leftArr.shift())
        } else {
            newArr.push(rightArr.shift())
        }

        
    }
    newArr.push(...leftArr, ...rightArr)
    return newArr;
}

console.log(mergeSort([3,1,3,2,6]))
//console.log(merge([4], [1]))
module.exports = mergeSort;