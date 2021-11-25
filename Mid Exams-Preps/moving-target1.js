function solve([inputArr, ...rest]) { // 100/100
    const targets = inputArr.split(' ').map(Number)
    const result = rest.slice(0, rest.indexOf('End')).reduce((output, curr) => {
        const command = curr.split(' ')[0]
        const [index, numb] = [Number(curr.split(' ')[1]), Number(curr.split(' ')[2])]
        const actions = {
            Shoot: () => {
                if (!(output[index] === undefined)) {
                    if ((output[index] - numb) <= 0) {
                        output.splice(index, 1)
                    } else {
                        output.splice(index, 1, (output[index] - numb))
                    }
                }
                return output
            },
            Add: () => {
                if (!(output[index] === undefined)) {
                    output.splice(index, 0, numb)
                } else {
                    console.log(`Invalid placement!`)
                }
                return output
            },
            Strike: () => {
                if (!(output[index] === undefined)) {
                    if (index + numb <= output.length - 1 && index - numb>= 0) {
                        output.splice(index - numb, numb * 2 + 1);
                    } else {
                        console.log(`Strike missed!`);
                    }
                }
                return output
            }
        }
        const commandFn = actions[command]
        return commandFn ? commandFn() : output
    }, targets)
    console.log(result.join('|'));
}
solve([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
])
solve(['1 2 3 4 5', 'Strike 0 1', 'End'])