// function modification(arr) {
// let index = 0;
// let initialValue = arr.shift().split(' ').map(Number);
// let inputData = arr[index++];
// while (inputData !== 'end') {
//     let [command, firstInd, secondInd] = inputData.split(' ');
//     firstInd = Number(firstInd);
//     secondInd = Number(secondInd);
//     switch (command) {
//         case 'swap':
//             let temp = initialValue[firstInd];
//             initialValue[firstInd] = initialValue[secondInd];
//             initialValue[secondInd] = temp;
//             break;
//         case 'multiply':
//             let result = initialValue[firstInd] * initialValue[secondInd];
//             initialValue.splice(firstInd, 1, result);
//             break;
//         case 'decrease':
//             initialValue = initialValue.map(x => x - 1)
//             break;
//     }
//     inputData = arr[index++];
// }
// console.log(initialValue.join(', '));
//}

//2nd solution:

function modification([inputArray, ...rest]) {
    const initialNumbers = inputArray.split(' ').map(Number)
    const result = rest.slice(0, rest.indexOf('end')).reduce((output, curr) => {
        const command = curr.split(' ')[0];
        const [indexFirst, indexSecond] = [Number(curr.split(' ')[1]), Number(curr.split(' ')[2])];
        const actions = {
            swap: () => {
                const numFirst = output[indexFirst]
                const numSecond = output[indexSecond]
                output.splice(indexFirst, 1, numSecond)
                output.splice(indexSecond, 1, numFirst)
                return output
            },
            multiply: () => {
                const numFirst = output[indexFirst]
                const numSecond = output[indexSecond]
                const result = numFirst * numSecond
                output.splice(indexFirst, 1, result)
                return output
            },
            decrease: () => output.map(x => x - 1)   
        }
        const commandFn = actions[command]
        return commandFn ? commandFn() : output
    }, initialNumbers).join(', ')
    console.log(result);
}
modification([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])