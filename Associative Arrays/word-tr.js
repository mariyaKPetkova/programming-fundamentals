function solve(input) {
    // let obj = wantedWords(input);
    // input.slice(1).forEach(element => {
    //     if (Object.keys(obj).includes(element)) {
    //         obj[element]++;
    //     }
    //     return obj
    // })
    // // for (let element of input.slice(1)) {
    // //     if (obj.hasOwnProperty(element)) {
    // //         obj[element]++;
    // //     }
    // // }
    // Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    //     .forEach((element) => {
    //         console.log(`${element} - ${obj[element]}`);
    //     })
    // function wantedWords(arr) {
    //     let obj = {}
    //     arr[0].split(' ').forEach((element) => {
    //         obj[element] = 0;
    //     });
    //     return obj
    // }

    //2nd solution:
    const wantedWords = input[0].split(' ')
    const result = input.slice(1).reduce((acc, curr) => {
        if (wantedWords.includes(curr)) {
            if (!acc[curr]) {
                acc[curr] = 0
            }
            acc[curr] += 1
        }
        return acc
    }, {})
    Object.keys(result).sort((a, b) => result[b] - result[a])
        .forEach(word => {
            console.log(`${word} - ${result[word]}`);
        })
}
solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)