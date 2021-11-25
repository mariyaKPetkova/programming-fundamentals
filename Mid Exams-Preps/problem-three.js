function solve([inputArray, ...rest]) {
    const cards = inputArray.split(':')
    const result = rest.slice(0, rest.indexOf('Ready'))
        .reduce((output, curr) => {
            let [comm, card, other] = curr.split(' ')
            const action = {
                Add: () => {
                    if (!cards.includes(card)) {
                        console.log('Card not found.');
                        return output
                    }
                    return [...output, card]
                },
                Insert: () => {
                    let ind = Number(other)
                    if (!cards.includes(card)) {
                        console.log('Error!');
                        return output
                    }
                    if (ind < 0 || ind > output.length - 1) {
                        console.log('Error!');
                        return output
                    }
                    output.splice(ind, 0, card)
                    return output
                },
                Remove: () => {
                    if (!output.includes(card)) {
                        console.log('Card not found.');
                        return output
                    }
                    const position = output.indexOf(card)
                    output.splice(position, 1)
                    return output
                },
                Swap: () => {
                    const cardTwo = other
                    const positionFirst = output.indexOf(card)
                    const positionSecond = output.indexOf(cardTwo)
                    let cardFirst = card
                    output.splice(positionFirst, 1, cardTwo)
                    output.splice(positionSecond, 1, cardFirst)
                    return output
                },
                Shuffle: () => output.reverse()
            }
            const commandFn = action[comm];
            return commandFn ? commandFn() : output;
        }, [])
    console.log(result.join(' '));
}
// solve(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
//     "Add Moonfire",
//     "Add Pounce",
//     "Add Bite",
//     "Add Wrath",
//     "Insert Claw 0",
//     "Swap Claw Moonfire",
//     "Remove Bite",
//     "Shuffle deck",
//     "Ready"])
// solve(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
// "Add Pop",
// "Add Exodia",
// "Add Aso",
// "Remove Wrath",
// "Add SineokBqlDrakon",
// "Shuffle deck",
// "Insert Pesho 0",
// "Ready"])
solve(['Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Remove Pounce','Add Pounce','Remove Pounce','Add Wrath','Ready' ])

