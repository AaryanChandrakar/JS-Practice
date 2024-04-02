                          // conparision of datatype

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("------------------------"); // below vali chiz --> ideal way nhi h, aisa nhi krna h, only for understanding

console.log("2" > 4);              // "2" string tha, par number m convert ho gya
console.log("02" > 1);             // yha bhi vhi hua h

console.log("------------------------");

console.log(null > 0);             // ye sab krna nhi h bas, smjhna h
console.log(null == 0);
console.log(null <= 0);            // comarision converts null to a number and treats it as zero (0)
console.log(null >= 0);            // aur yha bhi null, zero (0) me convert ho gya h

console.log("-------------------------");

console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
console.log(undefined == 0);
console.log(undefined != 0);

console.log("-------------------------");

// === This is Strict Check, it does not converst data type... 
// firstly it checks data type.... if data type are same then it check the value
// incase data type are not same.... it returns false

console.log("3" === 3);      // * data type are not same
console.log(6 === 3);        // value are not same
console.log(3 === 3);        // both data type and value are same
