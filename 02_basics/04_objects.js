const tinderUser = new Object() //singleton object

const anotherTinderUser = {} //non-singleton object

tinderUser.id = "123"
tinderUser.name = "Sam"
tinderUser.isLogedIn = false

console.log(tinderUser);

const regularUsr = {
    email: "hey@hey.hey",
    info: {
        name: "Rishi",
        age: 18,
        plans: {
            gold: true,
            platinum: false
        }
    }
}

console.log(regularUsr);
console.log(regularUsr.info);
console.log(regularUsr.info.plans.gold);

//regularUsr.info?.plans.gold | use ? if not sure value will exist


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj3);

//combine in 1 {}
const obj4 = Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } | first parameter is target and alll other are inserted into that, which is why we give {} to insert everythuing intpo single object.
console.log(obj4);


//use spread operator
const obj5 = {...obj1, ...obj2}
console.log(obj5);


//Array of Object (in case of data from DB)

let user1 = [
    {
        name: "Rishi",
        age: 12
    },
    {
        name: "raj",
        age: 17
    },
    {
        name: "Aman",
        age: 32
    },
    {
        name: "Sam",
        age: 15
    }
]
console.log(user1[1].name);



//keys/values from object
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLogedIn' ] | return all keys as an array
console.log(Object.values(tinderUser)); // [ '123', 'Sam', false ] | return all values as an array
console.log(Object.entries(tinderUser)); // [ [ 'id', '123' ], [ 'name', 'Sam' ], [ 'isLogedIn', false ] ] | return all key-values as an nested array


//check if property exist
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// *** De-structuring an object property
const {isLogedIn : Login} = tinderUser // destructures the property isLoggedIn to the specified name Login and can be used directly instead of tinderUser.isLogedIn
console.log(Login);

//JSON - JavaScript Object Notation