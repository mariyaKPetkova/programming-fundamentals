function addRemove(arr) {
    let newArr = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === 'add') {
            counter++;
            newArr.push(counter)
        }
        if (command === 'remove') {
            newArr.pop()
            counter++;
        }
    }
    if (newArr.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(newArr.join(' '));
    }
}
addRemove(['add', 'add', 'remove', 'add', 'add'])