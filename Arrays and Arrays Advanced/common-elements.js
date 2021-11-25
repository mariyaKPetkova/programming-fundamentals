function commonElements(firstArr, secondArr) {
    // for(let i = 0; i < firstArr.length; i++){
    //     let elementF = firstArr[i];
    //     for(let j = 0; j < secondArr.length; j++){
    //         let elementS = secondArr[j];
    //         if (elementF === elementS){
    //             console.log(elementF);
    //         }
    //     }
    // }
    const result = firstArr.reduce((acc, curr) => {
            if(secondArr.includes(curr)){
                acc.push(curr)
            }
        return acc
    }, []);
    console.log(result.join('\n'));
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)