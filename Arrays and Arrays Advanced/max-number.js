function maxNumber (arr) {
//     let newArr = [];
//     for ( let i = 0; i < arr.length; i++){
//         let isBigger = true;
//         for ( let j = i + 1; j < arr.length; j++){
            
//             if (arr[i] <= arr[j]){
//                 isBigger = false;
//                 break;
//             }
//         }
//         if(isBigger){
//             newArr.push(arr[i]);
//         }

//     }
//     console.log(newArr.join(' '));
// }

    
    const result = arr.reduce((output,curr,index)=>{
        
        return output
    },[])
    console.log(result);
    
}
maxNumber([27, 19, 42, 2, 13, 45, 48])
//maxNumber([14, 24, 3, 19, 15, 17])