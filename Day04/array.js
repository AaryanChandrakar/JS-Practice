                                   // Array

const myArray = [0, 5, 10, 15, 20, true, "rahul"]
const myArrayX = ["Shaktiman" , "Naagraj"]

const myArrayW = new Array (20, 40, 60, 80)

//console.log(myArray[1])


                                   // Array Methods
myArrayW.push(100)
console.log(myArrayW) // last me add hoga

myArray.pop()
console.log(myArray) // last ka delete hoga

myArrayX.unshift("Shakal")
console.log(myArrayX)  // firts position (index-0) me add kr dega, baki value right shift hogi

myArray.shift()
console.log(myArray)  // first position (index-0) ki value ko delete kr dega

console.log(myArrayX.includes("Deadpool")) // boolean value dega
console.log(myArrayX.indexOf("Naagraj")) // index btayga
console.log(myArrayX.indexOf("Deadpool")) // jo element exist ni krti uska index kya ayga ?

const newArray = myArray.join() // Array ko string m badalta hai

console.log(myArray);
console.log(newArray);       // output dekho (same-same bu diffirent)
console.log(typeof newArray) // viswas ni h to type check kr lo

const myArrayN = [15, 20, 25, 30, 35, 40]
console.log("Original Array", myArrayN)

const myArrayL = myArrayN.slice(1,3);
console.log("Slice Applied", myArrayL)
console.log("after slice", myArrayN)
//console.log(myArrayN.slice(0,3))     //another way


const myArrayP = myArrayN.splice(1,3)
console.log("Splice Applied", myArrayP)
console.log("After Splice", myArrayN)
