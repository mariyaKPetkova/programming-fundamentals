function login(input) {
    let index = 0;
    let user = input[index];
    index++;

    let corrPass = "";
    let counter = 0;

    for(let i = user.length - 1; i >= 0; i--){
        corrPass += user[i];
    }
    //let corrPass = user.split('').reverse().join('')

    let passTry = input[index]
    index++;

    while(passTry !== corrPass){
        counter++;
        if(counter === 4 )return console.log(`User ${user} blocked!`);

        console.log(`Incorrect password. Try again.`);
        
        passTry = input[index];
        index++;
    }
    console.log(`User ${user} logged in.`);
}
login(['sunny','rainy','cloudy','sunny','not sunny'])