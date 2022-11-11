function callCounter() {
    let count = 1;
    return function () {
        return count++;
    };
}

let counter = callCounter();

console.log("1.", counter(), counter(), counter());


function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

console.log("2.", sum(3)(2)(5), sum(4)(6)(2));


function generateRandNum() {
    let used = [];
    return function () {
        if (used.length === 100) {
            return;
        }
        let generatedNumber = Math.floor(Math.random() * 100 + 1);
        for (let i = 0; i < used.length; i++) {
            if (used[i] === generatedNumber) {
                return;
            }
        }
        used.push(generatedNumber);
        return generatedNumber;
    };
}

let func = generateRandNum();

console.log("3.", func(), func(), func());


const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('4.', 'Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}