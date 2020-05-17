var nameVar = 'Mari';
var nameVar = 'Ann';
console.log('nameVar', nameVar);

let nameLet = 'David';
nameLet = 'André'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}
getPetName()
//console.log(petName);

const fullName = 'Mariana Costa';

let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
}

console.log(firstName)