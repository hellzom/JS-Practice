function sayMyName(){
    console.log("Hey")
}

sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}addTwoNumbers(1,2)


function addTwoNumbersWithReturn(num1,num2){
    return result = num1+num2;
}

console.log(addTwoNumbersWithReturn(4,2));


function loginUserMessage(username="Anonymous"){ //default value
    return `${username} just logged in!`
}

console.log(loginUserMessage("Rishi"));
console.log(loginUserMessage()); // will return undefined

console.log(loginUserMessage(null));

console.log("-------------------------------------");

function calculateCartPrice(val1, val2, ...num1){ ///rest opeartor
    return num1;
}

console.log(calculateCartPrice(400,333,545,343,23)); // will return array


const user = {
    username: "Rishi",
    price: 1999
}

const user1 = {
    username: "Aman",
    price: 2222
}

function handleObject(...anyobject){
    anyobject.forEach(element => {
        console.log(`Username is ${element.username} and price is ${element.price}`)
    });
    
}
handleObject(user,user1)