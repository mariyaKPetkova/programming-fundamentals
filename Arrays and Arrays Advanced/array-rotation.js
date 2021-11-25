function arrRotation(arr, n) {
    // for(let i = 0; i < n; i++){
    //     let el = arr.shift();
    //     arr.push(el)
    // }
    // console.log(arr.join(' '));

    let countRotation = Number(n)
    if (countRotation > arr.length) {
        const num = countRotation % arr.length
        countRotation = num
    }
    const selectedNumbers = arr.slice(0, countRotation).join(' ')
    const restPart = arr.slice(countRotation).join(' ')
    const result = restPart + ' ' + selectedNumbers
    console.log(result);
}
arrRotation([51, 47, 32, 61, 21], 2)
arrRotation([2, 4, 15, 31], 5)