function dayOfWeek(num) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num >= 1 && num <= 7) {
        console.log(week[num - 1]);
    } else {
        console.log(`Invalid day!`);
    }
}
dayOfWeek(1)