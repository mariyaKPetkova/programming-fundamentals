function solve([inputArr, ...rest]) {
    const cookies = inputArr.split(', ');
    const result = rest.slice(0, rest.indexOf('Eat'))
        .reduce((output, curr) => {
            let [comm, biscuit, index] = curr.split(' ');
            const action = {
                'Update-Any': () => {
                    if (!output.includes(biscuit)) return output
                    const mapped = output.map(x => {
                        if (x === biscuit) return x = 'Out of stock'
                        return x
                    })
                    return mapped
                },
                Remove: () => {
                    index = Number(index);
                    if (output[index] === undefined) return output

                    const firstPart = output.slice(0, index)
                    const secondPart = output.slice(index + 1)
                    return [...firstPart, biscuit, ...secondPart]

                    // output[index] = biscuit;
                    // return output
                },
                'Update-Last': () => {
                    const firstPart = output.slice(0, -1)
                    return [...firstPart, biscuit]

                    // output[output.length - 1] = biscuit;
                    // return output
                },
                Rearrange: () => {
                    if (!output.includes(biscuit)) return output
                    const position = output.indexOf(biscuit)
                    const firstPart = output.slice(0, position)
                    const secondPart = output.slice(position + 1)
                    return [...firstPart, ...secondPart, biscuit]
                    
                    // output.splice(position, 1)
                    // output.push(biscuit)
                    // return output
                }
            }
            const commandFn = action[comm];
            return commandFn ? commandFn() : output;
        }, cookies);
    const allCookies = result.filter(x => x != 'Out of stock');
    console.log(allCookies.join(' '));
}
solve([
    "Vanilla, Chocolate, Raspberry, Strawberry, Walnuts, WhiteChocolate, Ordinary, Vegan",
    "Update-Any Chocolate",
    "Remove BBB 3",
    "Update-Last Healthy",
    "Eat"
])
solve([
    "Vanilla, Chocolate, Raspberry, Strawberry, Walnuts, WhiteChocolate, Ordinary, Vegan",
    "Update-Any Chocolate",
    "Remove BBB 3",
    "Rearrange Walnuts",
    "Eat"
])