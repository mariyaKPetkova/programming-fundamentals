// function solve(input) {
// 1st solution:

// let countHeroes = Number(input[0]);
// let actions = {
//     CastSpell(name, mPNeeded, spellName) {
//         mPNeeded = Number(mPNeeded)
//         if (heroes[name].mP >= mPNeeded) {
//             heroes[name].mP -= mPNeeded
//             console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].mP} MP!`);
//         } else {
//             console.log(`${name} does not have enough MP to cast ${spellName}!`);
//         }
//     },
//     TakeDamage(name, damage, attacker) {
//         damage = Number(damage)
//         heroes[name].hP -= damage
//         if (heroes[name].hP > 0) {
//             console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hP} HP left!`);
//         } else {
//             heroes[name].isDied = true;
//             console.log(`${name} has been killed by ${attacker}!`);
//         }
//     },
//     Recharge(name, amount) {
//         amount = Number(amount)
//         let diff = Math.abs(200 - heroes[name].mP)
//         if ((heroes[name].mP += amount) >= 200) {
//             heroes[name].mP = 200;
//             console.log(`${name} recharged for ${diff} MP!`);
//         } else {
//             console.log(`${name} recharged for ${amount} MP!`);
//         }
//     },
//     Heal(name, amount) {
//         amount = Number(amount)
//         let diff = Math.abs(100 - heroes[name].hP)
//         if ((heroes[name].hP += amount) >= 100) {
//             heroes[name].hP = 100
//             console.log(`${name} healed for ${diff} HP!`);
//         } else {
//             console.log(`${name} healed for ${amount} HP!`);
//         }
//     }
// }
// let heroes = {}
// input.slice(1, countHeroes + 1).forEach(heroInfo => {
//     let tockens = heroInfo.split(' ');
//     let name = tockens[0];
//     let [hP, mP] = [Number(tockens[1]), Number(tockens[2])];
//     if (!heroes.hasOwnProperty(name)) {
//         heroes[name] = {
//             hP: 0,
//             mP: 0,
//             isDied: false
//         }
//     }
//     heroes[name].hP += hP
//     heroes[name].mP += mP
// });
// input.slice(countHeroes + 1, input.indexOf('End')).forEach(actionInfo => {
//     let [action, name, ...params] = actionInfo.split(' - ')
//     actions[action](name, ...params)
// });
// let aliveHeroes = Object.keys(heroes)
//     .filter(name => heroes[name].isDied === false)
//     .sort((a, b) => heroes[b].hP - heroes[a].hP || a.localeCompare(b))
// aliveHeroes.forEach(name => {
//     console.log(`${name}\nHP: ${heroes[name].hP}\nMP: ${heroes[name].mP}`);
// })

// 2nd solution:
//     const countHeroes = Number(input[0]);
//     const heroInfo = input.slice(1, countHeroes + 1);
//     const actionsList = input.slice(countHeroes + 1, input.indexOf('End'));
//     const heroes = {};

//     heroInfo.reduce((acc, curr) => {
//         const [name, hp, mp] = curr.split(' ')
//         if (!heroes[name]) {
//             heroes[name] = { hp: 0, mp: 0, isDead: false }
//         }
//         heroes[name].hp += Number(hp);
//         heroes[name].mp += Number(mp);
//         return acc
//     }, heroInfo);

//     actionsList.reduce((acc, curr) => {
//         const [comm, name, ...params] = curr.split(' - ')
//         const actions = {
//             CastSpell: () => {
//                 const [mpNeeded, spellName] = params;
//                 if (heroes[name].mp >= mpNeeded) {
//                     heroes[name].mp -= mpNeeded;
//                     console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`);
//                 }
//                 if (heroes[name].mp < mpNeeded) {
//                     console.log(`${name} does not have enough MP to cast ${spellName}!`)
//                 }
//                 return acc;
//             },
//             TakeDamage: () => {
//                 const damage = Number(params[0])
//                 const attacker = params[1];
//                 if (damage >= heroes[name].hp) {
//                     heroes[name].hp = 0;
//                     heroes[name].isDead = true
//                     console.log(`${name} has been killed by ${attacker}!`)
//                 }
//                 if (heroes[name].hp > damage) {
//                     heroes[name].hp -= damage;
//                     console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
//                 }
//                 return acc;
//             },
//             Recharge: () => {
//                 const amount = Number(params[0])
//                 const maxAmount = 200
//                 const diff = Math.abs(maxAmount - heroes[name].mp)
//                 if ((heroes[name].mp += amount) >= maxAmount) {
//                     heroes[name].mp = maxAmount;
//                     console.log(`${name} recharged for ${diff} MP!`);
//                 } else {
//                     console.log(`${name} recharged for ${amount} MP!`);
//                 }
//                 return acc;
//             },
//             Heal: () => {
//                 const amount = Number(params[0])
//                 const maxAmount = 100
//                 const diff = Math.abs(maxAmount - heroes[name].hp)
//                 if ((heroes[name].hp += amount) >= maxAmount) {
//                     heroes[name].hp = maxAmount
//                     console.log(`${name} healed for ${diff} HP!`);
//                 } else {
//                     console.log(`${name} healed for ${amount} HP!`);
//                 }
//                 return acc;
//             }
//         }
//         const commandFn = actions[comm]
//         return commandFn()
//     }, actionsList);

