function solve([inputArr, ...rest]) {
    const initialLoot = inputArr.split('|');
    const result = rest.splice(0, rest.indexOf('Yohoho!')).reduce((output, curr) => {
        const command = curr.split(' ')[0]
        const actions = {
            Loot: () => {
                const items = curr.split(' ').slice(1)
                return items.reduce((acc, curr) => {
                    return (!acc.includes(curr))
                        ? [curr, ...acc]
                        : acc
                }, output)
            },
            Drop: () => {
                const ind = Number(curr.split(' ').slice(1))
                if(output[ind] === undefined) return output
                const first = output.slice(0,ind)
                const second = output.slice(ind+1)
                const element = output[ind]
                return [...first,...second,element]
            },
            Steal: () => {
                const count = Number(curr.split(' ').slice(1))
                if(output.lenngth <= count){
                    console.log(output.join(', '));
                    return []
                }
                const avItem = output.slice(0,-count)
                console.log(output.slice(-count).join(', '));
                return [...avItem]
            }
        }
        const commandFn = actions[command]
        return commandFn ? commandFn() : output
    }, initialLoot)
    if(result.length ==0){
       return console.log("Failed treasure hunt.");
    }
const sumLetter = result.reduce((acc,curr)=>{
    const sum = curr.length
    return acc += sum
},0)
console.log(`Average treasure gain: ${(sumLetter/result.length).toFixed(2)} pirate credits.`);
}
// solve([
//     'Gold|Silver|Bronze|Medallion|Cup',
//     'Loot Wood Gold Coins',
//     'Loot Silver Pistol',
//     'Drop 3',
//     'Steal 3',
//     'Yohoho!'
// ])
solve([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
  ])