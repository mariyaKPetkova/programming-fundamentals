function houseParty(arr) {
    let partyList = []
    for (let i = 0; i < arr.length; i++) {
        let currentCase = arr[i].split(' ')
        if (!currentCase.includes('not')) {
            if (!partyList.includes(currentCase[0])) {
                partyList.push(currentCase[0])
            } else {
                console.log(`${currentCase[0]} is already in the list!`);
            }
        } else {
            if (partyList.includes(currentCase[0])) {
                let indexOfPerson = partyList.indexOf(currentCase[0]);
                partyList.splice(indexOfPerson, 1)
            } else {
                console.log(`${currentCase[0]} is not in the list!`);
            }
        }
    }
    console.log(partyList.join('\n'));


    //  2nd solution:

    const result = arr.reduce((acc, curr) => {
        const name = curr.split(' ')[0];
        if (curr.includes('not')) {
            acc.includes(name) ?
                acc.splice(acc.indexOf(name), 1)
                //const firstPart = acc.slice(0,acc.indexOf(name))
                //const secondPart = acc.slice(acc.indexOf(name)+1)
                //firstPart + secondPart
                : console.log(`${name} is not in the list!`);
        }
        if (!curr.includes('not')) {
            acc.includes(name) ?
                console.log(`${name} is already in the list!`)
                : acc.push(name); //[...acc, name]
        }
        return acc;
    }, []).join('\n');
    return result;
}
console.log(houseParty(
    ['Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!']

));