function solve(obj) {
    function getEngine(power) {
        const engine = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power);
        return engine.find(el => el.power >= power)
    }
    function getCarrige(carriage, color) {
        return {
            type: carriage,
            color
        }
    }
    function getWheels(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize)
        return [wheel, wheel, wheel, wheel]
    }

    return {
        model: obj.model,
        engine: getEngine(obj.power),
        carriage: getCarrige(obj.carriage, obj.color),
        wheelsize: getWheels(obj.wheelsize)
    }
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));