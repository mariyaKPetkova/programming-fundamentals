function sumAndSubtract(x, y, z) {
    // 1st solution:
    // function sum(a, b) {
    //     return a + b;
    // }
    // return sum(x, y) - z;


    // 2nd solution:
    //return x+y-z
    //3rd solution:
    let sum = (a, b) => a + b;
    return sum(x, y) - z;
}
console.log(sumAndSubtract(23, 6, 10))