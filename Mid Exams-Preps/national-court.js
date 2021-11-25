function solve(input) {
    let totalPeople = Number(input.slice(-1))
    const peoplePerHour = input.slice(0, 3).map(Number).reduce((a, b) => a + b)
    // let result = Math.ceil(totalPeople / peoplePerHour)
    // const breaks = Math.floor(result / 4)
    let hour = 0;
    while (totalPeople > 0) {
        hour++;
        if (hour % 4 !== 0) {
            totalPeople -= peoplePerHour
        }
    } 
    console.log(`Time needed: ${hour}h.`);
}
solve(['1', '2', '3', '45'])