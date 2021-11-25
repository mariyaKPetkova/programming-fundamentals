function solve([input, ...commands]) {
    const initialList = input.split('!')
    const result = commands.reduce((output, curr) => {
        const [comm, item , itemTwo] = curr.split(' ');
        const actions = {
            Urgent: () => output.includes(item)
                ? output
                : [item, ...output],
            Unnecessary: () => output.filter(i => i != item),
            Correct: () => {
                const oldItem = item
                const newItem = itemTwo
                if (!output.includes(oldItem)) return output
                const indexOld = output.indexOf(oldItem)
                const first = output.slice(0, indexOld)
                const second = output.slice(indexOld+1)
                return [...first, newItem, ...second]
            },
            Rearrange: () => {
                if(!output.includes(item)) return output
                const filtered = output.filter(i => i != item)
                return [...filtered, item]
            }
        }
        const commandFn = actions[comm]
        return commandFn ? commandFn() : output
    }, initialList).join(', ')
    console.log(result);
}
solve([
        'Milk!Pepper!Salt!Water!Banana',
        'Urgent Salt',
        'Unnecessary Grapes ',
        'Correct Pepper Onion',
        'Rearrange Grapes',
        'Correct Tomatoes Potatoes',
        'Go Shopping!'
])