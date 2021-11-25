function solve([word, ...rest]) {
    const result = rest.reduce((acc, curr) => {
        const [comm, ...params] = curr.split(' ')
        if (comm !== 'Move' && comm !== 'Insert' && comm !== 'Reverse' && comm !== 'Exchange' && comm !== 'Pass' && comm !== 'Play') return acc
        const actions = {
            Move: () => {
                const index = Number(params)
                const element = acc[index]
                if (element === undefined) return acc
                const first = acc.slice(0, index)
                const second = acc.slice(index + 1)
                return first + '' + second + '' + element
            },
            'Insert': () => {
                if (params[0] !== 'Space') return acc
                const index = Number(params[1])
                const newWord = acc.splice(index, 0, ' ')
                return newWord
            },
            Reverse: () => {
                let substringEl = params[0]
                if (!acc.includes(substringEl)) return acc
                const el = substringEl.split('')
                const element = el.reverse().join('')
                const newWord = acc.replace(substringEl, '')
                return newWord + '' + element
            },
            'Exchange': () => {
                if (params[0] !== 'Tiles') return acc
                let newLetters = params[1]
                let len = newLetters.length
                let newWord = acc.slice(len)
                let final = newLetters + '' + newWord
                let splited = final.split('')
                console.log(splited.join(' '));
                return final
            },
            Pass: () => {
                if(params[0] != undefined) return acc
                let element = acc.split('')
                let newWord = element.join(' ')
                console.log(newWord);
                return acc
            },
            Play: () => {
                if (acc.includes(' ')) {
                    const possition = acc.indexOf(' ')
                    console.log(`You are playing with the word ${acc.slice(0, possition)}.`);
                }else{
                    console.log(`You are playing with the word ${acc}.`);
                }
                return acc
            }
        }
        const commandFn = actions[comm];
        return commandFn ? commandFn() : acc;
    }, word)
    
}
solve(['XCOBEKA',
'Move 1',
'Reverse EKAC',
'Reverse XOB',
'Pass it',
'Play']

)