function calc(a, b, op) {
    //1st solution:
    // let multiply = (x, y) => x * y;
    // let divide = (x, y) => x / y;
    // let add = (x, y) => x + y;
    // let subtract = (x, y) => x - y;

    // switch(op){
    //     case 'multiply':
    //         console.log(multiply(a,b));
    //     break;
    //     case 'divide':
    //         console.log(divide(a,b));
    //     break;
    //     case 'add':
    //         console.log(add(a,b));
    //     break;
    //     case 'subtract':
    //         console.log(subtract(a,b));
    //     break;
    // }

    //2nd solution:

    const operator = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y
    };
    console.log(operator[op](a, b));
}
calc(5, 5, 'multiply')