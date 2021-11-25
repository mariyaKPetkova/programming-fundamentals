// function cats(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let [name,age] = arr[i].split(' ');
//         console.log(`${name}, age ${age} says Meow`);
//     }
// }
// cats(['Mellow 2', 'Tom 5']);
function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let c of arr) {
        let [name, age] = c.split(' ')
        let cat = new Cat(name, age);
        cat.meow()
    }
}
cats(['Mellow 2', 'Tom 5'])