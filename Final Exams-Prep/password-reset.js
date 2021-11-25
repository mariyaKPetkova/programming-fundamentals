// function solve(input) {
//     let index = 0;
//     let tempPass = '';
//     let password = input[index++];
//     let comand = input[index++];
//     while (comand !== 'Done') {
//         let [command, first, second] = comand.split(' ');
//         switch (command) {
//             case 'TakeOdd':
//                 tempPass = '';
//                 for (let i = 1; i < password.length; i += 2) {
//                     tempPass += password[i]
//                 }
//                 console.log(tempPass);
//                 password = tempPass
//                 break;
//             case 'Cut':
//                 let index = Number(first);
//                 let length = Number(second);
//                 let element = password.substring(index, index + length);
//                 password = password.replace(element, '')
//                 console.log(password);
//                 break;
//             case 'Substitute':
//                 tempPass = password;
//                 if (password.includes(first)) {
//                     let position = tempPass.indexOf(first)
//                     while (tempPass.includes(first)) {
//                         tempPass = tempPass.replace(first, second)
//                         position + 1
//                     }
//                     console.log(tempPass);
//                 } else {
//                     console.log(`Nothing to replace!`);
//                 }
//                 password = tempPass
//                 break;
//         }
//         comand = input[index++];
//     }
//     console.log(`Your password is: ${password}`);
// }
// solve([
//     'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
//     'TakeOdd',
//     'Cut 15 3',
//     'Substitute :: -',
//     'Substitute | ^',
//     'Done'
// ])

//2nd solution 


function solve([password, ...rest]) {
    const actions = {
        TakeOdd(pass) {
            const newPass = pass.split('')
                .filter((el, i) => {
                    if (i % 2 != 0) {
                        return el
                    }
                }).join('');
            console.log(newPass);
            return newPass
        },
        Cut(pass, index, length) {
            [index, length] = [Number(index), Number(length)]
            const firstPart = pass.slice(0, index)
            const seconPart = pass.slice(index + length)
            console.log(firstPart + '' + seconPart);
            return firstPart + '' + seconPart
        },
        Substitute(pass, substring, substitute) {
            if (pass.includes(substring)) {
                const newPass = pass.split(substring)
                    .join(substitute)
                console.log(newPass);
                return newPass
            }
            console.log("Nothing to replace!");
            return pass
        }
    }
    const result = rest.slice(0, rest.indexOf('Done')).reduce((acc, curr) => {
        let [comm, ...params] = curr.split(' ')
        return actions[comm](acc, ...params)
    }, password)
    console.log(`Your password is: ${result}`);
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])
solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
])