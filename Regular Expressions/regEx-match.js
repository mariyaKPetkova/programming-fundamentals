
function so(){
    let text = `10-Mar-2020 30.12.2081 2.02.2031`
    let pattern = /\d{1,2}-(?<month>[a-zA-Z]{3})-\d{4}/g;
    let match = pattern.exec(text)
    while(match !== null){
        console.log(match);
        match = parent.exec(text)
    }
    so()

}