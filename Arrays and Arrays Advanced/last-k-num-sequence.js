function lastKNumbersSequence(n, k) {
    
    let newArr = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let lastK = newArr.slice(-k);
        for (let j = 0; j < lastK.length; j++) {
            sum += lastK[j]
        }
        newArr.push(sum);
    }
    console.log(newArr.join(' '));
}
lastKNumbersSequence(8,2)