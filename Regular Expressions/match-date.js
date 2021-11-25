function solve(text) {
    // const pattern = /(?<day>[0-9]{2})([\/\.\-])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>[0-9]{4})/g
    // let result = pattern.exec(text)
    // while(result !== null){
    //     console.log(`Day: ${result.groups['day']}, Month: ${result.groups['month']}, Year: ${result.groups['year']}`);
    //     result = pattern.exec(text)
    // }
    let pattern = /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDate = [];
    while ( (validDate = pattern.exec(text)) != null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")