function solve([num,...rest]){
    const result = rest.slice(0,num)
    .reduce((acc,curr)=>{
        const pattern = /(?<name>[A-Z][a-z]{2,} [A-Z][a-z]{2,})\#+(?<pos>[A-Z][a-z]+&?[A-Za-z]+)[0-9]{2}(?<comp>[A-Z][A-Za-z0-9]+) (?<type>JSC|Ltd.)/
        const matches = pattern.exec(curr)
        if(matches!== null){
            console.log(`${matches.groups['name']} is ${(matches.groups['pos']).split('&').join(' ')} at ${matches.groups['comp']} ${matches.groups['type']}`);
        }
        return acc
    },0)
}
solve([4,
    'Tanya Petrova##Dental&Assistants25Health Ltd.',
    'Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.',
    'George Fill####Orderlies99Health JSC',
    'Lily petrova#Speech&Pathology&Assistants60Health Ltd.']
    )
solve([4,
    'Peter PetrovPsychology&Teachers25School Ltd.',
    'Kalin kalinov#Special Education Teachers00 School Ltd.',
    'Lilyana Kuncheva#### Tutor999School JSC',
    'Kliment Genchev#Teacher&Assistants20School Ltd.']
    )