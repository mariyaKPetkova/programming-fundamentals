// function solve(text) {
//     let count = 0
//     let mirrorWords = []
//     let pattern = /([#|@]){1}(?<wordOne>[A-z]{3,})\1{2}(?<wordTwo>[A-z]{3,})\1{1}/g
//     let match;
//     while ((match = pattern.exec(text)) !== null) { //match = pattern.exec(text)
//         count++;
//         let { wordOne, wordTwo } = match.groups
//         // let wordOne = match.groups.wordOne
//         // let wordTwo = match.groups.wordTwo
//         let reversedWord = wordOne.split('').reverse().join('')
//         if (reversedWord === wordTwo) {
//             mirrorWords.push(`${wordOne} <=> ${wordTwo}`)
//         }
//     }
//     if (count == 0) {
//         console.log("No word pairs found!");
//     } else {
//         console.log(`${count} word pairs found!`);
//     }
//     if (mirrorWords.length > 0) {
//         console.log(`The mirror words are:\n${mirrorWords.join(', ')}`);
//     } else {
//         console.log("No mirror words!");
//     }
// }

//2nd solution:

function solve([str]) {
    const pattern = /([#,@]{1})[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g
    const matches = str.match(pattern)
    if (matches == null) return console.log(`No word pairs found!\nNo mirror words!`);
    const result = matches.reduce((acc, curr) => {
        const firstWord = curr.slice(0, curr.length / 2)
        const secondWord = curr.slice(curr.length / 2)
        const mirrorWord = firstWord.split('').reverse().join('')
        if (mirrorWord === secondWord) {
            return [...acc, firstWord.slice(1, -1) + ' <=> ' + secondWord.slice(1, -1)]
        }
        return acc
    }, []).join(', ')
    console.log(`${matches.length} word pairs found!`);
    result.length > 0
        ? console.log(`The mirror words are:\n${result}`)
        : console.log(`No mirror words!`);
}

solve('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r	')
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])