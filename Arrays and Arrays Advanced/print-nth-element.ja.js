function nThElement (arr){
    let step = Number(arr.pop());
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(i % step === 0){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
nThElement(['5', '20', '31', '4', '20', '2'])