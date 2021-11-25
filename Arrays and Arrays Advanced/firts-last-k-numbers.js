function firstLastNumbers(arr){
    let el = arr.shift()
    let st = arr.slice(0,el);
    let end = arr.slice(-el);
    console.log(st.join(' '));
    console.log(end.join(' '));
    
}
firstLastNumbers([2,3,4,5]);