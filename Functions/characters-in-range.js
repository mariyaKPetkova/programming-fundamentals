function charactersInRange(a, b) {
    //1st solution:
    let firstChar = a.charCodeAt();
    let secondChar = b.charCodeAt();
    let printLine = '';
    let start = firstChar < secondChar ? firstChar : secondChar;
    let end = firstChar < secondChar ? secondChar : firstChar;
    for (let i = start + 1; i < end; i++) {
        printLine += String.fromCharCode(i) + ' '
    }
    console.log(printLine);
    //2nd solution:
//     let code = (a) => a.charCodeAt();
//     let newArr = [];
//     for (let i = Math.min(code(a), code(b)) + 1; i < Math.max(code(a), code(b)); i++) {
//         newArr.push(String.fromCharCode(i))
//     }
//     console.log(newArr.join(' '));
}
console.log(charactersInRange('a', 'd'));