function jsonToObj(strJ) {
    let obj = JSON.parse(strJ)
    for (let k in obj){
        console.log(`${k}: ${obj[k]}`);
    } 
}
jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}')

function objToJson (name, lastName, hairColor){
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    let jsonF = JSON.stringify(obj)
    console.log(jsonF);
}
objToJson('George',
'Jones',
'Brown'
)