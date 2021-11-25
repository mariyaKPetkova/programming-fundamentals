function solve([number, ...input]) {
    const pattern = /(U\$)(?<userName>[A-Z][a-z]{2,})\1(P@\$)(?<pass>[A-Za-z]{5,}[0-9]+)\3/
    const result = input.reduce((acc, curr) => {
        const result = pattern.exec(curr)
        if (result != null) {
            console.log(`Registration was successful`);
            console.log(`Username: ${result.groups['userName']}, Password: ${result.groups['pass']}`);
            return acc = +1
        } else {
            console.log(`Invalid username or password`);
            return acc
        }
    }, 0)
    console.log(`Successful registrations: ${result}`);
}
solve([
    "3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$",
    "U$MichaelU$P@$asdqwe13P@$",
])
// solve([
//     "2",
//     "U$TommyU$P@$asdqwe123P@$",
//     "Sara 1232412"
// ])