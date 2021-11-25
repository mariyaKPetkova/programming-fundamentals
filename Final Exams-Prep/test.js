function solve() {
    const obj = {
        Blake: { sent: 10, received: '3' },
        Clark: { sent: '4', received: '0' },
        Mark: { sent: '3', received: '9' },
        Michael: { sent: 4, received: '9' },
    }
    const sorted = Object.keys(obj)
    .sort((a, b) => sentReceived(a) - sentReceived(b) || b.localeCompare(a))
    .forEach(person=>{
        console.log(`${person} - ${sentReceived(person)}`);
    })
    function sentReceived(person) {
        const sum = Number(obj[person].sent) + Number(obj[person].received)
        return sum
    }

}
solve()