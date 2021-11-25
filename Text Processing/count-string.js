function solve(str, word) {
    // const count = str.split(' ').reduce((acc, curr) => {
    //     if (curr === word) return acc + 1
    //     return acc
    // }, 0)
    //console.log(count);


    const result = str.split(' ')
        .filter(x => x == word)
        .length
    console.log(result);
}
solve("This is a word and it also is a sentence",
    "is"
)