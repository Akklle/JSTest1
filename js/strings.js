function setUpper(str) {
    let arrStr = str.split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].slice(0, 1).toUpperCase() + arrStr[i].substring(1);
    }
    return arrStr.join(' ');
}

console.log("1.", setUpper('i love you') , setUpper('new year'));


function clear(str) {
    return str.replaceAll(/[^a-z0-9а-я]/ig, '')
}

console.log("2.", clear("dia@##m@__ond"))


function isPalindrome(str) {
    let repStr = str.toLowerCase().replaceAll(' ', '');
    return repStr === repStr.split('').reverse().join('');
}

console.log("3.", isPalindrome("Я ем змея"))


function isUniqSymbols(str) {
    let newStr = '';
    let words = new Set();
    for (let i = 0; i < str.length; i++) {
        if (!words.has(str[i])) {
            newStr += str[i];
            words.add(str[i]);
        }
    }
    return newStr;
}

console.log("4.", isUniqSymbols('ssymbbool'));


function replaceAll(find, replace, str){
    return str.split(find).join(replace);
}

console.log('5.', replaceAll('u', 'a', 'future'));