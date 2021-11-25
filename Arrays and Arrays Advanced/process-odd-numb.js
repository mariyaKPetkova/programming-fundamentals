function processOddNumber(arr) {
    //1st solution:
    // function oddNumbers(value,index) {
    //     return (index % 2) !== 0;
    // }
    // function doubledNum(numb) {
    //     return numb * 2;
    // }
    // let array = arr.filter(oddNumbers)
    // array = array.map(doubledNum)
    // console.log(array.reverse().join(' '));

    //2nd solution:
    // let oddArr = arr.filter((v, i) => (i % 2) == 1);
    // let doubled = oddArr.map(x => x * 2);
    // console.log(doubled.reverse().join(' '));

    //3rd solution:
    console.log(arr
        .filter((v, i) => (i % 2) == 1)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}
processOddNumber([3,
    0,
    10,
    4,
    7,
    3])