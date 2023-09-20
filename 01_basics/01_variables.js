const accountId = 1
let accountEmail = "naresh@google.com"
var accountPassword = "12345"
accountCity = "Faridabad" //Don't Use this method of Variable declraction
let accountState; 

//accountID=2 //not allowed

accountEmail = "ns@ns.com"
accountPassword = "123456"
accountCity = "Delhi"

/*
    Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])