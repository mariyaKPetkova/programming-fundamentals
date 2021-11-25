function condenseArray(arr) {

    for (let num of arr) {
        if (arr.length <= 1) return console.log(arr.join(''));
        let condensed = [];
        let currentSum = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            num = +arr[i];
            currentSum = num + arr[i + 1];
            condensed.push(currentSum);
        }
        arr = condensed;
    }
    
}
condenseArray([1])