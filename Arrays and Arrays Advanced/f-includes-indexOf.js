function includesIndexOf(arr) {
    //arr.includes(2) ? console.log(`yes`) : console.log(`no`)
    //[1, 2, 3].includes(3, 3)   // false
    //[1, 2, 3].includes(3, -1)  // true
    //console.log(arr.indexOf(2));

    // let text = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    // let searchTerm = 'dog';
    // let indexOfFirst = text.indexOf(searchTerm);
    //   //found the first one (searchTerm('dog')) and break
    // console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
    //   //found the second one:
    // let indexOfSecond = text.indexOf(searchTerm, (indexOfFirst + 1));
    // console.log(`The index of the 2nd "${searchTerm}" is ${indexOfSecond}`);

let text = 'To be, or not to be, that is the question.'
let count = 0
let position = text.indexOf('e')

while (position !== -1) {
  count++
  position = text.indexOf('e', position + 1)
}

console.log(count)
}
includesIndexOf([1, 2, 3])