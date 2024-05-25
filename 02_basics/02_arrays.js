const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros) //will do nesting and dc will become an single element of marvel heros
// marvel_heros.concat(dc_heros) // same result

//but if you use a new var
// let allheros = marvel_heros.concat(dc_heros) //will return a new array with all elem

let allheros = [...marvel_heros, ...dc_heros] // ...spread operator
console.log(allheros);


const arr = [1,2,3,4,[5,6,7],8,9,[10,11,[12,13,[14,15]]]]

console.log(arr);

//flat the nested array into single array
console.log(arr.flat(Infinity));


console.log(Array.isArray("rishi"));

// convert to array
console.log(Array.from("rishi")); 

console.log(Array.from({name: "rishi"})); // will return blank as it cannot convert without explicitely saying from key/value

let sc1 = 1200
let sc2 = 1300
let sc3 = 1400

console.log(Array.of(sc1,sc2,sc3));

console.log("Hey")