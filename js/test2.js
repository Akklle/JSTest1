function isAnagram (s1, s2){
    if(s1.length !== s2.length){
        return false;
    }

    let lowS1 = s1.toLowerCase();
    let lowS2 = s2.toLowerCase();

    if(lowS1 === lowS2) {
        return false;
    }

    let newS1 = lowS1.split('').sort().join('');
    let newS2 = lowS2.split('').sort().join('');

    return newS1 === newS2;
}

let s1 = "кто";
let s2 = "кот";

let result = isAnagram(s1, s2);

console.log(result);