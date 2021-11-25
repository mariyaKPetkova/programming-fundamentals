function solve([email, ...rest]) {
    const result = rest.slice(0, rest.indexOf("Complete"))
        .reduce((acc, curr) => {
            let [comm, other] = curr.split(' ');
            const actions = {
                "Make":()=>{
                    let newEmail = '';
                    if(other === "Upper"){
                        newEmail = acc.toUpperCase()
                    }
                    if(other === "Lower"){
                        newEmail = acc.toLowerCase()
                    }
                    console.log(newEmail);
                    return newEmail
                },
                "GetDomain":()=>{
                    other = Number(other)
                    console.log(acc.slice(-other));
                    return acc
                },
                "GetUsername":()=>{
                    if(acc.includes("@")){
                        const position = acc.indexOf("@")
                        console.log(acc.slice(0,position));
                    }else{
                        console.log(`The email ${acc} doesn't contain the @ symbol.`);
                    }
                    return acc
                },
                "Replace":()=>{
                    const newEmail = acc.split(other).join('-')
                    console.log(newEmail);
                    return newEmail
                },
                "Encrypt":()=>{
                    const result = acc.split('').reduce((acc,curr) => {
                        const value = curr.charCodeAt()
                        return [...acc, value]
                    },[]).join(' ')
                    console.log(result);
                    return acc
                }
            }
            const commandFn = actions[comm];
            return commandFn ? commandFn() : acc;
        }, email)
}
solve(["Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"])
// solve(["AnotherMail.com",
// "Make Lower", 
// "GetUsername", 
// "Replace a", 
// "Complete"]) 