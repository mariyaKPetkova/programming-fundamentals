function solve(input) {
    let actions = {
        TakeOdd() {
            passWord = passWord
                .split('')
                .filter((value, index) => (index % 2))
                .join('')
            console.log(passWord);
            return passWord
        },
        Cut(index, length) {
            [index, length] = [Number(index), Number(length)]
            let element = passWord.substring(index, index + length)
            passWord = passWord.replace(element, '')
            console.log(passWord);
            return passWord
        },
        Substitute(substring, substitute) {
            if (passWord.includes(substring)) {
                let position = passWord.indexOf(substring)
                while (passWord.includes(substring)) {
                    passWord = passWord.replace(substring, substitute)
                    position + 1
                }
                console.log(passWord);
            } else {
                console.log(`Nothing to replace!`);
            }
            return passWord
        }
    }
    let passWord = input[0]
    input.slice(1, input.indexOf('Done')).forEach(line => {
        let [action, ...params] = line.split(' ')
        actions[action](...params)
    });
    console.log(`Your password is: ${passWord}`);
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])