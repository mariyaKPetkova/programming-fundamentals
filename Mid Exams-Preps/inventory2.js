function iventory([input, ...commands]) {
    const inputArray = input.split(', ')
    const finalList = commands.reduce((output, curr) => {
        const [comm, item] = curr.split(' - ')
        const action = {
            Collect: () => output.includes(item)
                ? output
                : [...output, item], //push
            Drop: () => output.filter(i => i !== item), //delete,remove
            'Combine Items': () => {
                const [oldItem, newItem] = item.split(':')  //change item
                if (!output.includes(oldItem)) return output;
                const indexOld = output.indexOf(oldItem) + 1
                const firts = output.slice(0, indexOld)
                const second = output.slice(indexOld)
                return [...firts, newItem, ...second]
            },
            Renew: () => {
                if (!output.includes(item)) return output

                const filtred = output.filter(i => i != item)
                return [...filtred, item]
                // if (!output.includes(item)) return output;
                // const indexR = output.indexOf(item)
                // const firtsR = output.slice(0, indexR)
                // const [theItem] = output.slice(indexR, indexR + 1)
                // const secondR = output.slice(indexOld + 1)
                // return [...firts, ...second, theItem]
            }
        }
        const commandFn = action[comm];
        return commandFn ? commandFn() : output;
    }, inputArray);
    console.log(finalList.join(', '));
}
iventory(['Iron, Wood, Sword', 'Combine  Items - Iron:2', 'Collect - Gold', 'Drop - Wood', 'Craft!'])