function solve([inputArr, ...rest]) { // 30/100
    const targets = inputArr.split(' ').map(Number)
    const result = rest.slice(0, rest.indexOf('End')).reduce((output, curr) => {
        const command = curr.split(' ')[0]
        const [index, numb] = [Number(curr.split(' ')[1]), Number(curr.split(' ')[2])]
        const actions = {
            Shoot: () => {
                if (output[index] === undefined) return output;
                if ((output[index] - numb) > 0) {
                    const element = output[index] - numb
                    const first = output.slice(0, index)
                    const second = output.slice(index + 1)
                    return [...first, element, ...second]
                }
                if ((output[index] - numb) <= 0) {
                    const first = output.slice(0, index)
                    const second = output.slice(index + 1)
                    return [...first, ...second]
                }
            },
            Add: () => {
                if (output[index] === undefined) {
                    console.log("Invalid placement!");
                    return output;
                }
                const first = output.slice(0, index)
                const second = output.slice(index + 1)
                return [...first, numb, ...second]
            },
            Strike: () => {
                if (output[index] === undefined) {
                    console.log("Strike missed!");
                    return output
                }
                if (index + numb <= output.length - 1 && index - numb >= 0) {
                    const first = output.slice(0, (index - numb))
                    const second = output.slice((index + numb) + 1)
                    return [...first, ...second]
                }
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