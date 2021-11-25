function distinct(arr) {
    //1st solution:
    // let arrElements = getElement(arr)
    // console.log(arrElements.join(' '))
    // function getElement(collection) {
    //     let newArr = [];
    //     for (let element of collection) {
    //         if (!newArr.includes(element)) {
    //             newArr.push(element)
    //         }
    //     }
    //     return newArr
    // }

    //2nd solution:
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!newArr.includes(arr[i])) {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr.join(' ')

    //3th solution:

    return arr.reduce((acc, curr) => {
        return !acc.includes(curr) ? [...acc, curr] : acc
    }, []).join(' ')
}
console.log(distinct([20,
    8,
    12,
    13,
    4,
    5,
    8]))