function solve(countFail,helmet,sword,shield,armor){
    let sum = 0;
    countShield = 0;
for(let fight = 1; fight <= countFail;fight++){
    if (fight % 2 === 0){
        sum += helmet;
    }
    if (fight % 3 === 0){
        sum += sword;
    }
    if (fight % 2 === 0 && fight % 3 === 0){
        sum += shield;
        countShield++;
        if (countShield % 2 === 0){
            sum += armor;
        }
    }
}
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
solve(
    23,
    12.5,
    21.5,
    40,
    200
)