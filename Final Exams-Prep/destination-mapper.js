
function solve(input) { //100/100
    const pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g
    const matches = input.match(pattern)
    if (matches !== null) {
        const destination = matches.map(x => x.slice(1, -1))
        const travelPoints = destination.reduce((acc, curr) => {
            return acc += curr.length
        }, 0)
        console.log(`Destinations: ${destination.join(', ')}\nTravel Points: ${travelPoints}`);
    } else {
        console.log(`Destinations: \nTravel Points: 0`);
    }
}
// function solve(input) { // 20/100
//     const pattern = /(=|\/)[A-Z][a-z]{2,}\1/g // /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g
//     const matches = input.match(pattern)
//     if (matches === null ) return console.log(`Destinations: \nTravel Points: 0`)
//     const destination = matches.map(x => x.slice(1, -1))
//     const travelPoints = destination.reduce((acc, curr) => {
//         return acc += curr.length
//     }, 0)
//     console.log(`Destinations: ${destination.join(', ')}\nTravel Points: ${travelPoints}`);
// }
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
solve('ThisIs some InvalidInput')