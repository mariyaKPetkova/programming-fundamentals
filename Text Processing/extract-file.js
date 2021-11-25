function solve(text) {
    let positionD = text.lastIndexOf('.');
    let positionC = text.lastIndexOf('\\');
    console.log(`File name: ${text.substring(positionC + 1, positionD)}`);
    console.log(`File extension: ${text.substring(positionD + 1, text.length)}`);
}
solve('C:\\Internal\\training-internal\\Template.bkkk.pptx')