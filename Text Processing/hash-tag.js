function solve(text) {
    // const result = text.split(' ')
    //     .filter(word =>
    //         word.startsWith('#') && word.length > 1
    //     )
    //     .map(x => x.slice(1))
    //     .reduce((acc, curr) => {
    //         const isLetters = curr.split('').every(x => checkIsLetter(x))
    //         if (isLetters == true) {
    //             return [...acc, curr]
    //         }
    //         return acc
    //     }, [])
    //     .join('\n')

    // console.log(result);

    // function checkIsLetter(char) {
    //     const value = char.charCodeAt(0);
    //     return ((value >= 97 && value <= 122) || (value >= 65 && value <= 90))
    // }

//2nd solution:
let words = text.split(' ')
    .filter((word) => word.startsWith('#') && word.length > 1)
    .filter((word) => {
        return word.split('')
            .slice(1)
            .every((x) => isLetter(x))
    }).map((word) => word.substring(1))

console.log(words.join('\n'))

function isLetter(char) {
    let value = char.charCodeAt(0);
    return (value >= 97 && value <= 122) || (value >= 65 && value <= 90)
}
}
solve('Nowadays  eeryone uses # to tag a #special word in #socialMedia')