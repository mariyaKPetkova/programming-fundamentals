function equalElements(arr) {
    // let maxArr = [];
    // for(let i = 0; i< arr.length; i++){
    //     let currentArr = [arr[i]]; //
    //     for(let j = i + 1; j < arr.length; j++){
    //         if (arr[i] === arr[j]){
    //             currentArr.push(arr[j]); //
    //         }else{
    //             break;
    //         }
    //     }
    //     if (currentArr.length > maxArr.length){
    //         maxArr = currentArr;
    //     }
    // }
    // console.log(maxArr.join(' '));

    let lastNum = null
    const sequences = arr.reduce((acc, curr) => {
        if (lastNum == null) {
            acc[curr] = 1
        }else{
            if (curr === lastNum) {
                acc[curr]++
            }
            if(curr !== lastNum){
                acc[curr] = 1
            }
        }

        lastNum = curr;
        return acc
    }, {})
    Object.entries(sequences).forEach(sequence => {
        console.log(`${sequence[0]} ${sequence[1]}`);
    })
}
//equalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
equalElements([1, 1, 1, 2, 3, 1, 3, 3])
// equalElements([0, 1, 1, 5, 2, 2, 6, 3, 3])