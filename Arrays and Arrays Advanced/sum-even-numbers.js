function sumEven(arr) {
    let sum = 0;
    //1st solution:
    // for (let i = 0; i < arr.length; i++) {
    //     let num = Number(arr[i]);
    //     if (num % 2 === 0) {
    //         sum += num
    //     }
    // }
    // console.log(sum);

    //2nd:
    for (let num of arr) {
        num = Number(num);
        if (num % 2 === 0) {
            sum += num
        }
    }
    console.log(sum);

}
sumEven(['1', '2', '3', '4', '5', '6'])