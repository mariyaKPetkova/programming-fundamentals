function sorting(arr) {
    //1st solution:
    // let newArr = [];
    // let length = arr.sort((a, b) => a - b).length
    // for(let i = 0; i < length; i++){
    //     let smallest = arr.shift();
    //     let biggest = arr.pop()
    //     newArr.push(biggest,smallest)
    // }
    // console.log(newArr.join(' '));

    //2nd
//     let newArr = [];
//     arr = arr.sort((a, b) => a - b);
//     while (arr.length !== 0) {
//         newArr.push(arr[arr.length - 1]);
//         arr.pop();
//         newArr.push(arr[0]);
//         arr.shift();
//     }
//     console.log(newArr.join(' '));

//3th solution:
    const sorted = arr.sort((a,b)=>a-b)
    const result = sorted.reduce((acc,curr)=>{
        const elF = sorted.pop();
        const elS = sorted.shift()
        acc.push(elF,elS)  
        return acc
    },[])
    const sortedEnd = sorted.reverse()
    console.log(result.concat(sortedEnd).join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])