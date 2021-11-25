function solve (char){
    let toUpperChar = char.toUpperCase(); // l -> L

    if(toUpperChar === char){
        console.log(`upper-case`);
    }else{
        console.log(`lower-case`);
    }
}
solve('l')