function solve([inpurArr, ...rest]) {
    const targets = inpurArr.split(' ').map(Number);
    const indexTarget = rest.slice(0, rest.indexOf('End')).map(Number);
    let count = 0
    const result = indexTarget.reduce((output, curr) => {
        // if (curr < 0 || curr > output.length - 1) return output;
        if(output[curr] === undefined) return output
        if (output[curr] == -1) return output;
        const lastTarget = output[curr]
        output[curr] = -1
        count++;
        return output.reduce((acc, current) => {
            if (current != -1) {
                let element = 0
                if (current > lastTarget) {
                    element = current - lastTarget
                }
                if (current <= lastTarget) {
                    element = current + lastTarget
                }
                const first = acc.slice(0, acc.indexOf(current))
                const second = acc.slice(acc.indexOf(current) + 1)
                return [...first, element, ...second]
            }
            return acc
        }, output)

    }, targets)
    console.log(`Shot targets: ${count} -> ${result.join(' ')}`);
}
solve(['24 50 36 70', '0', '4', '3', '1', 'End'])
solve(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])