let person = {
    name: 'Ana',
    age: 20
}
let clonedPerson = {...person};
clonedPerson.name = 'Mia'

// console.log(clonedPerson);

let numbers = [1,2,3]
let clonedNumbers = [...numbers] // = numbers.slice()
clonedNumbers.push(4);

function solve(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
// solve(...clonedNumbers)

function solveRest (...numbers){
    console.log(numbers);
}
// solveRest(9,8,7,6,5)

function solveDestr (num){
    let [firstNumber,secondNumber,...rest] = num
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(rest);
}
solveDestr([7,6,5,4])