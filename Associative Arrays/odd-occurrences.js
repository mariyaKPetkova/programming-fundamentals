function solve(input) {
    let map = new Map()
    let words = input.split(' ').map(el => el.toLowerCase())
    words.forEach(word => {
        if (!map.has(word)) { //Object.keys(obj).includes(word)
            map.set(word, 0)
        }
        map.set(word, map.get(word) + 1)

        return map
    });
    return Array.from(map.keys())
    .filter(x => map.get(x) % 2 !==0)
    .join(' ')
}
console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));