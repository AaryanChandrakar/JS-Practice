                                      // Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


console.log("-----------------------------")


let myCreatedDate = new Date(2024, 0, 15)
console.log(myCreatedDate.toDateString());


console.log("-----------------------------")


let myCreatedDate1 = new Date(2024, 0, 15, 5, 3)
console.log(myCreatedDate1.toLocaleString());


console.log("-----------------------------")


let myCreatedDate2 = new Date("2024-01-28")     //"01-28-2024" is also valid
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate2.toDateString());


console.log("-----------------------------")


let myTimeStamp = Date.now()
console.log(myTimeStamp);                 // current date in mili sec.
console.log(myCreatedDate.getTime())      // date converted into mili sec.

console.log(Math.floor(Date.now()/100))   // conversion of mili sec in sec.

