function muOnline(str){
    let health = 100;
    let bitcoins = 0;
    let isKilled = false
    let room = 0;
    const result = str.split('|').reduce((acc, curr) => {
            const comand = curr.split(' ');
            const command = comand[0]
            const amount = Number(comand[1])
            if (!isKilled) {
                room++;
                switch (command) {
                    case 'potion':
                        if ((amount + health) > 100) {
                            const diff = 100 - health
                            health = 100
                            console.log(`You healed for ${diff} hp.`);
                        } 
                        if ((amount + health) <= 100){
                            health += amount
                            console.log(`You healed for ${amount} hp.`);
                        }
                        console.log(`Current health: ${health} hp.`);
                        break;
                    case 'chest':
                        bitcoins += amount
                        console.log(`You found ${amount} bitcoins.`);
                        break;
                    default:
                        if ((health - amount) <= 0) {
                            health -= amount
                            console.log(`You died! Killed by ${command}.`);
                            console.log(`Best room: ${room}`);
                            isKilled = true;
                            break;
                        }
                        if ((health - amount) > 0) {
                            health -= amount;
                            console.log(`You slayed ${command}.`);
                        }
                        break;
                }
            }
            return acc
        }, [])
    if (!isKilled) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
}
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')