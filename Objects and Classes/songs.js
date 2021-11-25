function solve (arr){
//     let numberOfSongs = Number(arr.shift());
//     let allSongs = arr.pop()

//     for(let n of arr){
//         let [typeList,name,time] = n.split('_');
//         if(typeList === allSongs){
//             console.log(name);
//         }
//         if(allSongs == 'all'){
//             console.log(name);
//         }
//     }



// 2nd solution:
    // let songs = []
    // let numberOfSongs = Number(arr.shift());
    // let allSongs = arr.pop()

    // class Song {
    //     constructor(type, name, time) {
    //         this.type = type;
    //         this.name = name;
    //         this.time = time;
    //     }
    // }

    // for (let i = 0; i < numberOfSongs; i++) {
    //     let [type, name, time] = arr[i].split('_');
    //     let song = new Song(type, name, time)
    //     songs.push(song)

    // }
    // if (allSongs === 'all') {
    //     songs.forEach((i) => console.log(i.name))
    // } else {
    //     let filtred = songs.filter((i) => i.type === allSongs);
    //     filtred.forEach((i) => console.log(i.name));
    // }

    //3th solution:

    const numberOfSongs = Number(arr[0])
    const listOfSongs = arr.slice(1, -1)
    const typeList = arr.slice(-1)
    const result = listOfSongs.reduce((acc, curr) => {
        const [type, name, time] = curr.split('_')
        if (typeList == 'all') return [...acc,name]
        if (type == typeList) return [...acc,name]
        return acc
    }, []).join('\n')
    console.log(result);
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)