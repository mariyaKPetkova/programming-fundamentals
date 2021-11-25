function solve(text,word){
    const pattern = '*'.repeat(word.length)
    // while(text.includes(word)){
    //     text = text.replace(word,pattern)
    // }
    while(text.indexOf(word) != -1){
        text = text.replace(word,pattern)
    }
    console.log(text);
}
solve("A small sentence with some small words", "small")