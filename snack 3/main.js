const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const newArray = [];

const numMin = 2;
const numMax = 4;

myArray.forEach((element, i) => {
    if(i >= numMin && i <= numMax) {
    newArray.push(element);
    }
});

console.log(newArray);

const newFilteredArray = myArray.filter((element, i) => {
    if(i >= numMin && i <= numMax ) {
        return element
    }
});

console.log(newFilteredArray);

