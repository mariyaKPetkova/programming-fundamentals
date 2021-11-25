// function solve([number, ...rest]) {
//     number = Number(number)

//     const plants = rest.slice(0, number)
//         .reduce((acc, curr) => {
//             let [plant, rarity] = curr.split('<->')
//             acc[plant] = {
//                 rarity: Number(rarity),
//                 rating: [],
//                 totalRating: 0
//             }
//             return acc
//         }, {})

//     const result = rest.slice(number, rest.indexOf('Exhibition'))
//         .reduce((acc, curr) => {
//             let [comm, rest] = curr.split(': ');
//             let [plant, params] = rest.split(' - ');
//               //!!!
//             if (comm !== 'Rate' && comm !== 'Update' && comm !== 'Reset') return console.log('error');
//             if(!plants.hasOwnProperty(plant)) return console.log('error');
//             const actions = {
//                 'Rate': () => {
                    
//                     const rating = Number(params)
//                     return plants[plant].rating.push(rating)
//                 },
//                 'Update': () => {
                    
//                     const rarity = Number(params)
//                     return plants[plant].rarity = rarity
//                 },
//                 'Reset': () => {
//                     return plants[rest].rating = []
//                 }
//             }
//             const commandFn = actions[comm]
//             return commandFn ? commandFn() : acc
//         }, plants)
//     console.log(`Plants for the exhibition:`);
//     Object.keys(plants).reduce((acc, curr) => {
//         if (plants[curr].rating.length > 0) {
//             plants[curr].totalRating = plants[curr].rating.reduce((a, b) => a + b) / plants[curr].rating.length
//         }
//         return acc
//     }, plants)
//     Object.keys(plants).sort((a, b) => plants[b].rarity - plants[a].rarity || plants[b].totalRating - plants[a].totalRating)
//         .forEach(plant => {
//             console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[plant].totalRating.toFixed(2)}`);
//         })
// }

//2nd solution:

function solve([number, ...rest]) {
    number = Number(number)

    const plants = rest.slice(0, number)
        .reduce((acc, curr) => {
            let [plant, rarity] = curr.split('<->')
            acc[plant] = {
                rarity: Number(rarity),
                rating: []
            }
            return acc
        }, {})

    const result = rest.slice(number, rest.indexOf('Exhibition'))
        .reduce((acc, curr) => {
            let [comm, rest] = curr.split(': ');
            let [plant, params] = rest.split(' - ')
            if (comm !== 'Rate' && comm !== 'Update' && comm !== 'Reset') return console.log('error');
            if(!plants.hasOwnProperty(plant)) return console.log('error');
            const actions = {
                'Rate': () => {
                    const rating = Number(params)
                    plants[plant].rating.push(rating)
                },
                'Update': () => {
                    const rarity = Number(params)
                    plants[plant].rarity = rarity
                },
                'Reset': () => plants[rest].rating = []
            }
            const commandFn = actions[comm]
            return commandFn ? commandFn() : acc
        }, plants)
    console.log(`Plants for the exhibition:`);
    Object.keys(plants).sort((a, b) => plants[b].rarity - plants[a].rarity || averageRaring(plants[b].rating) - averageRaring(plants[a].rating))
        .forEach(plant => {
            console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRaring(plants[plant].rating).toFixed(2)}`);
        })
        function averageRaring (arr){
            if (!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;
        }
}

solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rat: Woodii - 10',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
])
solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])