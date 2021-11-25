function solve(text) {
    // let indexes = []
    // let charachters = text.split('')
    // for (let index in charachters) {
    //     let char = charachters[index]
    //     if (isUper(char)) {
    //         indexes.push(index)
    //     }
    // }
    // let word = [];
    // for (let i = 0; i < indexes.length; i++) {
    //     word.push(text.substring(indexes[i], indexes[i + 1]))
    // }
    // console.log(word.join(', '));
    // function isUper(char) {
    //     let value = char.charCodeAt(0)
    //     if (value >= 65 && value <= 90) return char
    // }

    //2nd solution:
    const indeces = text.split('').reduce((acc, curr, i) => {
        if (curr.charCodeAt(0) >= 65 && curr.charCodeAt(0) <= 90) {
            return [...acc, i]
        }
        return acc
    }, [])
    const result = indeces.reduce((acc, curr, i) => {
        let word = '';
            let start = curr
            let end  = indeces[i+1]
            word = text.slice(start,end)
            return [...acc,word]
    }, []).join(', ')
    console.log(result);
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')