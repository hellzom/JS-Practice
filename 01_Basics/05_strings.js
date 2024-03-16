const myName = "rishi"
const repoCount = 50

console.log(myName + repoCount + " Value") // not recommended

// String interpolation
console.log(`Hello my name is ${myName} and my repoCount is ${repoCount}`);

let str = new String('Rishi')
console.log(str); //[String : 'Rishi']
console.log(str[0]); // R
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(2)); // returns the char at the given index
console.log(str.indexOf('e')); // return the index of given char at first found and -1 if not found

let substr = str.substring(0,3) // returns the string from init index to target-1 index i.e 0th to 2nd index in this case. | negative values caannot be used // Ris
console.log(substr);

let slcstr = str.slice(-3,1) // returns the string from init index to target-1 index. | negative values can be used // s
console.log(slcstr);

let url = "https://hey.heyhey.hey/rishi code"
console.log(url.replace(' ','-'));

console.log(url.includes('rishi'));

console.log(url.split('/')); //retuns an array by splitting aty