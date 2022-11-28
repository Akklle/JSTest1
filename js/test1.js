function iWantToGet(sum) {
    const notes = [1000, 500, 200, 100, 50];
    if (sum>1500 || sum<50){
        return -1
    }

    let result = 0;

    if (sum > 0) {
        for (let i = 0; i < notes.length; i++) {
            let note = notes[i];
            while (sum - note >= 0) {
                sum -= note;
                result++;
            }
        }
    } else {
        console.log(-1);
    }
    return result;
}

console.log(iWantToGet(900));
