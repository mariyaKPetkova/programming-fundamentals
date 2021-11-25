// function solve(input) {
//     const countPieces = Number(input[0]);
//     const list = {};
//     const rList = input.slice(1, countPieces + 1).reduce((output, curr) => {
//         const [piece, composer, key] = curr.split('|');
//         if (!list[piece]) {
//             list[piece] = {
//                 composer: '',
//                 key: '',
//                 isRemoved: false
//             }
//             list[piece].composer = composer
//             list[piece].key = key
//         }
//         return output
//     }, countPieces);

//     input.slice(countPieces + 1, input.indexOf('Stop')).reduce((outputComm, curr) => {
//         const [comm, ...params] = curr.split('|')
//         const actions = {
//             Add: () => {
//                 const [piece, composer, key] = params
//                 if (!list[piece]) {
//                     list[piece] = {
//                         composer,
//                         key,
//                         isRemoved: false
//                     }
//                     console.log(`${piece} by ${composer} in ${key} added to the collection!`);
//                 }else{
//                     console.log(`${piece} is already in the collection!`);
//                 }
//                 return outputComm
//             },
//             Remove: () => {
//                 const piece = params
//                 if (!list[piece]) {
//                     console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//                 }
//                 if (list[piece]) {
//                     list[piece].isRemoved = true;
//                     console.log(`Successfully removed ${piece}!`);
//                 }
//                 return outputComm
//             },
//             ChangeKey: () => {
//                 const [piece, newKey] = params
//                 if (!list[piece]) {
//                     console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//                 }
//                 if (list[piece]) {
//                     list[piece].key = newKey
//                     console.log(`Changed the key of ${piece} to ${newKey}!`);
//                 }
//                 return outputComm
//             }
//         }
//         const commFn = actions[comm]
//         return commFn ? commFn() : outputComm
//     }, rList)
//     const sorted = Object.keys(list)
//         .filter(piece => list[piece].isRemoved == false)
//         .sort((a, b) => a.localeCompare(b) || (a[1]).localeCompare(b[1]))
//     sorted.forEach(piece => {
//         console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`);
//     })
//}

// 2nd solution:
function solve([number, ...rest]) {
    const list = rest.slice(0, number)
        .reduce((acc, curr) => {
            let [piece, composer, key] = curr.split('|')
            acc[piece] = {
                composer,
                key
            }
            return acc
        }, {})
    const result = rest.slice(number, rest.indexOf('Stop'))
        .reduce((acc, curr) => {
            let [comm, piece, ...rest] = curr.split('|')
            const actions = {
                Add: () => {
                    [composer, key] = rest
                    if (list[piece]) return console.log(`${piece} is already in the collection!`);
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                    list[piece] = {
                        composer,
                        key
                    }
                },
                Remove: () => {
                    if(!list[piece]) return console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    console.log(`Successfully removed ${piece}!`);
                    delete list[piece]
                },
                ChangeKey: () => {
                    if(!list[piece]) return console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    list[piece].key = rest
                    console.log(`Changed the key of ${piece} to ${rest}!`);
                }
            }
            const commFn = actions[comm]
            return commFn ? commFn() : acc
        }, list)

        Object.keys(list)
        .sort((a,b) => a.localeCompare(b) || list[a].composer.localeCompare(list[b].composer) )
        .forEach(piece => {
            console.log(`${piece} -> Composer: ${list[piece].composer}, Key: ${list[piece].key}`);
        })
    }
// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])