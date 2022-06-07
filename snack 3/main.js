const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const newArray = [];

myArray.forEach((element, i) => {
    if(i > 1 && i < 5) {
    newArray.push(element);
    }
});

console.log(newArray);

const newFilteredArray = myArray.filter((element, i) => {
    if(i > 1 && i < 5 ) {
        return element
    }
});

console.log(newFilteredArray);

