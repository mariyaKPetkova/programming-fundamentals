function solve(arr) {
    let phoneBook = {};
    for (let line of arr) {
        let [name, phone] = line.split(' ');
        phoneBook[name] = phone;
    }
    // for (let key in phoneBook) {
    //     console.log(`${key} -> ${phoneBook[key]}`);
    // }

    Object.keys(phoneBook).forEach(key => {
        console.log(`${key} -> ${phoneBook[key]}`);
    })

    // for (let [key,value] of Object.entries(phoneBook)) {
    //     console.log(`${key} -> ${value}`);
    // }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)