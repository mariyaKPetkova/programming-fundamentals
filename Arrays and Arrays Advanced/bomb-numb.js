function bombNumber(arr, infoArr) {
    //1st solution:
    // let bombNum = infoArr[0];
    // let range = infoArr[1];
    // let indexOfBomb = arr.indexOf(bombNum);
    // while (indexOfBomb > -1) {
    //     arr.splice(Math.max((indexOfBomb - range), 0), Math.min(range, indexOfBomb));
    //     indexOfBomb = arr.indexOf(bombNum);
    //     arr.splice(indexOfBomb, (range + 1));
    //     indexOfBomb = arr.indexOf(bombNum);
    // }
    // console.log(calculateSum(arr));
    // function calculateSum(array) {
    //     let sum = 0;
    //     for (let n of array) {
    //         sum += n
    //     }
    //     return sum
    // }
    const num = infoArr[0];
    const power = infoArr[1]
    const result = arr.reduce((acc, curr) => {
        if (num === curr) {
            const secondPart = arr.splice(arr.indexOf(num) + 1, power)
            const firstPart = arr.reverse().splice(arr.indexOf(num) + 1, power)
            arr.splice(arr.indexOf(num), 1)
            acc.push(arr)
        }
        return acc
    }, [])
    const sum = arr.reduce((a, b) => a + b)
    console.log(sum);
}
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]

)
// function bombNumber(arrBomb, infoArr) {

//     let bombNum = infoArr[0];
//     let range = infoArr[1];

//     arrBomb = bombAction(arrBomb)
//     arrBomb = calculateSum(arrBomb)

//     function bombAction(arr) {
//         let indexOfBomb = arr.indexOf(bombNum);
//         while (indexOfBomb > -1) {
//             arr.splice(Math.max((indexOfBomb - range), 0), Math.min(range, indexOfBomb));
//             indexOfBomb = arr.indexOf(bombNum);
//             arr.splice(indexOfBomb, (range + 1));
//             indexOfBomb = arr.indexOf(bombNum);
//         }
//         return arr
//     }

//     function calculateSum(array) {
//         let sum = 0;
//         for (let n of array) {
//             sum += n
//         }
//         return sum
//     }
//     return arrBomb
// }

// console.log(bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
// ));
