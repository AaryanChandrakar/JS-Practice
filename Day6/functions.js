function sayMyName(){
   console.log("B")
   console.log("A")
   console.log("H")
   console.log("U")
   console.log("B")
   console.log("A")
   console.log("L")
   console.log("I")
}
//sayMyName()

function addTwoNum(num1, num2){
   //console.log(num1 + num2)
   
   // let result = num1 + num2
   // return result;

   return num1+num2;
   
}
const result = addTwoNum(5,10)
console.log("Result is: ",result)

function loginUserMessage(username){       // username="sam" likh denge to agr argument nhi bhi denge to default me sam print hoga 

   if(username === undefined){           // (!username) vali chiz bhi dekhenge === k jaisa hi h
      console.log("Please enter user name")
      return
   }
   else{
   return `${username} has just logined`
   }
}
console.log(loginUserMessage())
