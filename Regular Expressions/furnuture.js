function solve(text) {
    // let bouthtFurniture = [];
    // let totalPrice = 0;

    // text.forEach(element => {
    //     let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g
    //     let match = pattern.exec(element)
    //     if(match){
    //         bouthtFurniture.push(match.groups.name)
    //         totalPrice += (Number(match.groups.price)*Number(match.groups.quantity));
    //     }
    // });
    // console.log(`Bought furniture:`);
    //     if(bouthtFurniture.length>0){
    //         console.log(`${bouthtFurniture.join('\n')}`);
    //     }
    //     console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

    //2nd solution:
    let totalSum = 0;
    const result = text.slice(0, text.indexOf('Purchase'))
        .reduce((acc, curr) => {
            const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g
            const match = pattern.exec(curr)
            if (match) {
                totalSum += Number(match.groups['price']) * Number(match.groups['quantity'])
                return [...acc, match.groups['name']]
            }
            return acc
        }, [])
    console.log(`Bought furniture:`);
    if (result.length > 0) {
        console.log(`${result.join('\n')}`);
    }
    console.log(`Total money spend: ${(totalSum).toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])