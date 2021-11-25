function solve(input) {
  let countStudent = Number(input.shift());
  let countLectures = Number(input.shift());
  let additionalBonus = Number(input.shift());
  let maxBonus = 0;
  let addition = 0;
  for (let i = 0; i < input.length; i++) {
    let studentAttendances = Number(input[i])
    let totalBonus = studentAttendances / countLectures * (5 + additionalBonus)
    if (maxBonus < totalBonus) {
      maxBonus = totalBonus;
      addition = studentAttendances
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${addition} lectures.`);
}
solve([
  '5', '25', '30',
  '12', '19', '24',
  '16', '20'
])