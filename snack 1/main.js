const bikes = [
    {
        bikeName: 'Street Power',
        bikeWeightGrams: 6500,
    },
    {
        bikeName: 'Speed',
        bikeWeightGrams: 5000,
    },
    {
        bikeName: 'Montain',
        bikeWeightGrams: 7500,
    },
    {
        bikeName: 'Hibrid',
        bikeWeightGrams: 7000,
    },
    {
        bikeName: 'Electric MDG',
        bikeWeightGrams: 9000,
    },
    {
        bikeName: 'City View',
        bikeWeightGrams: 8500,
    }
];

const {bikeName, bikeWeightGrams} = bikes[0];


let lighterBike = {
    bikeName,
    bikeWeightGrams
};

for (let i = 0; i < bikes.length; i++) {
const {bikeName, bikeWeightGrams} = bikes[i];

if (lighterBike.bikeWeightGrams > bikeWeightGrams) {
    lighterBike = {
        bikeName,
        bikeWeightGrams
    }
}
    
}

console.log(lighterBike);