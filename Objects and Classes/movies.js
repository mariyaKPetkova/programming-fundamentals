function solve(arr) {
    // let movies = [];
    // for (let line of arr) {
    //     if (line.includes('addMovie')) {
    //         let currentMovie = {}
    //         let name = line.substring(9);
    //         currentMovie.name = name;
    //         movies.push(currentMovie);
    //     } else if (line.includes('directedBy')) {
    //         let [name, director] = line.split(' directedBy ');
    //         let myMovie = movies.find(x => x.name == name);
    //         if (myMovie) {
    //             myMovie.director = director;
    //         }
    //     } else {
    //         let [name, date] = line.split(' onDate ');
    //         let myMovie = movies.find(x => x.name == name);
    //         if (myMovie) {
    //             myMovie.date = date
    //         }
    //     }
    // }
    // movies.forEach(movie => {
    //     if (movie.name && movie.director && movie.date) {
    //         console.log(JSON.stringify(movie));
    //     }
    // })
    const result = arr.reduce((acc, curr) => {
        if (curr.includes('addMovie')) {
            const currMovie = {}
            const name = curr.slice(curr.indexOf(' ') + 1);
            currMovie.name = name;
            acc.push(currMovie)
            return acc
        } else if (curr.includes('directedBy')) {
            let [name, director] = curr.split(' directedBy ');
            let myMovie = acc.find(x => x.name == name)
            if (myMovie) {
                myMovie.director = director
            }
            return acc
        } else {
            let [name, date] = curr.split(' onDate ');
            let myMovie = acc.find(x => x.name == name)
            if (myMovie) {
                myMovie.date = date
            }
            return acc
        }
    }, [])
    result.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)