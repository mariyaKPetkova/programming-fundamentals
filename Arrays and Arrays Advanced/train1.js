function solve(arr) {
    let wagons = arr[0].split(' ').map(Number)
    const capacity = Number(arr[1])

    const result = arr.slice(2).reduce((acc, curr) => {
        if (curr.includes('Add')) {
            const comm = curr.split(' ')
            const count = Number(comm[1])
            wagons.push(count)
        } else {
            const count = Number(curr)
            // vagons.reduce((acc, curr) => {
            //     if ((curr + count) <= maxSpace){
            //         vagons.splice(vagons.indexOf(curr),1,(curr + count))
            //     }
            //     return acc
            // }, vagons)
            for (let i = 0; i < wagons.length; i++) {
                if ((wagons[i] + count) <= capacity) {
                    wagons[i] += count;
                    break;
                }
            }
        }
        return acc
    }, wagons).join(' ')
    return result
}
console.log(solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
));