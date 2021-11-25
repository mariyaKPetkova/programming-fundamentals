function solve(str) {
    let firstPart = str.substring(0, 0 + str.length / 2);
    let secondPart = str.substring(str.length / 2, str.length / 2 + str.length)
    console.log(firstPart.split('').reverse().join(''));
    console.log(secondPart.split('').reverse().join(''));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')