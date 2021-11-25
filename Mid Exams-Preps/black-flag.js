function solve(arr) {
    let [days, dailyPlunder, target] = [Number(arr[0]), Number(arr[1]), Number(arr[2])]
    let total = 0
    for (let i = 1; i <= days; i++) {
        total += dailyPlunder
        if (i % 3 === 0) {
            total += dailyPlunder * 0.5
        }
        if (i % 5 === 0) {
            total -= total * 0.3
        }
    }
    if(total >= target){
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    }else{
        let pr = total/target*100
        console.log(`Collected only ${pr.toFixed(2)}% of the plunder.`);
    }
}
solve(['5', '40', '100'])
solve(['10', '20', '380'])