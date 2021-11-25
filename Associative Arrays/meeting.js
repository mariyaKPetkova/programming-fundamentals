function solve(arr) {
    let calendar = {}
    for (let line of arr) {
        let [day, name] = line.split(' ');
        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            calendar[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }
    // Object.keys(calendar).forEach(key => {
    //     console.log(`${key} -> ${calendar[key]}`)
    // });

    // for(let [day,name] of Object.entries(calendar)){
    //     console.log(`${day} -> ${name}`);
    // }

    for (let key in calendar) {
        console.log(`${key} -> ${calendar[key]}`)
    }
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)
