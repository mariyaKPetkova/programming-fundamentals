function printCetificate (grade, nameesArr){
    if (pass (grade)){
        printHeader();
        console.log(getName(nameesArr));;
        printGrade(grade)
    }else{
        console.log(`${getName(nameesArr)} does not pass exam`);
    }
        function pass()
        function printHeader (){
            console.log(`-------------`);
            console.log(`-certificate-`);
            console.log(`-------------`);
        }
        function getName (nameesArr){
            return nameesArr[0] + ' ' + nameesArr[1];
        }
        function printGrade (num){
            let printGrade = '';
    
            if (num < 3.5) {
                printGrade = 'Poor';
            } else if (num < 4.5) {
                printGrade = 'Good';
            } else if (num < 5.5) {
                printGrade = 'Very good';
            } else {
                printGrade = 'Excellent';
            }
            console.log(`${printGrade} (${num.toFixed(2)})`);
        }
}
printCetificate(3.99,['John','Smith'])