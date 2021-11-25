// function solve(input) {
//     let carsCount = Number(input[0]);
//     let cars = {}
//     input.slice(1, carsCount + 1).forEach(carInfo => {
//         let [carName, mileage, fuel] = carInfo.split('|')
//         mileage = Number(mileage)
//         fuel = Number(fuel)
//         cars[carName] = { mileage, fuel }
//     });
//     let stopIndex = input.indexOf('Stop')
//     input.slice(carsCount + 1, stopIndex).forEach(dataInput => {
//         let [command, carName, firstArg, secondArg] = dataInput.split(' : ')
//         switch (command) {
//             case 'Drive':
//                 let distance = Number(firstArg)
//                 let fuelC = Number(secondArg)
//                 if (cars[carName].fuel < fuelC) {
//                     console.log("Not enough fuel to make that ride");
//                 } else {
//                     cars[carName].mileage += distance
//                     cars[carName].fuel -= fuelC
//                     console.log(`${carName} driven for ${distance} kilometers. ${fuelC} liters of fuel consumed.`);
//                 }
//                 if (cars[carName].mileage >= 100000) {
//                     delete cars[carName]
//                     console.log(`Time to sell the ${carName}!`);
//                 }
//                 break;
//             case 'Refuel':
//                 let fuelCar = Number(firstArg)
//                 let diff = 0
//                 // let refuelCar = Math.min(maxFuel, cars[carName].fuel + fuel)
//                 if (cars[carName].fuel + fuelCar >= 75) {
//                     cars[carName].fuel = 75;
//                 } else {
//                     diff = fuelCar;
//                     cars[carName].fuel += fuelCar
//                 }
//                 console.log(`${carName} refueled with ${diff} liters`);
//                 break;
//             case 'Revert':
//                 let kilometers = Number(firstArg)
//                 if (cars[carName].mileage - kilometers <= 10000) {
//                     cars[carName].mileage = 10000
//                 } else {
//                     cars[carName].mileage -= kilometers
//                     console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
//                 }
//                 break;
//         }
//         return cars
//     });
//     // Object.keys(cars).sort((a,b) => cars[b].mileage - cars[a].mileage || a.localeCompare(b))
//     let carsEntries = Object.entries(cars)
//     carsEntries.sort((a, b) => {
//         if (b[1].mileage == a[1].mileage) {
//             return a[0].localeCompare(b[0])
//         } else {
//             return b[1].mileage - a[1].mileage
//         }
//     })
//     carsEntries.forEach(car => {
//         console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
//     })
// }

//2nd solution:

function solve(input) {
    const actions = {
        Drive(cars, car, distance, fuel) {
            [distance, fuel] = [Number(distance), Number(fuel)]
            if (cars[car].fuel < fuel) return console.log("Not enough fuel to make that ride");
            
            cars[car].fuel -= fuel
            cars[car].mileage += distance
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if (cars[car].mileage >= 100000) {
                cars[car].isRemoved = true
                console.log(`Time to sell the ${car}!`);
            }
        },
        Refuel(cars, car, fuel) {
            fuel = Number(fuel)
            const diff = 75 - cars[car].fuel
            if (diff > fuel) {
                cars[car].fuel += fuel
                return console.log(`${car} refueled with ${fuel} liters`);
            }
            cars[car].fuel += diff
            console.log(`${car} refueled with ${diff} liters`);
        },
        Revert(cars, car, kilometers) {
            cars[car].mileage -= kilometers
            if (cars[car].mileage < 10000) return cars[car].mileage = 10000
            return console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        },
    }
    const countCars = Number(input[0]);
    const carsInfo = input.slice(1, countCars + 1)
        .reduce((acc, curr) => {
            let [name, mileage, fuel] = curr.split('|')
            acc[name] = {
                mileage: Number(mileage),
                fuel: Number(fuel),
                isRemoved: false
            }
            return acc
        }, {})

    const commands = input.slice(countCars + 1, input.indexOf('Stop'))
        .reduce((acc, curr) => {
            let [comm, ...rest] = curr.split(' : ')
            return actions[comm](carsInfo, ...rest)
        }, carsInfo)

    Object.keys(carsInfo)
        .filter(x => carsInfo[x].isRemoved == false)
        .sort((a, b) => carsInfo[b].mileage - carsInfo[a].mileage || a.localeCompare(b))
        .forEach(car => console.log(`${car} -> Mileage: ${carsInfo[car].mileage} kms, Fuel in the tank: ${carsInfo[car].fuel} lt.`))
}
// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ])
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
