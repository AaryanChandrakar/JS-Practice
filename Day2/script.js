                                 // Data type in JS

"use strict"; // Treat all JS code as newer version (ye nhi lekhenge to bhi machine ko pta chal jata h by default)
              // Par likhna accha hota h.
//alert (3 + 3)    // we are using node.js not browser

let name = "Bhupendra"           // string => ""
let age = 54                     // nuber => 2 to the power 53
let loggedIn = false             //  boolean  => true or false
let state;                       // undefined => variable declear hua par valu asign ni hua to undefined hoga
let interest = null              // null => stand alone value

                // ye sab premitive data type h
// nuber => 2 to the power 53
// bigint 
// string => ""
//  boolean  => true or false
// null => stand alone value
// undefined => variable declear hua par valu asign ni hua to undefined hoga
// symbol => unique

//console.table([name, age, loggedIn, state, interest]);

//console.log(typeof interest); // object
//console.log(typeof state); // undefined

                   

                                        // Datatype Conversion

let score = 50
console.log(typeof(score));

let valueInNum = Number(score)
console.log(typeof(valueInNum));
console.log(valueInNum);

console.log("--------------------------")


let score1 = "Ram123"
console.log(typeof(score1))

let valueInNum1 = Number(score1)
console.log(typeof(valueInNum1));
console.log(valueInNum1);


console.log("--------------------------")


let score2 = null
console.log(typeof(score2));

let valueInNum2 = Number(score2)
console.log(typeof(valueInNum2));
console.log(valueInNum2);


console.log("--------------------------")


let score3 = 0
console.log(typeof(score2));

let valueInNum3 = Boolean(score3)
console.log(typeof(valueInNum3));
console.log(valueInNum3);


console.log("--------------------------")


let score4 = "Shyam"
console.log(typeof(score4));

let valueInNum4 = Boolean(score4)
console.log(typeof(valueInNum4));
console.log(valueInNum4);


console.log("--------------------------")


let score5 = 100
console.log(typeof(score5));

let valueInNum5 = String(score5)
console.log(typeof(valueInNum5));
console.log(valueInNum5);