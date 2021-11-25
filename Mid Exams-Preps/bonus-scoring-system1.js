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

// 2nd solution (90/100):

// function solve(input){
//   const countStudents = Number(input[0]);
//   const countLectures = Number(input[1]);
//   const additionBonus = Number(input[2]);
//   const students = input.slice(3).map(Number)
//   const topStudent = Math.max(...students) 
//   const totalBonus = (topStudent / countLectures) * (5 + additionBonus)
//   console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
//   console.log(`The student has attended ${topStudent} lectures.`);
// }
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])