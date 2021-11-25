function solve(input) {
    const days = Number(input[0])
    let budget = Number(input[1])
    const countPeople = Number(input[2])
    const priceFuelKm = Number(input[3])
    const foodPerson = Number(input[4])
    const hotelNight = Number(input[5])
    const rest = input.slice(6).map(Number)
    let isNoMoreMoney = false;
    let totalFoodPrice = foodPerson * days * countPeople
    let totalHotelPrice = hotelNight * days * countPeople
    if (countPeople > 10) {
        totalHotelPrice = totalHotelPrice * 0.75
    }
    let countDaysTravel = 0;
    let totalExpenses = totalHotelPrice + totalFoodPrice
    for (let i = 0; i < rest.length; i++) {
        countDaysTravel++
        let amount = 0
        totalExpenses += (rest[i] * priceFuelKm)
        if (countDaysTravel % 3 === 0) {
            totalExpenses += totalExpenses * 0.4
        } else if (countDaysTravel % 5 === 0) {
            totalExpenses += totalExpenses * 0.4
        } else if (countDaysTravel % 7 === 0) {
            amount = totalExpenses / countPeople
            totalExpenses -= amount
        }
        if (totalExpenses > budget) {
            isNoMoreMoney = true;
            break;
        }
    }
    if (isNoMoreMoney) {
        console.log(`Not enough money to continue the trip. You need ${(totalExpenses - budget).toFixed(2)}$ more.`);
    } 
    if (!isNoMoreMoney) {
        console.log(`You have reached the destination. You have ${(budget - totalExpenses).toFixed(2)}$ budget left.`);
    }
}
solve(["7",
    "12000",
    "5",
    "1.5",
    "10",
    "20",
    "512",
    "318",
    "202",
    "154",
    "222",
    "108",
    "123"])

solve(["10",
    "20500",
    "11",
    "1.2",
    "8",
    "13",
    "100",
    "150",
    "500",
    "400",
    "600",
    "130",
    "300",
    "350",
    "200",
    "300"])
