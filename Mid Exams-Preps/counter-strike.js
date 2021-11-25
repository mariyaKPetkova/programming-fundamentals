function solve([initialEnergy, ...distances]) {
    const energy = Number(initialEnergy);
    let isFail = false;
    let wonBattle = 0;
    const result = distances.reduce((output, curr) => {
        if (curr !== 'End of battle') {
            const distance = Number(curr);
            if ((output - distance) < 0) {
                isFail = true;
            }
            if (!isFail) {
                output -= distance;
                wonBattle++;
            }
            if (wonBattle % 3 === 0) {
                output += wonBattle;
            }
        }
        return output
    }, energy)
    if (!isFail) {
        console.log(`Won battles: ${wonBattle}. Energy left: ${result}`);
    }
    if (isFail) {
        console.log(`Not enough energy! Game ends with ${wonBattle} won battles and ${result} energy`);
    }
}
solve([
    '100', '10', '10',
    '10', '1', '2',
    '3', '73', '10'
])
solve(['200', '54', '14', '28', '13', 'End of battle'])
