function solve(input) {
    // let racers = input[0].split(', ');
    // let racersInfo = {}
    // input.slice(1).forEach(racer => {
    //     let nameMatch = racer.match(/[A-Za-z]/g)
    //     let name = nameMatch.join('');
    //     if (nameMatch && racers.includes(name)) {
    //         let distanceMatch = racer.match(/\d/g).map(Number)
    //         let distance = distanceMatch.reduce((a, b) => a + b)
    //         if (!racersInfo.hasOwnProperty(name)) {
    //             racersInfo[name] = 0;
    //         }
    //         racersInfo[name] += distance;
    //     }
    //     return racersInfo
    // });
    // let topRacers = Object.keys(racersInfo)
    //     .sort((a, b) => racersInfo[b] - racersInfo[a])
    //     .slice(0, 3)
    // console.log(`1st place: ${topRacers[0]}\n2nd place: ${topRacers[1]}\n3rd place: ${topRacers[2]}`);


    //2nd solution:

    const names = input[0].split(', ')
    const result = input.slice(1, input.indexOf('end of race'))
        .reduce((acc, curr) => {
            const patternName = /[A-Za-z]/g
            const matchName = curr.match(patternName)
            const nameR = matchName.join('')
            if (names.includes(nameR)) {
                const patternDistance = /[0-9]/g
                const distance = curr.match(patternDistance)
                const sum = distance.map(Number).reduce((a, b) => a + b)
                if (!acc[nameR]) {
                    acc[nameR] = 0
                }
                acc[nameR] += sum
            }
            return acc
        }, {})
    const sorted = Object.keys(result)
        .sort((a, b) => result[b] - result[a])
        .slice(0, 3)
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`);
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])