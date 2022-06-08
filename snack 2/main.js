const teams = [
    {
        teamName: 'Piemonte Calcio',
    },
    {
        teamName: 'Monza',
    },
    {
        teamName: 'Intel',
    },
    {
        teamName: 'AC Milano',
    },
    {
        teamName: 'Munich',
    },
    {
        teamName: 'PSJ',
    },
    {
        teamName: 'Top Players',
    },
    {
        teamName: 'Worst Players',
    }
];

const namesAndFaults = [];

// for (let i = 0; i < teams.length; i++) {
//     const score = Math.floor(Math.random() * 80);
//     teams[i].score = score;
// }
function scoreFaultsGenerator() {
    for (let i = 0; i < teams.length; i++) {
        let score = Math.floor(Math.random() * 80);
        let faults = Math.floor(Math.random() * 80);
        teams[i].faults = faults;
        teams[i].score = score;
        // namesAndFaults[i].faults = teams[i].faults;
        // namesAndFaults[i].teamName = teams.teamName;
        
    }
}







scoreFaultsGenerator();




console.log(teams);


// for (let i = 0; i < teams.length; i++) {
//     namesAndFaults.push(
//         {
//             ...teams[i].faults
//         }
//     )
// }
console.log(namesAndFaults);