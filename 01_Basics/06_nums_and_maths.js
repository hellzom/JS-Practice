const score = 500

const balance = new Number(100)
console.log(score);
console.log(balance.toFixed(2)) // gves 2 decimal point

const othNum = 123.67
console.log(othNum.toPrecision(4)); // 123.7 

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,00,00,000

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


// ++++++++++++++++++++++++++++++++MATH+++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //-ve to positive
console.log(Math.round(4.6));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));
console.log(Math.sqrt(8));

console.log(Math.max(4,5,3,7));
console.log(Math.min(4,6,9,2));

console.log(Math.random()); //returns between 0 and 1
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)))+ min)