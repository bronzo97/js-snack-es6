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
function scoreGenerator() {
    for (let i = 0; i < teams.length; i++) {
        const score = Math.floor(Math.random() * 80);
        teams[i].score = score;
    }
}

function faultGenerator() {
    for (let i = 0; i < teams.length; i++) {
        const faults = Math.floor(Math.random() * 80);
        teams[i].faults = faults;
        namesAndFaults.push(faults);
        namesAndFaults.push(teams[i].teamName);
    }
}


// namesAndFaults.push(teams.teamName);

faultGenerator();
scoreGenerator();


console.log(teams);


// for (let i = 0; i < teams.length; i++) {
//     namesAndFaults.push(
//         {
//             ...teams[i].faults
//         }
//     )
// }
console.log(namesAndFaults);