function grade(num) {

    let printGrade = '';
    let isFail = false;

    if (num < 3) {
        isFail = true;
    } else if (num < 3.5) {
        printGrade = 'Poor';
    } else if (num < 4.5) {
        printGrade = 'Good';
    } else if (num < 5.5) {
        printGrade = 'Very good';
    } else {
        printGrade = 'Excellent';
    }

    if (isFail) {
        console.log(`Fail (2)`);
    } else {
        console.log(`${printGrade} (${num.toFixed(2)})`);
    }
}
grade(6)