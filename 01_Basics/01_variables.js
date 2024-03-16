const accountId = 15677
let accountEmail = "rishi@MediaSession.com"
var accountPassword = "23232"
/*
NOTE:
Prefer not to use var because of scope issue
Use let instead of that.
*/
accountCity = "BLR" // can reserve a place for variable even without defining that but not preffered.

let accountState // wil be undefined as no value is assigned

// accountId = 2 // not allowed

accountEmail = "hey@heyhey.hey"
accountPassword = "345353453453"
accountCity = "Jaipur"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])