//1st solution (90/100)
// function solve([coutStudents, coutLectores, initialBonus, ...studensAttendences]) {
//     const result = studensAttendences.map(Number)
//         .reduce((acc, curr) => {
//             const totalBonus = Math.ceil(curr / Number(coutLectores) * (5 + Number(initialBonus)))
//             acc[totalBonus] = curr
//             return acc
//         }, {})
//     const topStudent = Object.keys(result).sort((a,b) => result[b]- result[a]).slice(0,1)
//     console.log(`Max Bonus: ${topStudent}.\nThe student has attended ${result[topStudent]} lectures.`);
// }

//2nd solution (100/100)
function solve(input) {
    const countStudents = Number(input[0]);
    const countLectures = Number(input[1]);
    const additionBonus = Number(input[2]);
    const students = input.slice(3).map(Number)
    let addition = 0
    let maxBonus = 0
    const result = students.reduce((output, curr) => {
        const totalBonus = (curr / countLectures) * (5 + additionBonus)
        if (maxBonus < totalBonus) {
            addition = curr
            maxBonus = totalBonus
        }
        return output
    }, 0)
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${addition} lectures.`);
}
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
)