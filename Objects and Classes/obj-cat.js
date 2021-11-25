let cat = {
    name: 'Joe',
    age: 3,
    makeSound() {
        console.log(`Meow`);
    },
    breed: 'Persian'
}
cat.run = function(){
    console.log(`fast`);
}
let catKeys = Object.keys(cat);
let catValues = Object.values(cat);
let catEntries = Object.entries(cat);

// for(let element in cat){
//     console.log(`${element} => ${cat[element]}`);
// }
cat.makeSound()