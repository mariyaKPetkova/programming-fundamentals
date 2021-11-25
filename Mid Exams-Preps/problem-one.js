function solve(input) {
    let neededExperience = Number(input[0])
    let countB = Number(input[1])
    let battles = input.slice(2).map(Number)
    let sumExperience = 0;
    let isEnougth = false;
    let count = 0
    for (let i = 0; i < battles.length; i++) {
        if (neededExperience <= sumExperience) {
            isEnougth = true;
            break;
        }
        count++;
        let sumPro = 0;
        if (count % 3 === 0) {
            sumPro = battles[i] * 1.15
            sumExperience += sumPro
        } else if (count % 5 === 0) {
            sumPro = battles[i] * 0.9
            sumExperience += sumPro
        } else if (count % 15 === 0) {
            sumPro = battles[i] * 1.05
            sumExperience += sumPro
        } else {
            sumExperience += battles[i]
        }
    }
    if (neededExperience <= sumExperience) {
        isEnougth = true;
    }
    if (isEnougth) {
        console.log(`Player successfully collected his needed experience for ${count} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - sumExperience).toFixed(2)} more needed.`);
    }
}
solve([400,
    5,
    50,
    100,
    200,
    100,
    20])

