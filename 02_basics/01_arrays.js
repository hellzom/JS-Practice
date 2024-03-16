const myarr = [0, 1, "a", 4, 6, 9];

const myArr2 = new Array(1,2,34,6)

console.log(myArr2);
console.log(myArr2[2]);


// Array Methods

myarr.push(6) // inserts at last
myarr.push("jhdg")
myarr.pop() // removes from last

console.log(myarr)

myarr.unshift(9) // inserts at first
console.log(myarr)

myarr.shift() // removes from first
console.log(myarr)


console.log(myarr.includes(9));

console.log(myarr.indexOf(9));

const newArr = myarr.join('-') //converts to string with the given seperator | default is comma
console.log(newArr);



// slice, splice

console.log("OG Array ", myarr);

let myn1 = myarr.slice(1,3) //excludes last index but does'nt change anything to og array
console.log("slice ", myn1);
console.log("OG Array after using slice ", myarr);


let myn2 = myarr.splice(1,3) //includes last index but actually it manipulates the original array itself so the range array is only remaining
console.log("splice ",myn2);
console.log("OG Array after using splice ", myarr);

