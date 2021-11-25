function solve(arr) {
    let people = Number(arr[0])
    const capacity = 4;
    let wagons = arr[1].split(' ').map(Number)
    for (let i = 0; i < wagons.length; i++) {
        let freeSpaces = capacity - wagons[i];
        if (people >= capacity) {
            people -= freeSpaces;
            wagons[i] += freeSpaces
        } else {
            wagons[i] += people
            people = 0
        }
    }
    let sumPeople = wagons.reduce((acc, curr) => acc + curr)
    let state = sumPeople / wagons.length
    if (people == 0 && state == capacity) {
        console.log(wagons.join(' '));
    }
    if (people == 0 && state != capacity) {
        console.log(`The lift has empty spots!\n${wagons.join(' ')}`)
    }
    if (people > 0 && state == capacity) {
        console.log(`There isn't enough space! ${people} people in a queue!\n${wagons.join(' ')}`);
    }
}
solve([
    "12",
    "0 0 0"
])
solve([
    "15",
    "0 0 0 0"
])
solve([
    "20",
    "0 2 0"
])

