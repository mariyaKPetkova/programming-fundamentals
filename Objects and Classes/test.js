function solve(stock, ordered) {
    const allProducts = [...stock, ...ordered]
    const result = allProducts.reduce((acc, curr, i) => {
        if(i % 2 === 0){
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