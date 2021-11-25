function solve([inputArray, ...rest]) {     //  91/100!!!
    const words = inputArray.split(' ');
    const result = rest.slice(0, rest.indexOf('Stop'))
        .reduce((output, curr) => {
            let [comm, first, second] = curr.split(' ');
            const action = {
                Delete: () => {
                    const index = Number(first);
                    const word = output[index + 1];
                    if (word === undefined) return output
                    return output.filter(x => x != word)
                },
                Swap: () => {
                    if (!output.includes(first)) return output
                    if (!output.includes(second)) return output

                    const mapped = output.map(x => {
                        if (x === first) return x = second
                        if (x === second) return x = first
                        return x
                    })
                    return mapped

                    // const positionFirst = output.indexOf(first)
                    // const positionSecond = output.indexOf(second)
                    // output.splice(positionFirst, 1, second)
                    // output.splice(positionSecond, 1, first)
                    // return output
                },
                Put: () => {
                    const word = first;
                    const index = Number(second);
                    const position = index - 1;
                    if (output[position] === undefined) return output
                    if (index < 0 || index > output.length - 1) return output

                    if (index === output.length - 1) return [...output, word]
                    const firstPart = output.slice(0, position);
                    const secondPart = output.slice(position);
                    return [...firstPart, word, ...secondPart]

                    // if (index === output.length - 1) {
                    //     output.push(word)
                    //     return output
                    // } else {
                    //     output.splice(position, 0, word)
                    //     return output
                    // }
                },
                Sort: () => {
                    return output.sort((a, b) => b.localeCompare(a))
                },
                Replace: () => {
                    if (!output.includes(second)) return output
                    const positionSecondWord = output.indexOf(second);

                    // output.splice(positionSecond, 1, first)
                    // return output

                    const firstPart = output.slice(0, positionSecondWord);
                    const secondPart = output.slice(positionSecondWord + 1);
                    return [...firstPart, first, ...secondPart]

                    // const mapped = output.map(x => {
                    //     if (x === second) return x = first
                    //     return x
                    // })
                    // return mapped
                }
            }
            const commandFn = action[comm];
            return commandFn ? commandFn() : output;
        }, words).join(' ');
    console.log(result);
}
solve(["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"])

solve(["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"])
