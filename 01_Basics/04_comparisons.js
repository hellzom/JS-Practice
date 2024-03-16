// console.log(2 > 1);

console.log("2" > 1); // unpredicatble
// Always compare same data types

console.log(null > 0); // false
console.log(null == 0); // false // equaliy check | not same as comparison
console.log(null >= 0); // true // Comparison converts null to a number(0) which is why true is returned.

// Same for undefined


// Strict check
console.log("1" === 1); // false
console.log("1" == 1); // true