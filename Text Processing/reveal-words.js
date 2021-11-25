function solve(wordsAsStr,text){
    const words = wordsAsStr.split(', ')
    const result = words.reduce((acc,curr)=>{
        const element = '*'.repeat(curr.length)
        acc = acc.replace(element,curr)
        return acc
    },text)
    console.log(result);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)
// function solve(words, text) {
//     let wordsSplit = words.split(', ')
//     wordsSplit.forEach(word => {
//         let element = '*'.repeat(word.length)
//         text = text.replace(element, word)
//         return text
//     });
//     console.log(text);
// }
// solve('great, learning',
//     'softuni is ***** place for ******** new programming languages'
// )