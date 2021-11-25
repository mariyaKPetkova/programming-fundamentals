function solve(input) {

    let players = generateHands(input);
    let cardMapper = {
        p: {
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        },
        t: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
    }
    Object.keys(players).forEach((player) => {
        console.log(`${player}: ${totalDechPower(players[player])}`);
    });

    function totalDechPower(cardsSet) {
        let totalPower = 0;
        cardsSet.forEach((card) => {
            let tokens = card.split('');
            let value = tokens.slice(0, tokens.length - 1).join('');
            let suit = tokens.slice(-1).join('');
            let p = 0;
            if (!cardMapper.p[value]) {
                p = Number(value);
            } else {
                p = cardMapper.p[value];
            }
            totalPower += (p * cardMapper.t[suit])
        });
        return totalPower
    }

    function generateHands(arr) {
        let result = {};

        arr.forEach(playerInfo => {
            let [player, cards] = playerInfo.split(': ');
            if (!result[player]) {
                result[player] = new Set(cards.split(', '))
            } else {
                // result[player].add(...cards.split(', '))
                cards.split(', ').forEach((card) => {
                    result[player].add(card)
                })
            }
        });
        return result
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])