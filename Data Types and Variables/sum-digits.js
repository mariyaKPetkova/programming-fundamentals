function solve(n) {
    n = n.toString();
    let sum = 0
    for (let index = 0; index < n.length; index++) {
        sum += Number(n.charAt(index));
    }
    console.log(sum);
}
solve(245678)