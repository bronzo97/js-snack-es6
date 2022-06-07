let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luig', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
    ];

const newArray = students.map(element => {
    return element.name.toUpperCase();
});

    console.log(newArray);

const gradesOver = students.filter(element => {
    if(element.grades > 70){
        return element.name;
    }
});

    console.log(gradesOver);

const gradesOverId = students.filter(element => {
    if(element.grades > 70 && element.id > 120){
        return element.name;
    }
});

    console.log(gradesOverId);