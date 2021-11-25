function solve(num1,num2,num3){
    let sum = num1 + num2 + num3;
    let integerNum = Math.trunc(sum);

    if(integerNum === sum){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }
}