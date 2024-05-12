const accountId = 125930
let accountEmail = "yashraj@email.com"
var accountPassword = "12345"
accountCity = "Bhopal"
let accountState;

// accountId = 2 not allowed because const 

accountEmail = "yash@google.com"
accountPassword = "1221"
accountCity = "Jaipur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])