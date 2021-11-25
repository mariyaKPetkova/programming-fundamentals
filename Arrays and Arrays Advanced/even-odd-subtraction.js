function evenOddSubtraction (arr){
    let evenSum = 0;
    let oddSum = 0;
    for(let num of arr){
        num = +num;
        if(num % 2 === 0 ){
            evenSum += num;
        }else{
            oddSum += num;
        }
    }
    let diff = evenSum - oddSum;
    console.log(diff);
}
evenOddSubtraction([3,5,7,9])