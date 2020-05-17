
//Object destructuring


const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};

// it is allowed to rename the key to have a varible with a diferent name
//and to assign a default value for this variable
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

// we can also destructuring nested objects
const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// the " , " is used to scape an item of the array
// we can also set default values
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
