                            // Functions with object and array

// function calculateCartPrice(...num1){   //... esko rest operator bolte h
//     return num1;
    
// }

function calculateCartPrice(val1, val2,...num1){   // val1-200 aur valu2-400 , baki bacha hua ...num1 m aa gya
    return num1;
    
}
//console.log(calculateCartPrice(200,400,600,800))

const user = {
    username : "Raja",
    id : 123
}

function handelObject (anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`)         // . k baad spelling mistake kiya to kaam kharab
}
handelObject(user)      // new obj bnake k bjay, yha pe function calling k time hi objects bna skte h ({}) 

//------------------------------------------------------------------

const myNewArray = [300,500,700,900]

function returnSecondValue(getArray){         // jo return krni h vo chij yha parameter me hogi
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))    // functon calling k time bni hui array ko use kr liya
console.log(returnSecondValue([1500, 3000]))  // calling k time hi array bna liya