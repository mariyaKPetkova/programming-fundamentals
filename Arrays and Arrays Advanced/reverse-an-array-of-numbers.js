function reverseArray(n, arr) {

    // first solution:
    // arr.length = n;
    // arr.reverse()
    // console.log(arr.join(' '));

    // second solution:
    // let newArr = [];
    // for (let i = 0; i < n; i++) {
    //     newArr.push(arr[i]);
    // }
    // newArr.reverse()
    // console.log(newArr.join(' '));

    // third solution:
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    let reversedArr = []
    for (let j = newArr.length - 1; j >= 0; j--) {
        reversedArr.push(newArr[j])
    }
    console.log(reversedArr.join(' '));

}
reverseArray(2, [66, 43, 75, 89, 47])