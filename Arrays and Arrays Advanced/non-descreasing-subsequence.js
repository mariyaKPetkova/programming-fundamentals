function nonDecreasingSubsequence(arr) {
    //1-st solution:
    // let max = arr[0];
    // let result = arr.filter(el => {
    //     if (el >= max) {
    //         max = el;
    //     }
    //     return el >= max;
    // });
    // console.log(result.join(' '));

    //2nd solution:
    //console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
    let currentBigest = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let next = arr[j];

        }
    }
    console.log(arr.join(' '));
}
nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24])