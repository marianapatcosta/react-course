class Person {
    //name;

    constructor(name = 'Jane Doe', age = 0) {
        //this.name = name || 'Jane Doe';
        this.name = name,
        this.age = age
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`;
    }

}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        // gves us the boolean corresponding do the value; true if the value is truthy; false if value is falsy
        return !!this.major;
        //return this.major ? true : false;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I´m visiting ${this.homeLocation}.`
        }

        return greeting;
    }
}

const traveler = new Traveler('Paul', 30, 'Porto');
console.log(traveler.getGreeting());

const traveler1 = new Traveler('Ann', 28);
console.log(traveler1.getGreeting());

const student = new Student('Andrew', 26);
console.log(student.hasMajor())
console.log(student.getDescription())

const person = new Person('Mary', 20);
console.log(person.getGreeting());
console.log(person.getDescription());

const person1 = new Person();
console.log(person1.getGreeting());
console.log(person1.getDescription());
