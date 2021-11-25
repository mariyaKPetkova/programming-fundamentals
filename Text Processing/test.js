function solve(text) {
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