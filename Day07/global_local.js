                                      // Global n Local

var c=300       // ye global ho kr bhi print ni ho rha

let a=600       // ye global ho gya 

 if (true) {                            
    let a=10    // ye local ho gya
    const b=20  
    var c=30    // var bekar h, local print ho rha 

    console.log("Inner: ",a)
 }

console.log(a);
//console.log(b);
console.log(c);