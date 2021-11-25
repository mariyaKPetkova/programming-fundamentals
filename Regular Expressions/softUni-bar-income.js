function solve(input) {
    const result = input.slice(0, input.indexOf('end of shift'))
        .reduce((acc, curr) => {
            const pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/gm
            const match = pattern.exec(curr)
            if (match) {
                const sum = Number(match.groups['quantity']) * Number(match.groups['price'])
                console.log(`${match.groups['name']}: ${match.groups['product']} - ${sum.toFixed(2)}`);
                return acc += sum
            }
            return acc
        }, 0)
    console.log(`Total income: ${result.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])