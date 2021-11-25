function sortNumbers (...input){
    let arr = [];
    for(let num of input){
        num = +num;
        arr.push(num);
    }
    arr.sort((a,b)=>b-a);
    //console.log(arr.join(' '));

    for( let numb of arr){
        console.log(numb);
    }
    
}
sortNumbers(0,0,3)