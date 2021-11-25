function solve (n){
    let counter = 0;
    
    for(let i = 1; i <= n; i++){
        let sum = 0;
        let result = "";
        counter++;
        
        if(i > 0 && i <=9){
            sum = i;
        }else if(i > 9 && i <= 99){
            sum += i % 10
            i = Math.floor(i / 10)
            sum += i
        }
        
        if (sum === 5 || sum === 7 || sum === 11){
            result = "True"
        }else{
            result = "False"
        }
        console.log(`${counter} -> ${result}`);
    }
}
solve(15)