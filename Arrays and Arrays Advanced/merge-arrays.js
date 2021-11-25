function mergeArrays(firstArr, secondArr) {
    // let newArr = [];   
    // for (let i = 0; i < firstArr.length; i++) {
    //     let sum = 0;
    //     let conc = "";
    //     if( i % 2 === 0){
    //         sum = +firstArr[i] + +secondArr[i];
    //         newArr.push(sum);
    //     }else{
    //         conc = firstArr[i] + secondArr[i];
    //         newArr.push(conc)
    //     }       
    // }
    // console.log(newArr.join(' - '));

    const result = firstArr.reduce((output, curr) => {
        const arrInd = firstArr.indexOf(curr)
        arrInd % 2 == 0 ?
            output.push(Number(secondArr[arrInd]) + Number(curr))
            : output.push(curr + secondArr[arrInd])
        return output
    }, [])
    console.log(result.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35', '10'],
    ['17', '22', '87', '36', '11', '10']
)
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])