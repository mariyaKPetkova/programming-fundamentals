function solve (distance,passengers,priceLiter){
    let fuel = (distance / 100) * 7;
    fuel += passengers * 0.100; 
    let sum = fuel * priceLiter;
    console.log(`Needed money for that trip is ${sum} lv`);

}
solve(260,9,2.49)