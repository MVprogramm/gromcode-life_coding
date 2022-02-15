console.log('Hello, FE-19!');

function getSenseOfLife() {
    return 42;
};

const result = getSenseOfLife();

console.log(getSenseOfLife());
console.log(result);

function getSquared(num) {
    return num**2;
};

console.log(getSquared(-8, 6));

console.log(getSquared(4));

function print(age) { console.log( `I am ${age} years old`); };

print(222);

function print (age) {
    console.log ('2 + 2 = ' + getSquared(2));
}

const mult =(firstNum, secondNum) => firstNum * secondNum;

console.log(mult(2, 5));

const squaredArrow =(num) => num * num;

console.log(squaredArrow(100));
const getMagicNumber = () => 17;

console.log(getMagicNumber());

console.log ((() => 17)() === (() => 17)());
console.log ((() => 17) === (() => 17));