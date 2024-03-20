                     //Immediately Invoked Function Expressions IIFE
(function chai(){
    //named iife, kyuki uska naam h
    console.log(`Hello Baccho`);
})();                                  // es line m ; lagana hi pdega ni to error ayga (2 iife k time dhyan dena pdega)

((value) => {
    console.log(`Hello teachers and ${value}`);
})('Principal');

//eske sandar function hoga) (eske lgne se function run ho jayga)
// global scope k pollution se problem hoti h kai bar, us pollution ko hatane k liye iffe ka use kete h