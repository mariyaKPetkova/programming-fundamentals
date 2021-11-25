// function solve(input) {
//     let count = input[0]
//     input.slice(1).forEach(barCode => {
//         let pattern = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])\1/g
//         let matchB = barCode.match(pattern)
//         if (matchB) {
//             let patternN = /[0-9]/g
//             let num = barCode.match(patternN)
//             if (num != null) {
//                 console.log(`Product group: ${num.join('')}`);
//             } else {
//                 console.log(`Product group: 00`);
//             }
//         } else {
//             console.log(`Invalid barcode`);
//         }
//     });
// }
// solve([
//     '6',
//     '@###Val1d1teM@###',
//     '@#ValidIteM@#',
//     '##InvaliDiteM##',
//     '@InvalidIteM@',
//     '@#Invalid_IteM@#',
//     '@#ValiditeM@#'
//   ])

// 2nd solution

function solve(input) {
    const pattern = /(@#+)([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)/
    const patternPG = /[0-9]/g

    const result = input.slice(1)
        .reduce((acc, curr) => {
            matches = curr.match(pattern)
            if (matches) {
                const gr = curr.match(patternPG)
                if (gr != null) {
                    const sum = gr.reduce((a, b) => a + b)
                    console.log(`Product group: ${sum}`);
                } else {
                    console.log(`Product group: 00`);
                }

            } else {
                console.log(`Invalid barcode`);
            }
            return acc
        }, 0)
}
solve(['3',
    '@#FreshFisH@#',
    '@###Brea0D@###',
    '@##Che46sE@##'])
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ])