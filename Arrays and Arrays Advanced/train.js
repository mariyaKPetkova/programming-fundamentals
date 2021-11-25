function train(arr) {
    let wagons = arr.shift().split(' ').map(Number)
    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command.includes('Add')) {
            command = command.split(' ').splice(1).join(' ')
            wagons.push(command);
        } else {
            command = Number(command);
            wagons = wagons.map(Number)
            for (let j = 0; j < wagons.length; j++) {
                if ((wagons[j] + command) <= capacity) {
                    wagons[j] += command;
                    break;
                }
            }
        }
    }
    return wagons.join(' ');
}
console.log(train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']

));
// function solve(arr) {
//     let wagon = arr.shift().split(' ').map(Number);
//     let capacity = Number(arr.shift());
//     for(let i = 0; i < arr.length; i++){
//         let command = arr[i].split(' ');
//         if(command.includes('Add')){
//             wagon.push(Number(command[1]))
//         }else{
//             command = Number(command);
//             for(let j = 0; j < wagon.length; j++){
//                 if((command + wagon[j] ) <= capacity){
//                     wagon[j] += command;
//                     break;
//                 }
//             }
//         }

//     }
//     console.log(wagon.join(' '));
// }