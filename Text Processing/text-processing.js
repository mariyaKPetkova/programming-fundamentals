function solve(word, text) {
    text = text.toLowerCase()
    // while( index != -1){
    //     console.log(index);
    //     index = text.indexOf(word,index+1)
    // }
    let firInd = text.indexOf(word)
    let secInd = text.slice(firInd + 1).indexOf(word)
    let thiInd = text.lastIndexOf(word)
    console.log(text.substring(firInd, secInd + 1));

    text = text.replace('script', 'SCRIPT')
    if(text.indexOf('script')>-1){
        text = text.replace('script','SCRIPT')
    }
    console.log(text);
    
    if(text.startsWith(word)){
        console.log(`Starts with ${word}`);
    }else{
        console.log(`Doesn't start with ${word}`);
    }
    if(text.endsWith('java')){
        console.log(`Ends with java`);
    }
    
}
solve('java', 'javascriptjavascriptJava')


function sol(text,index,count){
    console.log(text.substring(index,index+count));
}
sol("ASentance", 1, 8)

function solv(text, word) {
    // text.split(' ').forEach(element => {
    //     if (element === word) {
    //         text = text.replace(word, '*'.repeat(word.length))
    //     }
    // });
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length))
    }
    console.log(text);
}
solv("A small sentence with some words small", "small")