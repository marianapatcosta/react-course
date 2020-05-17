// arguments object - no longer bound

const add = (a,b) => {
   // console.log(arguments) arguments can only be accessed by function declaration and expressions
    return a + b;
}

console.log(add(55,1, 6))

// this keyword - no longer bound

const user = {
    name: 'Joan',
    cities: ['Porto', 'Braga'],

//  if here in method we usearrow function, it will bind this to its parent (body), so it will be defined; we stay with es5 functon declaration, so it binds this to where it is declared
/*  printPlacesLived : () => { */
    printPlacesLived () {
        console.log(this.name)
        console.log(this.cities)
      /*   const that = this;

        this.cities.forEach(function (city) {
            console.log(`${that.name} has lived in ${city}`)
        });
 */
        // arrow functions bind to parent scope, does not bind to its own value, so with arrow function we do not need to define "that" variable
        this.cities.forEach(city => {
            console.log(`${this.name} has lived in ${city}`)
        });

        return this.cities.map(city => `${this.name} has lived in ${city}`);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [3, 5, 7],
    multiplyBy: 6,
    multiply () {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