//     const sortedHeroes = Object.keys(heroes).filter(name => heroes[name].isDead === false)
//         .sort((a, b) => heroes[b].hp - heroes[a].hp || a.localeCompare(b));
//     sortedHeroes.forEach(name => {
//         console.log(`${name}\n HP: ${heroes[name].hp}\n MP: ${heroes[name].mp}`);
//     })
// }

//3rd solution:
// function solve(input) {
//     const counHeroes = Number(input[0])
//     const actions = {
//         CastSpell(hero, mpNeeded, spellName) {
//             mpNeeded = Number(mpNeeded)
//             if (heroes[hero].mp >= mpNeeded) {
//                 heroes[hero].mp -= mpNeeded
//                 console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`);
//                 return hero
//             }
//             console.log(`${hero} does not have enough MP to cast ${spellName}!`);
//             return hero
//         },
//         TakeDamage(hero, damage, attacker) {
//             damage = Number(damage)
//             heroes[hero].hp -= damage
//             if (heroes[hero].hp <= 0) {
//                 heroes[hero].isAlive = false
//                 console.log(`${hero} has been killed by ${attacker}!`);
//                 return hero
//             }
//             console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
//             return hero
//         },
//         Recharge(hero, amount) {
//             amount = Number(amount)
//             const diff = 200 - heroes[hero].mp
//             if (diff >= amount) {
//                 heroes[hero].mp += amount
//                 console.log(`${hero} recharged for ${amount} MP!`);
//                 return hero
//             }
//             heroes[hero].mp += diff
//             console.log(`${hero} recharged for ${diff} MP!`);
//             return hero
//         },
//         Heal(hero, amount) {
//             amount = Number(amount)
//             if ((heroes[hero].hp + amount) <= 100) {
//                 heroes[hero].hp += amount
//                 console.log(`${hero} healed for ${amount} HP!`);
//                 return hero
//             }
//             console.log(`${hero} healed for ${100 - heroes[hero].hp} HP!`);
//             heroes[hero].hp = 100
//             return hero
            
//             // const oldValue = heroes[hero].hp
//             // heroes[hero].hp = Math.min(100, heroes[hero].hp + amount)
//             // return `${hero} healed for ${heroes[hero].hp - oldValue} HP!`
//         }
//     }

//     const heroes = input.slice(1, counHeroes + 1).reduce((acc, curr) => {
//         let [name, hp, mp] = curr.split(' ')
//         if (!acc[name]) {
//             acc[name] = {
//                 hp: 0,
//                 mp: 0,
//                 isAlive: true
//             }
//         }
//         acc[name].hp += Number(hp)
//         acc[name].mp += Number(mp)
//         return acc
//     }, {})

//     const commands = input.slice(counHeroes + 1, input.indexOf('End'))
//         .reduce((acc, curr) => {
//             let [comm, hero, ...rest] = curr.split(' - ')
//             return actions[comm](hero, ...rest)
//         }, heroes)

//     Object.keys(heroes)
//         .filter(x => heroes[x].isAlive)
//         .sort((a, b) => heroes[b].hp - heroes[a].hp || a.localeCompare(b))
//         .forEach(hero => {
//             console.log(`${hero}\n HP: ${heroes[hero].hp}\n MP: ${heroes[hero].mp}`);
//         })
// }


function solve(input) {
    const counHeroes = Number(input[0])
    const actions = {
        CastSpell(heroes, hero, mpNeeded, spellName) {
            mpNeeded = Number(mpNeeded)
            if (heroes[hero].mp >= mpNeeded) {
                heroes[hero].mp -= mpNeeded
                return `${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`
            }
            return `${hero} does not have enough MP to cast ${spellName}!`
        },
        TakeDamage(heroes, hero, damage, attacker) {
            damage = Number(damage)
            heroes[hero].hp -= damage
            if (heroes[hero].hp <= 0) {
                heroes[hero].isAlive = false
                return `${hero} has been killed by ${attacker}!`
            }
            return `${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`

        },
        Recharge(heroes, hero, amount) {
            amount = Number(amount)
            const diff = 200 - heroes[hero].mp
            if (diff >= amount) {
                heroes[hero].mp += amount
                return `${hero} recharged for ${amount} MP!`
            }
            heroes[hero].mp += diff
            return `${hero} recharged for ${diff} MP!`
        },
        Heal(heroes, hero, amount) {
            amount = Number(amount)
            const oldValue = heroes[hero].hp
            heroes[hero].hp = Math.min(100, heroes[hero].hp + amount)
            return `${hero} healed for ${heroes[hero].hp - oldValue} HP!`
        }
    }

    const heroes = input.slice(1, counHeroes + 1).reduce((acc, curr) => {
        let [name, hp, mp] = curr.split(' ')
        if (!acc[name]) {
            acc[name] = {
                hp: 0,
                mp: 0,
                isAlive: true
            }
        }
        acc[name].hp += Number(hp)
        acc[name].mp += Number(mp)
        return acc
    }, {})

    const commands = input.slice(counHeroes + 1, input.indexOf('End'))
        .reduce((acc, curr) => {
            let [comm, ...rest] = curr.split(' - ')
            return console.log(actions[comm](heroes, ...rest));
        }, heroes)

    Object.keys(heroes)
        .filter(x => heroes[x].isAlive)
        .sort((a, b) => heroes[b].hp - heroes[a].hp || a.localeCompare(b))
        .forEach(hero => {
            console.log(`${hero}\n HP: ${heroes[hero].hp}\n MP: ${heroes[hero].mp}`);
        })
}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]
)
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])