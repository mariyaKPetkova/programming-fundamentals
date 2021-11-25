function solve(word, text) {
    let wordLowerCase = word.toLowerCase();
    text = text.toLowerCase();
    if(text.split(' ').includes(wordLowerCase)){
        console.log(wordLowerCase);
    }else{
        console.log(`${wordLowerCase} not found!`);
    }
}
// function solution(word, text) {
//     word.toLowerCase()
//     text = text.toLowerCase().split(' ')
//     let isFound = false;
//     text.forEach(element => {
//         if (element === word) {
//             console.log(word);
//             isFound = true;
//         }
//     });
//     if (!isFound) {
//         console.log(`${word} not found!`);
//     }
// }
solve('java',
    'JavaScript is the best programming language'
)
// solution('java',
// 'JavaScript is the best programming language'
// )