function solve(arr) {
    let obj = {}
    for (let line of arr) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity)
        if (obj.hasOwnProperty(product)) {
            obj[product] += quantity;
        } else {
            obj[product] = quantity;
        }
    }
    // Object.entries(obj).forEach(element => {
    //     console.log(`${element[0]} -> ${element[1]}`);
    // });
    Object.keys(obj).forEach(key => {
        console.log(`${key} -> ${obj[key]}`);
    });
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)