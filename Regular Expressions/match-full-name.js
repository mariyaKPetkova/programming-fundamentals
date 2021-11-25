function solve(text) { 
    // let pattern = /\b([A-Z][a-z]+)[ ]([A-Z][a-z]+)\b/g
    // let validNAmes = [];
    // let match = pattern.exec(text)
    // while (match != null) {
    //     validNAmes.push(match[0])
    //     match = pattern.exec(text)
    // }
    // console.log(validNAmes.join(' '));

    let pattern = /\b([A-Z][a-z]+)[ ]([A-Z][a-z]+)\b/g
    let [desText] = text    //judge!
    let match = desText.match(pattern)
    console.log(match.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")