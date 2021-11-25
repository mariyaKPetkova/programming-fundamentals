function solve(input) {
    // let index = 0;
    // let neighborhood = input.shift().split('@').map(Number);
    // let inputData = input[index++];
    // let position = 0
    // while (inputData !== 'Love!') {
    //     let [command, lengthJump] = inputData.split(' ');
    //     lengthJump = Number(lengthJump);
    //     position += lengthJump;
    //     if (neighborhood[position] == undefined) {
    //         position = 0;
    //     }
    //     if (neighborhood[position] > 0) {
    //         neighborhood[position] -= 2;
    //         if (neighborhood[position] == 0) {
    //             console.log(`Place ${position} has Valentine's day.`);
    //         }
    //     } else {
    //         console.log(`Place ${position} already had Valentine's day.`);
    //     }
    //     inputData = input[index++];
    // }
    // console.log(`Cupid's last position was ${position}.`);
    // let counter = 0
    // neighborhood.forEach(element => {
    //     if (element != 0) {
    //         counter++
    //     }
    // });
    // if (counter == 0) {
    //     console.log(`Mission was successful.`);
    // } else {
    //     console.log(`Cupid has failed ${counter} places.`);
    // }

    //2nd position:

    let position = 0;
    const neighborhood = input[0].split('@').map(Number);
    const commands = input.slice(1, input.indexOf('Love'));
    const result = commands.reduce((output, curr) => {
        const lengthJump = Number(curr.split(' ')[1]);
        position += lengthJump
        if (neighborhood[position] == undefined) {
            position = 0;
        }
        if (neighborhood[position] > 0) {
            neighborhood[position] -= 2;
            if (neighborhood[position] == 0) {
                console.log(`Place ${position} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${position} already had Valentine's day.`);
        }
        return output
    }, neighborhood)
    console.log(`Cupid's last position was ${position}.`);
    const filtered = result.filter(a => a != 0)
    filtered.length == 0
        ? console.log(`Mission was successful.`)
        : console.log(`Cupid has failed ${filtered.length} places.`)
}
//solve([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' ])
solve([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
])