function equalNeighbors(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i];
        let nextArr = arr[i + 1]
        for (let j = 0; j < currentArr.length; j++) {
            let currentNum = currentArr[j];
            let nextNum = nextArr[j];
            if (currentNum === nextNum) {
                // console.log('equal');
                count++;
            }
        }
    }
    console.log(count);
}
equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
)