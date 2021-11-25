function arrayManipulations(arr) {
    let array = arr.shift().split(' ').map(Number)
    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = arr[i].split(' ')
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                array.push(firstNum)
                break;
            case 'Remove':
                if (array.includes(firstNum)) {
                    let ind = array.indexOf(firstNum);
                    array.splice(ind, 1)
                }
                break;
            case 'RemoveAt':
                array.splice(firstNum, 1)
                break;
            case 'Insert':
                array.splice(secondNum, 0, firstNum)
                break;
        }
    }
    console.log(array.join(' '));
}
arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])