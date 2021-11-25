function solve(arr) {
    // for(let line of arr){
    //     let [town, latitude, longitude] = line.split(' | ')
    //     let result = {
    //         town,
    //         latitude : Number(latitude).toFixed(2),
    //         longitude : Number(longitude).toFixed(2)
    //     }
    //     console.log(result);
    // }

    // arr.forEach(line => {
    //     const tokens = line.split(' | ')
    //     const town = {
    //         town: tokens[0],
    //         latitude: Number(tokens[1]).toFixed(2),
    //         longitude: Number(tokens[2]).toFixed(2)
    //     }
    //     console.log(town);
    // })


    // arr.forEach(element => {
    //     let [town, latitude, longitude] = element.split(' | ')
    //     let townInfo = {
    //         town: town,
    //         latitude: Number(latitude).toFixed(2),
    //         longitude: Number(longitude).toFixed(2)
    //     }
    //     console.log(townInfo);
    // });

    const result = arr.reduce((acc, curr) => {
        let [town, latitude, longitude] = curr.split(' | ')
        let townInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(townInfo);
        return acc
    },{})
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)