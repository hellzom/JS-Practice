//singleton - If made from constructor not literals
// Object.create()

// # object literals

const mySym = Symbol("Key1")

const jsUser = {
    "full name": "Rishi",
    age: 18,
    [mySym]: "heyy",
    location: "BLR",
    lastLoginDays: ["Mon", "Sat"]
}

console.log(jsUser.age) // only can be used when key is single word

console.log(jsUser["age"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

console.log(jsUser);
jsUser.age = 22;

// won't enterrtain any change after this
// Object.freeze(jsUser)
jsUser.age = 44;

console.log(jsUser); // will still return age = 22


jsUser.greeting = function(){
    console.log("Hello jsUser from func");
}

console.log(jsUser.greeting); //[Function(anonymous)] - Only reference of the func is returned but the func is not executed as this is a func

console.log(jsUser.greeting());



// will use 'this' keyword when refering to same object
jsUser.greeting2 = function(){
    console.log(`Hello jsUser, ${this["full name"]}`);
}
console.log(jsUser.greeting2());



