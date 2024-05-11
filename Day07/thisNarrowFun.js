const user = {
   username : "Suresh",
   id: 222,

   welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`)
   // console.log(this)
   }
}

//user.welcomeMessage()     // () esko likhna jaruri h, kyui vo method h
//user.username="Sam"       // context OR value change krna bolte h esko
//user.welcomeMessage()     // updated result dega

//console.log(this)

//-------------------------------------------------------

function chai(){
    let username = "Ramlal"
    console.log(this)        // es line ko exicute krne m bht si chije output e ati h, that means kuch to rhta h this k andar
}
//chai()

//----------------------------------------------------------

const coffee = function(){
    let username = "Shyamlal"
    console.log(this.username)
}

//coffee()

//----------------------------------------------------------

const coldCoffee = () => {
    let username = "Pawan"
    console.log(this)
}

//coldCoffee()

//----------------------------------------------------------
                              // Arrow Function Basics
// Explisit Return Type
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4))

// Implisit return type
const addThree = (num1, num2, num3) => num1+num2+num3+({name: "rahul"})  // object ko () k andar dalna hoga

console.log(addThree(3,4,5))
