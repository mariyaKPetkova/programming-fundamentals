// function solve(arr) {
//     let index = 0;
//     let seqN = arr[index++].split(' ');
//     let inputData = arr[index++];
//     let countMoves = 0
//     while (inputData !== 'end') {
//         let token = inputData.split(' ');
//         let firstInd = Number(token[0]);
//         let secondInd = Number(token[1]);

//         if (seqN.length == 0) {
//             break;
//         }
//         countMoves++;

//         if (firstInd == secondInd || firstInd < 0 || secondInd < 0 || firstInd >= seqN.length || secondInd >= seqN.length) {
//             let symbol = `-${countMoves}a`
//             seqN.splice(seqN.length / 2, 0, symbol, symbol);
//             console.log(`Invalid input! Adding additional elements to the board`);
//         } else if (seqN[firstInd] == seqN[secondInd]) {
//             let el = seqN[firstInd];
//             seqN.splice(firstInd, 1);
//             let index = seqN.indexOf(el)
//             seqN.splice(index, 1);
//             console.log(`Congrats! You have found matching elements - ${el}!`);
//         } else {
//             console.log(`Try again!`);
//         }
//         inputData = arr[index++];
//     }
//     if (seqN.length == 0) {
//         console.log(`You have won in ${countMoves} turns!`);
//     } else {
//         console.log(`Sorry you lose :(`);
//         console.log(`${seqN.join(' ')}`);
//     }
// }

//2nd solution:
// function solve([inputArray, ...rest]) {
//     const secquence = inputArray.split(' ');
//     let count = 0;
//     const result = rest.slice(0, rest.indexOf('end'))
//         .reduce((output, curr) => {
//             const [firstIndex, secondIndex] = [Number(curr.split(' ')[0]), Number(curr.split(' ')[1])]
//             if (output.length != 0) {
//                 count++;
//                 if (firstIndex === secondIndex || (firstIndex < 0 || firstIndex > output.length - 1) || (secondIndex < 0 || secondIndex > output.length - 1)) {
//                     const element = `-${count}a`
//                     output.splice(output.length / 2, 0, element, element)
//                     console.log(`Invalid input! Adding additional elements to the board`);
//                     return output
//                 } else {
//                     if (output[firstIndex] == output[secondIndex]) {
//                         if (firstIndex > secondIndex) {
//                             console.log(`Congrats! You have found matching elements - ${output[firstIndex]}!`);
//                             output.splice(firstIndex, 1)
//                             output.splice(secondIndex, 1)
//                             return output
//                         }
//                         if (firstIndex < secondIndex) {
//                             console.log(`Congrats! You have found matching elements - ${output[firstIndex]}!`);
//                             output.splice(secondIndex, 1)
//                             output.splice(firstIndex, 1)
//                             return output
//                         }
//                     }else{
//                         console.log(`Try again!`);
//                     }
//                 }
//             }
//             return output
//         }, secquence)
//     secquence.length == 0
//         ? console.log(`You have won in ${count} turns!`)
//         : console.log(`Sorry you lose :(\n${result.join(' ')}`);
// }


//3th solution:

function solve([inputArray, ...rest]) {
    const secquence = inputArray.split(' ');
    let count = 0;
    const result = rest.slice(0, rest.indexOf('end'))
        .reduce((output, curr) => {
            const [firstIndex, secondIndex] = [Number(curr.split(' ')[0]), Number(curr.split(' ')[1])];
            if (output.length != 0) {
                count++;
                if (firstIndex === secondIndex || (firstIndex < 0 || firstIndex > output.length - 1) || (secondIndex < 0 || secondIndex > output.length - 1)) {
                    console.log(`Invalid input! Adding additional elements to the board`);
                    const element = `-${count}a`;
                    const ind = output.length / 2;
                    const first = output.slice(0, ind);
                    const second = output.slice(ind);
                    return [...first, element, element, ...second]
                } else {
                    if (output[firstIndex] == output[secondIndex]) {
                        console.log(`Congrats! You have found matching elements - ${output[firstIndex]}!`);
                        return output.filter(x => x != output[firstIndex])
                    } else {
                        console.log(`Try again!`);
                    }
                }
            }
            return output
        }, secquence).join(' ');
    result.length == 0
        ? console.log(`You have won in ${count} turns!`)
        : console.log(`Sorry you lose :(\n${result}`);
}
solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
)
solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)
solve([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)