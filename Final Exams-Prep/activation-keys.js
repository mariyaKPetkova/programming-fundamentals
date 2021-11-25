// function solve(input) {
//     const actKey = input[0];
//     const result = input.slice(1, input.indexOf('Generate')).reduce((output, curr) => {
//         const [actionName, ...params] = curr.split('>>>');
//         const actions = {
//             Contains: () => {
//                 const subst = params;
//                 output.includes(subst) ? console.log(`${output} contains ${subst}`) : console.log("Substring not found!");
//                 return output
//             },
//             Flip: () => {
//                 const mode = params[0];
//                 const startInd = Number(params[1])
//                 const endInd = Number(params[2])
//                 let mPart = ''
//                 if (mode === 'Upper') {
//                     mPart = output.slice(startInd, endInd).toUpperCase();
//                 }
//                 if (mode === 'Lower') {
//                     mPart = output.slice(startInd, endInd).toLowerCase()
//                 }
//                 const firstPart = output.slice(0, startInd)
//                 const secondPart = output.slice(endInd, output.length)
//                 output = firstPart + '' + mPart + '' + secondPart
//                 console.log(output);
//                 return output
//             },
//             Slice: () => {
//                 const [startInd, endInd] = [Number(params[0]), Number(params[1])]
//                 const firstPart = output.substring(0, startInd)
//                 const secondPart = output.substring(endInd, output.length)
//                 output = firstPart + '' + secondPart
//                 console.log(output);
//                 return output
//             }
//         }
//         const commandFn = actions[actionName]
//         return commandFn ? commandFn() : output
//     }, actKey)
//     console.log(`Your activation key is: ${result}`);
// }
// solve([
//     'abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate'
// ])


//2nd solution:
function solve([text, ...commands]) {
    const actions = {
        Slice(text, start, end) {
            [start, end] = [Number(start), Number(end)]
            const partOne = text.substring(0, start)
            const partTwo = text.substring(end, text.length)
            console.log(partOne + '' + partTwo);
            return partOne + '' + partTwo
        },
        Flip(text, type, start, end) {
            [start, end] = [Number(start), Number(end)]
            let part = '';
            if (type == 'Lower') {
                part = text.slice(start, end).toLowerCase()
            }
            if (type == 'Upper') {
                part = text.slice(start, end).toUpperCase()
            }
            const firstPart = text.slice(0, start)
            const secondPart = text.slice(end, text.length)
            console.log(firstPart + '' + part + '' + secondPart);
            return firstPart + '' + part + '' + secondPart
        },
        Contains(text, substring) {
            text.includes(substring)
                ? console.log(`${text} contains ${substring}`)
                : console.log(`Substring not found!`);
            return text
        }
    }

    const result = commands.slice(0, commands.indexOf('Generate'))
        .reduce((acc, curr) => {
            let [comm, ...params] = curr.split('>>>')
            return actions[comm](acc, ...params)
        }, text)

    console.log(`Your activation key is: ${result}`);
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])
// solve([
//     '134softsf5ftuni2020rockz42',
//     'Slice>>>3>>>7',
//     'Contains>>>-rock',
//     'Contains>>>-uni-',
//     'Contains>>>-rocks',
//     'Flip>>>Upper>>>2>>>8',
//     'Flip>>>Lower>>>5>>>11',
//     'Generate'
//   ])