function solve([inputArr, ...rest]) {
    const friends = inputArr.split(', ')
    const result = rest.slice(0, rest.indexOf('Report'))
        .reduce((output, curr) => {
            let [comm, str, newName] = curr.split(' ')
            const action = {
                Blacklist: () => {
                    if (!output.includes(str)) {
                        console.log(`${str} was not found.`);
                        return output
                    }
                    const position = output.indexOf(str)
                    console.log(`${str} was blacklisted.`);
                    output.splice(position, 1, 'Blacklisted')
                    return output
                },
                Error: () => {
                    str = Number(str)
                    if (output[str] !== 'Lost' && output[str] !== 'Blacklisted') {
                        console.log(`${output[str]} was lost due to an error.`);
                        output.splice(str, 1, 'Lost')
                        return output
                    }
                    return output
                },
                Change: () => {
                    let ind = Number(str)
                    if (output[ind] === undefined) return output
                    console.log(`${output[ind]} changed his username to ${newName}.`);
                    output.splice(ind, 1, newName)
                    return output
                }
            }
            const commandFn = action[comm];
            return commandFn ? commandFn() : output;
        }, friends)
    let countBl = 0
    let countLost = 0
    result.filter(x => {
        if (x === 'Blacklisted') {
            countBl++
        }
        if (x === 'Lost') {
            countLost++
        }
    })
    console.log(`Blacklisted names: ${countBl}`);
    console.log(`Lost names: ${countLost}`);
    console.log(result.join(' '));
}
solve(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Blacklist Eddie",
    "Report"])
