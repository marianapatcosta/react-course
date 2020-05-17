const square = function (x) {
    return x * x ;
};

console.log(square(8))

const squareArrow = (x) => {
    return x * x;
}

const squareArrowShort = x => x * x;


console.log(squareArrowShort(9))

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Mariana Costa'))