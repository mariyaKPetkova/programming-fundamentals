function solve(arr) {
    let students = {}
    for (let student of arr) {
        let [name, ...grade] = student.split(' ');
        grade.map(Number);

        if (students.hasOwnProperty(name)) {
            let oldGrade = students[name]
            let newGrade = grade;
            let grades = oldGrade.concat(newGrade);
            students[name] = grades;

        } else {
            students[name] = grade;
        }
    }
    let studentEntries = Object.entries(students);
    let sortedGrade = studentEntries.sort((a, b) => {
        let averageGradeA = getAverageGrade(a[1]);
        let averageGradeB = getAverageGrade(b[1]);
        return averageGradeA - averageGradeB
    })

    function getAverageGrade(grade) {
        let averageGrade = grade.reduce((acc, a) => acc += a);
        return averageGrade / grade.length
    }
    for (const kvp of sortedGrade) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])