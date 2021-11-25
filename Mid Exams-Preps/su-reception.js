function solve(arr) {
    let [eff1, eff2, eff3, countStudents] = arr.map(Number)
    let eff = eff1 + eff2 + eff3
    let time = 0;
    while (countStudents > 0) {
        time++;
        if (time % 4 != 0) {
            countStudents -= eff
        }

    }
    console.log(`Time needed: ${time}h.`);
}
solve(['3', '2', '5', '40'])