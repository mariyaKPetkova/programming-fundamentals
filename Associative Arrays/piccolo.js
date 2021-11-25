//function solve(arr) {
//     let parking = {
//         inP: [],
//         outP: []
//     }
//     arr.forEach(element => {
//         let [dir, num] = element.split(', ')
//         if (dir === 'IN') {
//             parking.inP.push(num)
//         } else if (dir === 'OUT') {
//             if (parking.inP.includes(num)) {
//                 let position = parking.inP.indexOf(num)
//                 let current = parking.inP.splice(position, 1)
//                 parking.outP.push(current)
//             } else {
//                 parking.outP.push(num)
//             }
//         }
//     });
//     if (parking.inP.length == 0) {
//         console.log(`Parking Lot is Empty`);
//     } else {
//         console.log(parking.inP.sort((a, b) => a.localeCompare(b)).join('\n'));
//     }
// }

// 2nd solution:
//     let parking = {}
//     arr.forEach(element => {
//         let [dir, num] = element.split(', ')
//         if(dir === 'IN'){
//             parking[num] = 1
//         } else {
//             delete parking[num]
//         }
//     });
//     if (parking.length == 0) {
//             console.log(`Parking Lot is Empty`);
//     }else{
//     console.log(Object.keys(parking).sort((a,b) => a.localeCompare(b))
//     .join('\n'));
//     }    
// }
function solve(input) {
    const parking = input.reduce((acc, curr) => {
        const [dir, numb] = curr.split(', ')
        if (dir === 'IN') {
            acc[numb] = dir
        }
        if (dir === 'OUT') {
            if (acc[numb]) {
                acc[numb] = dir
            }
        }
        return acc
    }, {})
    const result = Object.keys(parking)
    .filter(car => parking[car] == 'IN')
    .sort((a,b) => a.localeCompare(b))
    .join('\n')
    console.log(result);
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])