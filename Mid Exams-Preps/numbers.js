function numbers(str) {
    // let numbers = str.split(' ').map(Number);
    // let sum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i];
    // }
    // let averageValue = sum / numbers.length
    // numbers = numbers.filter(x => x > averageValue);
    // numbers = numbers.sort((a, b) => b - a);

    // if (numbers.length <= 0) {
    //     console.log('No');
    // } else if (numbers.length < 5) {
    //     console.log(numbers.join(' '));
    // } else {
    //     numbers.length = 5;
    //     console.log(numbers.join(' '));
    // }
    const numbers = str.split(' ').map(Number);
    const sumNumbers = numbers.reduce((acc, curr) => { return acc += curr }, 0)
    const averageValue = sumNumbers / numbers.length
    const greaterNumbers = numbers.filter(x => x > averageValue)
    const sortedNumbers = greaterNumbers.sort((a, b) => b - a)
    sortedNumbers.length > 0
        ? console.log(sortedNumbers.slice(0, 5).join(' '))
        : console.log('No');
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
