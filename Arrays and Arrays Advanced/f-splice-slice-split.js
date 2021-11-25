// function sliceSplice(arr) {
    //     let newArr = arr.slice(3)
    //     return `${newArr.join(' ')} \n${arr.join(' ')}`
    // }

    // let newArr = arr.slice(3,5)
    //     return `${newArr.join(' ')} \n${arr.join(' ')}`
    // }

    // let newArr = arr.slice(1,-2)
    //     return `${newArr.join(' ')} \n${arr.join(' ')}`
    // }

    // let newArr = arr.slice(-2)
    //     return `${newArr.join(' ')} \n${arr.join(' ')}`
    // }

    //     arr.splice(3)
    //     return arr.join(' ')
    // }

    //     arr.splice(2,2)
    //     return arr.join(' ')
    // }

//     arr.splice(2,2,8,8,8,8)
//     return arr.join(' ')
// }

// arr.splice(2,0,8,8,8,8)
//     return arr.join(' ')
// }

// arr.splice(-2,1)
//     return arr.join(' ')
// 
// }

// console.log(sliceSplice([1, 2, 3, 4, 5, 6]));


function splitF (str){
//     str = str.split(',')
//     console.log(str.join('\n'));
// }

    str = str.split(',').reverse()
    console.log(str.join(' '));
}

splitF('Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec')