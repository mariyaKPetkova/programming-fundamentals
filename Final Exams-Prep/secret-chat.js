// function solve(input) {
//     let message = input[0];
//     let isError = false
//     let isReveal = false
//     input.slice(1).forEach(dataInput => {
//         let [command, first, second] = dataInput.split(':|:')
//         switch (command) {
//             case 'InsertSpace':
//                 first = Number(first)
//                 message = message.substring(0, first) + ' ' + message.substring(first)
//                 break;
//             case 'Reverse':
//                 if (message.includes(first)) {
//                     message = message.replace(first, '')
//                     let reversedElement = first.split('').reverse().join('')
//                     message += reversedElement
//                 } else {
//                     console.log('error');
//                     isError = true
//                 }
//                 break;
//             case 'ChangeAll':
//                 // while (message.includes(first)) {
//                 //     message = message.replace(first, second)
//                 // }
//                 message.split('').forEach(char => {
//                     message = message.replace(first, second)
//                     return message
//                 });
//                 break;
//             case 'Reveal':
//                 isReveal = true;
//                 break;
//         }
//         if (!isError && !isReveal) {
//             console.log(message);
//         }
//         if (isReveal) {
//             console.log(`You have a new text message: ${message}`);
//         }
//     });
// }

// 2nd solution: 

function solve([text, ...commands]) {
    const actions = {
        InsertSpace(text, index) {
            index = Number(index)
            const first = text.slice(0, index)
            const second = text.slice(index)
            console.log(first + ' ' + second);
            return first + ' ' + second
        },
        Reverse(text, substring) {
            if (!text.endsWith(substring)) {
                console.log(`error`);
                return text
            } else {
                const index = text.indexOf(substring)
                const reversedPart = text.slice(index).split('').reverse().join('');
                const firstPart = text.slice(0, index)
                console.log(firstPart + '' + reversedPart);
                return firstPart + '' + reversedPart
            }
        },
        ChangeAll(text, substring, replacement) {
            if (!text.includes(substring)) {
                return text
            } else {
                const newText = text.split(substring).join(replacement)
                console.log(newText);
                return newText
            }
        }
    }
    const result = commands.slice(0, commands.indexOf('Reveal'))
        .reduce((acc, curr) => {
            let [comm, ...params] = curr.split(':|:')
            return actions[comm](acc, ...params)
        }, text)
    console.log(`You have a new text message: ${result}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])