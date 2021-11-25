// function solve(input) {
//     let actions = {
//         Plunder(name, first, second) {
//             let [killedPeople, stolenGold] = [Number(first), Number(second)]
//             if (cities.hasOwnProperty(name)) {
//                 cities[name].population -= killedPeople
//                 cities[name].gold -= stolenGold
//                 console.log(`${name} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);
//             }
//             if (cities[name].population <= 0 || cities[name].gold <= 0) {
//                 cities[name].isOnTheMap = false;
//                 console.log(`${name} has been wiped off the map!`);
//             }
//         },
//         Prosper(name, first) {
//             let addedGold = Number(first);
//             if (addedGold < 0) {
//                 console.log('Gold added cannot be a negative number!');
//             } else {
//                 cities[name].gold += addedGold
//                 console.log(`${addedGold} gold added to the city treasury. ${name} now has ${cities[name].gold} gold.`);
//             }
//         }
//     }

//     let cities = {}
//     input.slice(0, input.indexOf('Sail')).forEach(cityInfo => {
//         let [name, population, gold] = cityInfo.split('||');
//         if (!cities[name]) {
//             cities[name] = {
//                 population: 0,
//                 gold: 0,
//                 isOnTheMap: true
//             }
//         }
//         cities[name].population += Number(population)
//         cities[name].gold += Number(gold)
//     });

//     input.slice(input.indexOf('Sail') + 1, input.indexOf('End')).forEach(actionInfo => {
//         let [action, townName, ...params] = actionInfo.split('=>')
//         actions[action](townName, ...params)
//     });

//     let sortedCities = Object.keys(cities)
//         .filter((name) => cities[name].isOnTheMap)
//         .sort((a, b) => cities[b].gold - cities[a].gold || a.localeCompare(b))

//     if (sortedCities.length <= 0) {
//         console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
//     } else {
//         console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`);
//         sortedCities.forEach(name => {
//             console.log(`${name} -> Population: ${cities[name].population} citizens, Gold: ${cities[name].gold} kg`);
//         });
//     }
// }
// solve([
//     'Tortuga||345000||1250',
//     'Santo Domingo||240000||630',
//     'Havana||410000||1100',
//     'Sail',
//     'Plunder=>Tortuga=>75000=>380',
//     'Prosper=>Santo Domingo=>180',
//     'End'
//])

// 2nd solution:

function solve(input) {

    const actions = {
        Plunder(town, people, gold) {
            [people, gold] = [Number(people), Number(gold)]
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            towns[town].population -= people
            towns[town].gold -= gold
            if (towns[town].population <= 0 || towns[town].gold <= 0) {
                towns[town].isOnTheMap = false
                console.log(`${town} has been wiped off the map!`);
            }
        },
        Prosper(town, gold) {
            gold = Number(gold)
            if (gold < 0) return console.log(`Gold added cannot be a negative number!`);
            towns[town].gold += gold
            console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);
        }
    }

    const towns = input.slice(0, input.indexOf('Sail'))
        .reduce((acc, curr) => {
            let [name, population, gold] = curr.split('||')
            if (!acc[name]) {
                acc[name] = {
                    population: 0,
                    gold: 0,
                    isOnTheMap: true
                }
            }
            acc[name].population += Number(population)
            acc[name].gold += Number(gold)
            return acc
        }, {})

    const commands = input.slice(input.indexOf('Sail') + 1, input.indexOf('End'))
        .reduce((acc, curr) => {
            let [comm, town, ...rest] = curr.split('=>')
            return actions[comm](town, ...rest)
        }, towns)

    const townsOnTheMap = Object.keys(towns)
        .filter(town => towns[town].isOnTheMap)
    if (townsOnTheMap.length <= 0) return console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    console.log(`Ahoy, Captain! There are ${townsOnTheMap.length} wealthy settlements to go to:`);
    townsOnTheMap.sort((a, b) => towns[b].gold - towns[a].gold || a.localeCompare(b))
        .forEach(town => {
            console.log(`${town} -> Population: ${towns[town].population} citizens, Gold: ${towns[town].gold} kg`);
        })
}
// solve([
//     'Tortuga||345000||1250',
//     'Santo Domingo||240000||630',
//     'Havana||410000||1100',
//     'Sail',
//     'Plunder=>Tortuga=>75000=>380',
//     'Prosper=>Santo Domingo=>180',
//     'End'
// ])
solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])