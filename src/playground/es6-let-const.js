var nameVar = 'Fazle';
nameVar = 'mike';
console.log('nameVar', nameVar);

let nameLet = 'jan';
nameLet = 'july';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

var fullName = 'Fazle Rabby';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
