function magicSum(arr, n) {

    //1-st solution:
    // for (let i = 0; i < arr.length; i++) {
    
    //     for (let j = i + 1; j < arr.length; j++) {
        
    //         if (n === arr[i] + arr[j]) {
    //             console.log(`${arr[i]} ${arr[j]}`);
    //         }
    //     }
    // }
    
    //2-nd solution:

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum === n) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
magicSum(
    [1, 2, 3, 4, 5, 6],
    6

)