/* # Primitive (Call by value - Memory reference is not given but the value is copied) (Stack memory is used)
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false as Symbol defines unique

let bigNum = 347856783465n //will be decleared as BigInt type

/* # Non-Primitive (Call by reference - the actual memory address is refered instead of copying the value) (Heap memory is used)
1. Arrays
2. Objects
3. Functions
*/

//array
const heros = ["shaktiman", "naagraj", "doga"] 

// Object
let myObj = {
    name: "hiotesh",
    age: 22
}

// function
const myFun = function(){
    console.log("helloo from function");
}
myFun()
console.log(typeof myFun); //will return function but is called actually function object
console.log(myFun); // [Function : myFun]
