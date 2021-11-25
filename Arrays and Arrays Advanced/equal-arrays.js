function equalArrays(arr1, arr2) {
    // let sumArr1 = 0;
    // let sumArr2 = 0;
    // for (let num of arr1) {
    //     num = Number(num);
    //     sumArr1 += num;
    // }
    // for (let numb of arr2) {
    //     numb = Number(numb);
    //     sumArr2 += numb;
    // }
    // if (sumArr1 === sumArr2) {
    //     console.log(`Arrays are identical. Sum: ${sumArr1}`);
    // } else {
    //     for (let i = 0; i < arr1.length; i++) {
    //         if (arr1[i] !== arr2[i]) return console.log(`Arrays are not identical. Found difference at ${i} index`);
    //     }
    // }

    //2nd solution:

    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return console.log(`Arrays are not identical. Found difference at ${i} index`);
        if (arr1[i] === arr2[i]) {
            let num = Number(arr1[i]);
            sum += num;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '3', '4', '5'])