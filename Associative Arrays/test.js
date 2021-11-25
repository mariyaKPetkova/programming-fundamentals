function solve(input) {
    const invited = input.slice(0, input.indexOf('PARTY'))
    const inTheParty = input.slice(input.indexOf('PARTY') + 1)
    const result = invited.reduce((acc, curr) => {
        if (!inTheParty.includes(curr)) {
            acc[curr] = {
                type: isVipOrNot(curr)
            }
        }
        return acc
    }, {})

    console.log(Object.keys(result).length);
    const vip = Object.keys(result).filter(x => result[x].type === 'vip')
    const regular = Object.keys(result).filter(x => result[x].type === 'regular')
    console.log(vip.join('\n'));
    console.log(regular.join('\n'));

    function isVipOrNot(str) {
        const element = str.split('').slice(0, 1)
        if (isNaN(Number(element))) {
            return 'regular'
        }
        return 'vip'
    }
}
solve(['IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    '3tSzE5t0p',
    'PARTY',
    'bjbyby',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)