function solve(arr) {
    //     let client = arr.pop();
    //     arr = arr.map(Number)
    //     let negativeNumbers = arr.filter(x => x < 0)
    //     negativeNumbers.forEach(element => {
    //         console.log(`Invalid price!`);
    //     });
    //     let positiveNumbers = arr.filter(x => x > 0)
    //     let sum = positiveNumbers.reduce((acc, curr) => acc + curr, 0)
    //     let taxes = sum * 0.20
    //     let totalSum = sum + taxes;
    //     let specialPrice = totalSum * 0.9
    //     client === 'special' ? (totalSum = specialPrice) : totalSum
    //     if (totalSum > 0) {
    //         console.log(`Congratulations you've just bought a new computer!`)
    //         console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    //         console.log(`Taxes: ${taxes.toFixed(2)}$`);
    //         console.log(`-----------`);
    //         console.log(`Total price: ${totalSum.toFixed(2)}$`);
    //     } else {
    //         console.log(`Invalid order!`);
    //     }
    // }


    const type = arr.slice(-1)
    const filteredPrices = arr.slice(0, -1).map(Number).filter(x => {
        if (x < 0) {
            console.log("Invalid price!");
        }
        return x >= 0
    });
    if (filteredPrices.length == 0) return console.log(`Invalid order!`);
    const price = filteredPrices.reduce((acc, curr) => acc + curr)
    const taxes = price * 0.20
    const totalSum = price + taxes
    if (totalSum == 0) return console.log("Invalid order!");
    console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${price.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------`);
    type == 'special'
        ? console.log(`Total price: ${(totalSum * 0.90).toFixed(2)}$`)
        : console.log(`Total price: ${totalSum.toFixed(2)}$`);
}
solve([
    'regular'
])
solve([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]
)