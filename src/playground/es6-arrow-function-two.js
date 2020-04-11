// argument object - no longer bound with arrow function
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(15, 2, 21312));

// this keyword - no longer bound
const user = {
    name: 'fazle',
    cities: ['dhaka', 'chandpur', 'gajipur'],
    printPlacedLived() {
        return this.cities.map((city) => this.name + ' Has lived in ' + city);
    },
};

console.log(user.printPlacedLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    },
};

console.log(multiplier.multiply());
