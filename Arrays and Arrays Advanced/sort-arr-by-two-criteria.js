function sortByTwoCriteria(arr) {
    // 1st solution:
    //     arr.sort(twoCriteriaSort);
    //     arr.forEach(el => console.log(el));

    //     function twoCriteriaSort(cur, next) {
    //         if (cur.length === next.length) {
    //             return cur.localeCompare(next);
    //         }
    //         return cur.length - next.length;
    //     }
    // }

    //2nd solution:
    // arr.sort(customSort);
    // console.log(arr.join('\n'));

    // function customSort (a,b){
    //     if (a.length > b.length){
    //         return 1;
    //     }else if(a.length < b.length){
    //         return -1;
    //     }else{
    //         return a.localeCompare(b);
    //     }
    // }

    //3th solution:
    const result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(result.join('\n'));
}
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);