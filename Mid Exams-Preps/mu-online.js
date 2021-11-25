function muOnline(str) {
    let health = 100;
    let bitcoins = 0;
    let isDied = false;
    let inputData = str.split('|');
    for (let i = 0; i < inputData.length; i++) {
        let currentRoom = inputData[i].split(' ')
        let command = currentRoom[0];
        let value = Number(currentRoom[1]);
        if (command === 'potion') {
            let difference = 100 - health;
            health += value;
            if (health > 100) {
                health = 100;
                console.log(`You healed for ${difference} hp.`);
            } else if (health < 100) {
                console.log(`You healed for ${value} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            }
            if (health <= 0) {
                isDied = true;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
            if (isDied) {
                break;
            }
        }
    }
    if (!isDied) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')