function solve(arr) {
    // let heroes = []
    // for (let heroInfo of arr) {
    //     let [name, level, items] = heroInfo.split(' / ')
    //     let currentHero = {}
    //     currentHero.name = name;
    //     currentHero.level = Number(level)
    //     currentHero.items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
    //     heroes.push(currentHero)
    // }

    // heroes
    //     .sort((a, b) => a.level - b.level)
    //     .forEach(hero => {
    //         console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    //     })

    //2nd solution:

    const result = arr.reduce((acc, curr) => {
        let obj = {};
        let [name, level, items] = curr.split(' / ')
        obj.name = name,
            obj.level = Number(level),
            obj.items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
        acc.push(obj)
        return acc
    }, []).sort((a, b) => a.level - b.level)
        .forEach(hero =>
            console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`))
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)