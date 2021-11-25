function solve(arr) {
    let book = {};
    for (let line of arr) {
        let [name, adress] = line.split(':');
        book[name] = adress
    }
    let sorted = Object.entries(book);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    // for (let [name, adress] of sorted) {
    //     console.log(`${name} -> ${adress}`);
    // }
    for (let line of sorted) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)