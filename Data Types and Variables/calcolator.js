function calcolator(a, b, op) {
    let operation = null;
    switch (op) {
        case "+":
            operation = (a, b) => a + b;
            break;
        case "-":
            operation = (a, b) => a - b;
            break;
        case "*":
            operation = (a, b) => a * b;
            break;
        case "/":
            operation = (a, b) => a / b;
            break;

    }
    let result = operation(a,b);
    return result;
}

console.log(calcolator(2,4,"*"));