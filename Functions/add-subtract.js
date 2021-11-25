function addSubtract(arr) {
    // let sumOr = 0;
    // let sumM = 0;
    // let mArr = [];

    // for (let i = 0; i < arr.length; i++) {

    //     let element = arr[i];
    //     sumOr += element;

    //     if(element % 2 === 0){
    //         element += i
    //     }else{
    //         element -= i
    //     }

    //     sumM += element;
    //     mArr.push(element);

    // }
    // console.log(mArr);
    // console.log(sumOr);
    // console.log(sumM);

//     const indexInputArr = arr.map((value, index) => {
//         value % 2 === 0 ? value += index : value -= index
//         return value
//     })
//     console.log(indexInputArr);
//     console.log(arr.reduce(calcolateSums));
//     console.log(indexInputArr.reduce(calcolateSums));

//     function calcolateSums(acc, curr) {
//         acc += curr;
//         return acc
//     }
// }

    const newArr = arr.reduce((acc,curr,index)=>{
        curr % 2 === 0 ? acc.push(curr += index) : acc.push(curr -= index)
        return acc
    },[])
    console.log(newArr);
    console.log(arr.reduce(calcolateSums));
    console.log(newArr.reduce(calcolateSums));

    function calcolateSums(acc, curr) {
        acc += curr;
        return acc
    }
}

addSubtract([-5, 11, 3, 0, 2])