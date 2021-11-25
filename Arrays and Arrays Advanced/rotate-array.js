function rotateArray(arr) {
    let amountRotation = Number(arr.pop());
    let counter = 0;
    for (let i = 0; i < amountRotation; i++) {
        counter++;
        for (let j = arr.length - 1; j >= 0; j--) {
            let lastEl = arr[j];
            arr.pop();
            arr.unshift(lastEl)
            break;
        }
    }
    if (counter !== 0) {
        console.log(arr.join(' '));
    } else {
        console.log(`Empty`);
    }
}
rotateArray(['remove', 'remove', 'remove'])