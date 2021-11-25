function carWash(arr) {
    let valueClean = 0;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        valueClean = addNum(command);
        valueClean = addPro(command);
        function addNum(command) {
            switch (command) {
                case "soap":
                    valueClean += 10
                    break;
            }
            return valueClean;
        }
        function addPro(command) {
            switch (command) {
                case "water":
                    valueClean *= 1.2;
                    break;
                case "vacuum cleaner":
                    valueClean *= 1.25;
                    break;
                case "mud":
                    valueClean *= 0.9;
                    break;
            }
            return valueClean
        }
    }
    return `The car is ${valueClean.toFixed(2)}% clean.`;
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));