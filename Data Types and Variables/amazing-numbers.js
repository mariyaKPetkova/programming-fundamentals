function solve(num){
    let numAsStr = num.toString();
    let sum = 0;

    for(let i = 0; i < numAsStr.length; i++){
        sum += Number(numAsStr[i]);
    }

    let sumAsStr = sum.toString();
    
    if(sumAsStr.includes('9')){
        console.log(`${num} Amazing? True`);
    }else{
        console.log(`${num} Amazing? False`);
    }
}
solve(999)