function solve(arr) {
    // class Person {
    //     constructor(name) {
    //         this.name = name,
    //             this.number = name.length
    //     }
    //     print() {
    //         return `Name: ${this.name} -- Personal Number: ${this.number}`
    //     }
    // }
    // arr = arr.map(x => new Person(x))
    //     .forEach(element => {
    //         console.log(element.print());
    //     });
    
    // let person = {};
    // arr.forEach(name => {
    //     person.name
    //     person[name] = name.length
    // });
    // Object.keys(person).forEach(key => {
    //     console.log(`Name: ${key} -- Personal Number: ${person[key]}`);
    // })

    const result = arr.reduce((acc,curr)=>{
        acc[curr] = curr.length
        return acc
    },{})
    
    Object.keys(result).forEach(person =>{
        console.log(`Name: ${person} -- Personal Number: ${result[person]}`);
    })
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])