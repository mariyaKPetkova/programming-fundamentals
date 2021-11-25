// function solve([input, ...commands]) {  //83/100
//     const finalTour = commands.reduce((output, curr) => {
//         let [comm, first, second] = curr.split(':')
//         const actions = {
//             'Add Stop': () => {
//                 first = Number(first)
//                 if (first > output.length-1 && first < 0) return output;
//                 const firstPart = output.substring(0, first)
//                 const secondPart = output.substring(first)
//                 console.log(firstPart + '' + second + '' + secondPart);
//                 return firstPart + '' + second + '' + secondPart
//             },
//             'Remove Stop': () => {
//                 [first, second] = [Number(first), Number(second)]
//                 if ((first > output.length-1 && first < 0) || (second > output.length-1 && second < 0)) return output;
//                 const partOne = output.substring(0, first)
//                 const partTwo = output.substring(second+1)              
//                 console.log(partOne + '' + partTwo);
//                 return partOne + '' + partTwo
//             },
//             'Switch': () => {
//                 if (!output.includes(first)) return output
//                 const newText = output.split(first).join(second)
//                 console.log(newText);
//                 return newText
//             }
//         }
//         const commandFn = actions[comm];
//         return commandFn ? commandFn() : output;
//     }, input)
//     console.log(`Ready for world tour! Planned stops: ${finalTour}`);
// }


//2nd solution :

function solve([input, ...commands]) {  //83/100
    const actions = {
        'Add Stop'(text, index, string) {
            index = Number(index)
            if (index < 0 && index > text.length - 1) return text
            const first = text.slice(0, index)
            const second = text.slice(index)
            console.log(first + '' + string + '' + second);
            return first + '' + string + '' + second
        },
        'Remove Stop'(text, startIndex, endIndex) {
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)]
            if (startIndex < 0 && startIndex > text.length - 1) return text
            if (endIndex < 0 && endIndex > text.length - 1) return text
            const first = text.slice(0, startIndex)
            const second = text.slice(endIndex + 1)
            console.log(first + '' + second);
            return first + '' + second
        },
        'Switch'(text, oldString, newString) {
            if (!text.includes(oldString)) return text
            const newText = text.split(oldString).join(newString)
            console.log(newText);
            return newText
        }
    }
    const result = commands.slice(0, commands.indexOf('Travel'))
        .reduce((acc, curr) => {
            let [comm, ...rest] = curr.split(':')
            return actions[comm](acc, ...rest)
        }, input)
    console.log(`Ready for world tour! Planned stops: ${result}`);
}
solve([
    'Hawai::Cyprys-Greece-Hawai',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])


// function solve([input, ...commands]) {
//     const finalTour = commands.reduce((output, curr) => {
//         let [comm, first, second] = curr.split(':')
//         switch (comm) {
//             case 'Add Stop':
//                 first = Number(first)
//                 if (first <= output.length || first >= 0) {
//                     const firstPart = output.substring(0, first)
//                     const secondPart = output.substring(first)
//                     output = firstPart + '' + second + '' + secondPart
//                     // output = output.split('')
//                     // output.splice(first,0,second)
//                     // output = output.join('')
//                     console.log(output);
//                 }
//                 break;
//             case 'Remove Stop':
//                 [first, second] = [Number(first), Number(second)]
//                 if ((first <= output.length || first >= 0) && (second <= output.length || second >= 0)) {
//                     const partOne = output.substring(0, first)
//                     const partTwo = output.substring(second + 1)
//                     // // const partOne = output.split('').slice(0, first).join('')
//                     // // const partTwo = output.split('').slice(second + 1).join('')
//                     output = partOne + '' + partTwo
//                     // output = output.split('')
//                     // output.splice(first,second-first+1)
//                     // output = output.join('')
//                     console.log(output);
//                 }
//                 break;
//             case 'Switch':
//                 // if (first != output.split(':')[0]) return output // if (output.indexOf(first) === 0) {
//                 // let position = output.indexOf(first)
//                 // while (output.includes(first) && position >= 0) {
//                 //     output = output.replace(first, second)
//                 //     position + 1
//                 // }
//                 // output = output.split(first).join(second)
//                 // console.log(output);
//                 // const position = output.indexOf(first)
//                 //     while(output.includes(first)){
//                 //         output = output.replace(first,second)
//                 //         position +1
//                 //     }
//                 // if(output.startsWith(first)){
//                 //     output = output.split(first).join(second)
//                 // }
//                 // output = output.split(first).join(second)
//                 // console.log(output);
//                 // return output
//                 const rgx = new RegExp(first, 'g')
//                 output = output.replace(rgx, second)
//                 console.log(output);
//                 break;
//         }
//         return output
//     }, input)
//     console.log(`Ready for world tour! Planned stops: ${finalTour}`);
// }