function numberModification (num){
    while (averageNum(num)<5){
        num+='9'
    }
    console.log(num);

    function sumOfNum (number){
        let sum = 0;
        let numAsStr = String(number);
        for(let i = 0; i < numAsStr.length; i++){
            sum += Number(numAsStr[i]);
        }
        return sum;
    }
    function averageNum (numb){
        return sumOfNum(numb)/numb.toString().length
    }

}
console.log(numberModification(101));