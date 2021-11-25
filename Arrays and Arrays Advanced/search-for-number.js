// function searchForANumber (arr, arrInfo){
//     let takenCount = arrInfo[0];
//     let deletedCount = arrInfo[1];
//     let searchNumber = arrInfo[2];

//     let newArr = arr.splice(0,takenCount);
//     newArr.splice(0,deletedCount);

//     let count = 0;
//     let position = newArr.indexOf(searchNumber)

//         while(position !== -1){
//             count++;
//             position = newArr.indexOf(searchNumber,position+1)
//         }
//     console.log(`Number ${searchNumber} occurs ${count} times.`);
// }
// searchForANumber([5, 2, 3, 3, 4, 1, 6,],
//     [5, 2, 3]
//     )
function searchForANumber(arr, arrInfo) {
    let takenCount = arrInfo[0];
    let deletedCount = arrInfo[1];
    let searchNumber = arrInfo[2];

    arr = modification(arr);
    console.log(searchCount(arr, searchNumber));

    function modification(array) {
        array = array.splice(0, takenCount);
        array.splice(0, deletedCount);
        return array;
    }

    function searchCount(ar, num) {
        let count = 0;
        let position = ar.indexOf(num);
        while (position !== -1) {
            count++;
            position = ar.indexOf(num, position + 1);
        }
        return `Number ${num} occurs ${count} times.`;
    }
}
searchForANumber([5, 2, 3, 3, 4, 1, 6,],
    [5, 2, 3]
)