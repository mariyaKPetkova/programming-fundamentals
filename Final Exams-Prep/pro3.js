function solve(input) {
    let list = {}
    let listClients = {}
    let totalIncome = 0
    const actions = {
        Deliver(distributor, costIDelivered) {
            costIDelivered = Number(costIDelivered)
            if (!list[distributor]) {
                list[distributor] = {
                    money: costIDelivered
                }
            } else {
                list[distributor].money += costIDelivered
            }
        },
        Return(distributor, costIReturn) {
            costIReturn = Number(costIReturn)
            if (!list[distributor]) return list
            if (list[distributor].money < costIReturn) return list
            list[distributor].money -= costIReturn
            if (list[distributor].money <= 0) {
                delete list[distributor]
            }
        },
        Sell(client, moneySpend) {
            moneySpend = Number(moneySpend)
            totalIncome += moneySpend
            if(!listClients[client]) {
                listClients[client] = {
                    money: moneySpend
                }
            }else{
                listClients[client].money += moneySpend
            }
        }
    }
    const result = input.slice(0, input.indexOf('End'))
        .reduce((acc, curr) => {
            let [comm, ...params] = curr.split(' ')
            return actions[comm](...params)
        },0)
    Object.keys(listClients).sort((a,b) => a.localeCompare(b))
    .forEach(client => console.log(`${client}: ${(listClients[client].money).toFixed(2)}`))
    console.log(`-----------`);
    Object.keys(list).sort((a,b) => a.localeCompare(b))
    .forEach(dis => console.log(`${dis}: ${(list[dis].money).toFixed(2)}`))
    console.log(`-----------`);
    console.log(`Total Income: ${(totalIncome).toFixed(2)}`);
}
solve(['Deliver Micro 10000.00',
    'Sell Nick 500.00',
    'Sell Antony 260.50',
    'Deliver Micro 2000.50',
    'End']
)
solve(['Deliver North 200.30',
'Sell Peter 30.20',
'Return Macro 5000.00',
'Return North 100.30',
'Sell Peter 50.50',
'End'])
