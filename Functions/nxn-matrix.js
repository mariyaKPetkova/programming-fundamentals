function matrix (n){
    for(let i = 0; i < n; i ++){
        let printLine = '';
        for(let j = 0; j < n;j++){
            printLine += n + ' ';
        }
        console.log(printLine);
    }
}
matrix(3)