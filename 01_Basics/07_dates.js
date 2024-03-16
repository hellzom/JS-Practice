let myDate = new Date();
console.log(myDate); //2024-03-16T13:06:18.279Z
console.log(typeof myDate);
console.log(myDate.toString()); //Sat Mar 16 2024 13:07:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sat Mar 16 2024
console.log(myDate.toLocaleString()); //3/16/2024, 1:08:30 PM


// let myCreatedDate = new Date(2023, 0, 23) // months start with 0 | YYYY,MM,DD,HH,MM
// let myCreatedDate = new Date("2023-01-23") // YYYY-MM-DD
let myCreatedDate = new Date("01-14-2023") // DD-MM-YYYY

console.log(myCreatedDate.toDateString());

let timestp = Date.now();
console.log(timestp);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



// format defination
let ddd = newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(ddd);