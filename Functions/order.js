function order(product, count) {

    const orders = {
        caffee: (count, price) => count * 1.5,
        water: (count, price) => count * 1,
        coke: (count, price) => count * 1.4,
        snacks: (count, price) => count * 2
    };
    
    console.log((orders[product](count).toFixed(2)));
}
order('caffee', 2) 
