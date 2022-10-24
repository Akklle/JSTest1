function deleteDuplicateElements(arr) {
    let array = new Set(arr)
    return Array.from(array)
}

console.log('1.', deleteDuplicateElements(["1", "5", "3", "5", "3"]))


function getSum(arr) {
    let sumCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        sumCounter += arr[i];
    }
    return sumCounter;
}

console.log('2.', getSum([19, 10, 0, 7]));


function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x))
}

console.log('3.', intersection(['1', '2', '3'], ['1', '3']))


function binarySearch(elem, arr) {
    let left = 0;
    let right = arr.length - 1;
    while (right >= 0) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === elem) {
            return mid;
        } else if (arr[mid] < elem) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log('4.', binarySearch(10, [1, 4, 7, 10, 12, 88, 90]));


function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let res = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    if (i < arr1.length) {
        res.push(...arr1.slice(i));
    } else if (j < arr2.length) {
        res.push(...arr2.slice(j));
    }
    return res;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let elem = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, elem);
    let arr2 = arr.slice(elem);
    return merge(mergeSort(arr1), mergeSort(arr2))
}

console.log('5.', mergeSort([6, 87, 13, 1, 4]));