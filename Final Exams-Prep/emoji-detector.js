function solve([input]) {
    // let coolThresholdValue = coolThreshold(input)

    // let allEmoji = [];
    // let countEmoji = 0;

    // let pattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g
    // let emojis = input.match(pattern)
    // emojis.forEach(emoji => {
    //     countEmoji++;
    //     if (coolThresholdEmoji(emoji.slice(2, -2))) {
    //         allEmoji.push(emoji)
    //     }
    // });
    // console.log(`Cool threshold: ${coolThresholdValue}`);
    // console.log(`${countEmoji} emojis found in the text. The cool ones are:\n${allEmoji.join('\n')}`);

    // function coolThresholdEmoji(str) {
    //     let value = 0;
    //     str.split('').forEach(char => {
    //         value += char.charCodeAt(0)
    //     });
    //     if (value >= coolThresholdValue) {
    //         return str
    //     }
    // }
    // function coolThreshold(str) {
    //     let pattern = /[0-9]/g
    //     let match = str.match(pattern).map(Number)
    //     let reducer = (a, b) => a *= b
    //     return match.reduce(reducer)

    //     //let coolThresholdRange = 1
    //     // match.forEach(num => {
    //     //     num = Number(num)
    //     //     coolThresholdRange *= num
    //     // })
    //     // //   return coolThresholdRange
    // }


    //2nd solution:

    const patternEmoji = /(::|\*\*)[A-Z][a-z]{2,}\1/g
    const patternThreshold = /[0-9]/g
    const matchThreshold = input.match(patternThreshold)
    const threshold = matchThreshold.map(Number)
        .reduce((acc, curr) => acc * curr)
    const matchEmoji = input.match(patternEmoji)
    const emojiCoolThreshold = matchEmoji.reduce((acc, curr) => {
        const thresholdEmoji = curr.slice(2, -2)
            .split('')
            .reduce((acc, curr) => {
                let value = curr.charCodeAt(0)
                return acc + value
            }, 0)
        if (thresholdEmoji >= threshold) {
            return [...acc, curr]
        }
        return acc
    }, []).join('\n')
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${matchEmoji.length} emojis found in the text. The cool ones are:\n${emojiCoolThreshold}`);
}
solve("It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.")
solve('5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::')
solve('In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**')