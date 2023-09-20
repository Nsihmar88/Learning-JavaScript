let score = 55

console.log(typeof score);
console.log(typeof(score));

let score1 = "55"
console.log(typeof score1);
console.log(typeof(score1));

let score2 = "55"

let valueInNumber = Number(score2)
console.log(typeof valueInNumber);

// "55" => 55
// "55abc" => NaN (Not a Number)
// true => 1; false =>0;


let isLoggedIn = "Naresh"
let booleanIsLoggedIn = Boolean("isLoggedIn")
console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "" => false
// "Naresh" => true

let someNumber = 55

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);