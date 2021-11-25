function iventory(input) {
    const inputArray = input[0].split(', ')
    const finalList = input.slice(1, input.indexOf('Craft'))
    const result = finalList.reduce((output, curr) => {
        const [comm, item] = curr.split(' - ')
        const actions = {
            Collect: () => output.includes(item)
                ? output
                : [...output, item],

            Drop: () => output.filter(i => i != item),

            'Combine Items': () => {
                const [oldItem, newItem] = item.split(':')
                if (!output.includes(oldItem)) return output

                const indexOld = output.indexOf(oldItem) + 1
                const first = output.slice(0, indexOld)
                const second = output.slice(indexOld)
                return [...first, newItem, ...second]
            },
            Renew: () => {
                if (!output.includes(item)) return output

                const filtred = output.filter(i => i != item)
                return [...filtred, item]
            }
        }
        const commandFn = actions[comm];
        return commandFn ? commandFn() : output
    }, inputArray)
    console.log(result.join(', '));
}
iventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)