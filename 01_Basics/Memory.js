let myName = "rishi"
let changeName = myName // copy of myName is given to changeName (stack)
console.log(changeName);

changeName = "aman" // copy name is changed
console.log(changeName);
console.log(myName); // original is retained as it was not given as reference to changeName


let userOne = {
    name: "Rishi",
    age: 22
}

let userTwo = userOne

userTwo.age = 44 // Changes the original value as the memory reference (heap) is given

console.log(userOne.age);
console.log(userTwo.age);
