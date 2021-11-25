function solve([pirates, warshipp, maxHealth, ...rest]) {
    let piratesShip = pirates.split('>').map(Number)
    let warShip = warshipp.split('>').map(Number)
    let isStop = false;
    for (let i = 0; i < rest.length; i++) {
        let [comm, first, second, third] = rest[i].split(' ')
        switch (comm) {
            case 'Fire':
                const index = Number(first)
                const damage = Number(second)
                if (warShip[index] != undefined) {
                    if ((warShip[index] - damage) > 0) {
                        warShip[index] -= damage
                    } else {
                        console.log("You won! The enemy ship has sunken.");
                        isStop = true
                        break;
                    }
                }
                break;
            case 'Defend':
                const start = Number(first)
                const end = Number(second)
                const damages = Number(third)
                if (piratesShip[start] != undefined && piratesShip[end] != undefined) {
                    for (let j = start; j <= end; j++) {
                        piratesShip[j] -= damages;
                        if (piratesShip[j] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            isStop = true
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                const ind = Number(first)
                const health = Number(second)
                if (piratesShip[ind] != undefined) {
                    if ((piratesShip[ind] + health) >= maxHealth) {
                        piratesShip[ind] = maxHealth
                    } else {
                        piratesShip[ind] += health
                    }
                }
                break;
            case 'Status':
                const range = maxHealth * 0.2
                let count = 0
                piratesShip.filter(x => {
                    if (x < range) {
                        count++
                    }
                })
                console.log(`${count} sections need repair.`);
                break;
        }
        if (isStop) {
            break;
        }
    }
    if (!isStop) {
        const piratesShipStatus = piratesShip.reduce((acc, curr) => acc += curr)
        const warShipStatus = warShip.reduce((acc, curr) => acc += curr)
        console.log(`Pirate ship status: ${piratesShipStatus}`);
        console.log(`Warship status: ${warShipStatus}`);
    }
}
// solve([
//     '12>13>11>20>66',
//     '12>22>33>44>55>32>18',
//     '70',
//     'Fire 2 11',
//     'Fire 8 100',
//     'Defend 3 6 11',
//     'Defend 0 3 5',
//     'Repair 1 33',
//     'Status',
//     'Retire'
// ])
solve([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
])