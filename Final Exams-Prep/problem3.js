// last solution (58/100):

// function solve(input) {
//     const result = input.slice(0, input.indexOf("Results"))
//         .reduce((acc, curr) => {
//             let [comm, first, second, third] = curr.split(':')
//             //if(comm !== 'Add' && comm !=='Attack' && comm !== 'Delete') return acc
//             const actions = {
//                 Add: () => {
//                     let [name, health, energy] = [first, second, third]
//                     health = Number(health)
//                     energy = Number(energy)
//                     if (!acc[name]) {
//                         acc[name] = {
//                             health: health,
//                             energy: energy
//                         }
//                     } else {
//                         acc[name].health += health
//                     }
//                     return acc
//                 },
//                 Attack: () => {
//                     let [attacker, defender, damage] = [first, second, third]
//                     damage = Number(damage)
//                     if (acc[attacker] && acc[defender]) {
//                         acc[defender].health -= damage
//                         acc[attacker].energy -= 1
//                         if (acc[defender].health <= 0) {
//                             delete acc[defender]
//                             console.log(`${defender} was disqualified!`);
//                         }
//                         if (acc[attacker].energy <= 0) {
//                             delete acc[attacker]
//                             console.log(`${attacker} was disqualified!`);
//                         }
//                     }
//                     return acc
//                 },
//                 Delete: () => {
//                     if (first === 'All') {
//                         acc = {};
//                     }
//                     if (acc[first]) {
//                         delete acc[first]
//                     }
//                     return acc
//                 }
//             }

//             const commandFn = actions[comm];
//             return commandFn ? commandFn() : acc;
//         }, {})

//     console.log(`People count: ${Object.keys(result).length}`);
//     Object.keys(result)
//         .sort((a, b) => result[b].health - result[a].health || result[a].localeCompare(result[b]))
//         .forEach(person => {
//             console.log(`${person} - ${result[person].health} - ${result[person].energy}`);
//         })
// }

// first solution:

function solve(input) {
    const actions = {
        Add(acc, name, health, energy) {
            [health, energy] = [Number(health), Number(energy)]
            if (acc[name]) {
                acc[name].health += health
            }
            if (!acc[name]) {
                acc[name] = {
                    health,
                    energy,
                    isIn: true
                }
            }
            return acc
        },
        Attack(acc, attacker, defender, damage) {
            damage = Number(damage)
            if (acc[attacker] && acc[defender]) {
                acc[defender].health -= damage
                if (acc[defender].health <= 0) {
                    acc[defender].isIn = false
                    console.log(`${defender} was disqualified!`);
                }
                acc[attacker].energy -= 1
                if (acc[attacker].energy <= 0) {
                    acc[attacker].isIn = false
                    console.log(`${attacker} was disqualified!`);
                }
            }
            return acc
        },
        Delete(acc, name) {
            if (name === 'All') return Object.keys(acc).map(person => acc[person].isIn = false)
            if (acc[name]) {
                acc[name].isIn = false
            }
            return acc
        }
    }
    const personInfo = input.slice(0, input.indexOf('Results'))
        .reduce((acc, curr) => {
            let [comm, ...params] = curr.split(':');
            return actions[comm](acc, ...params);
        }, {})
    const leftPeople = Object.keys(personInfo)
        .filter(person => personInfo[person].isIn)
    console.log(`People count: ${leftPeople.length}`);                       //  a.localeCompare(b)
    leftPeople.sort((a, b) => personInfo[b].health - personInfo[a].health || result[a].localeCompare(result[b]))
        .forEach(person => {
            console.log(`${person} - ${personInfo[person].health} - ${personInfo[person].energy}`);
        })
}
solve(["Add:Mark:1000:5",
    "Add:Clark:1000:3",
    "Attack:Clark:Mark:500",
    "Add:Allison:2500:5",
    "Attack:Clark:Mark:300",
    "Add:Charlie:4000:10",
    "Attack:Clark:Mark:500",
    "Results"])
solve(["Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Chicken:1000:1",
    "Add:Rabbit:3000:5",
    "Add:Buggy:1259:10",
    "Delete:Kent",
    "Attack:Chicken:Rabbit:1000",
    "Results"])
solve(["Add:Bonnie:3000:5",
    "Add:Johny:4000:10",
    "Delete:All",
    "Add:Bonnie:3333:3",
    "Results"])