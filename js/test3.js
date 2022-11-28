function moveZeroToEnd(arr) {
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }
    return arr;
}

console.log(moveZeroToEnd([1,0,3,7,0,0,7,4,0]))
console.log(moveZeroToEnd([234,54,1,0,0,4,0,4,5,0,5]))