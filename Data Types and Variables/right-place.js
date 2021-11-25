function solve(string,symbol,word){

    let result = string.replace('_',symbol)
    
    if(result === word){
        console.log(`Matched`);
    }else{
        console.log(`Not matched`);
    }
}
solve('str_ng','o','string')