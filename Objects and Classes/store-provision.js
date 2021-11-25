function solve(stock, ordered) {
    // let shop = {}
    // for (let i = 0; i < stock.length; i += 2) {
    //     let element = stock[i];
    //     shop[element] = Number(stock[i + 1])
    // }
    // // stock.forEach(prod,i =>
    // //     if(i%2===0){
    // //         let element = stock[i];
    // //         let quantity = Number(stock[i+1])
    // //         shop[element] = quantity
    // //     })
    // for (let j = 0; j < ordered.length; j += 2) {
    //     let element = ordered[j];
    //     if (shop.hasOwnProperty(element)) {
    //         shop[element] += Number(ordered[j + 1])
    //     } else {
    //         shop[element] = Number(ordered[j + 1])
    //     }
    // }
    // // for (let product in shop) {
    // //     console.log(`${product} -> ${shop[product]}`);
    // // }

    // Object.keys(shop).forEach(key => {
    //     console.log(`${key} -> ${shop[key]}`);
    // })

    //2nd solution: 

    // let shop = {}
    // for (let i = 0; i < stock.length; i += 2) {
    //     let product = stock[i];
    //     let quantity = Number(stock[i + 1])
    //     shop[product] = quantity;
    // }
    // for (let j = 0; j < ordered.length; j += 2) {
    //     let product = ordered[j];
    //     let quantity = Number(ordered[j + 1]);
    //     if (shop.hasOwnProperty(product)) {
    //         shop[product] += quantity;
    //     }else{
    //         shop[product] = quantity
    //     } 
    // }
    // Object.keys(shop).forEach(key => {
    //     console.log(`${key} ${shop[key]}`);
    // })

    //3th solution:

    const allProducts = [...stock, ...ordered]
    const result = allProducts.reduce((acc, curr, i) => {
        if (i % 2 === 0) {
            const product = curr;
            const quantity = Number(allProducts[i + 1])
            if (!acc[product]) {
                acc[product] = 0
            }
            acc[product] += quantity
        }
        return acc
    }, {})
    Object.keys(result)
        .forEach(key => console.log(`${key} -> ${result[key]}`))
}
solve(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
)