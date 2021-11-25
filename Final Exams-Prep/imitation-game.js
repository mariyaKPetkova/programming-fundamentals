function solve([encryptedMessage,...input]) {
    const answerEM = input.slice(0, input.indexOf('Decode'))
    .reduce((output, curr) => {
        const [comm, ...params] = curr.split('|')
        const actions = {
            Move: () => {
                const countLetters = Number(params)
                const firstPart = output.substring(0, countLetters)
                const secondPart = output.substring(countLetters)
                //console.log(secondPart + '' + firstPart);
                return secondPart + '' + firstPart
            },
            Insert: () => {
                const [index, value] = params
                const firstPart = output.substring(0, index)
                const secondPart = output.substring(index)
                //console.log(firstPart + '' + value + '' + secondPart);
                return firstPart + '' + value + '' + secondPart
            },
            ChangeAll: () => {
                const [substring, replacement] = params
                // const rgx = new RegExp(substring, 'g');
                // output = output.replace(rgx, replacement)
                
                // const position = output.indexOf(substring)
                // while(output.includes(substring)){
                //     output = output.replace(substring,replacement)
                //     position +1
                // }
                // return output
                const change = output.split(substring).join(replacement)
                return change
            }
        }
        const commandFn = actions[comm];
        return commandFn ? commandFn() : output;
    }, encryptedMessage);
    console.log(`The decrypted message is: ${answerEM}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)
// solve([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
//   ]
//   )