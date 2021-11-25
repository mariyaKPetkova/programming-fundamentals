function solve(input) {
    const studentsPerHour = input.slice(0, 3).map(Number).reduce((acc, curr) => acc + curr)
    let totalStudents = Number(input.slice(-1))
    let time = 0;
    while (totalStudents > 0) {
        time++;
        if (time % 4 !== 0) {
            totalStudents -= studentsPerHour
        }

    }
    console.log(`Time needed: ${time}h.`);
}
solve(['5', '6', '4', '20'])
solve(['1', '2', '3', '45'])
solve(['3', '2', '5', '40'])