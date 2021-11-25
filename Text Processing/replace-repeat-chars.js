function solve(str) {
    // let newStr = '';
    // str.split('').forEach(char => {
    //     if (newStr.slice(-1) != char) {
    //         newStr += char;
    //     }
    // });
    // return newStr;
    
    //2nd solution:
    const result = str.split('').reduce((acc,curr)=>{
        if(acc.slice(-1) != curr){
            return [...acc,curr]
        }
        return acc
    },'').join('')
    console.log(result);
}
console.log(solve('aaaaabbbbbcdddeeeedssaa'));