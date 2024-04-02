                                         // Objects Part 2

const tinderUser = new Object()    // singletone

const tinderUser1 = {               // esme braces k andar key aur value dal dete h using colon (;)
    id: 123,
    name: "Mahesh",
    isLoggedIn: true
}
//console.log(tinderUser1)

const tinderUser2 = {}                // esme thoda sa alg syntax h, dot laga k connect krteh, using equal (=)
tinderUser2.id = "963",
tinderUser2.name = "harish",
tinderUser2.isLoggedIn = false

//console.log(tinderUser2)

console.log("------------------------------------------")

const reguUser = {
    email: "abc@gmail.com",
    name:{
        fullname: {
            firstname: "Rahul",
            lastname: "Gandhi"
        }
    }

}

//console.log(reguUser)
//console.log(reguUser.name.fullname.lastname)

console.log("-------------------------------------------")

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)   // samne m ek {} dena acchi baat hoti h, nhi to sari value firts object m store ho jaygi

const obj3 = {...obj1, ...obj2}              // 90% time hum yhi use krenge

console.log(obj3)

console.log("--------------------------------------------")

const user = [
    {
        id: 123,
        email: "xyz@google.com"
    },

    {
        id: 345,
        email: "xkz@google.com"
    },

    {
        id: 678,
        email: "xmz@google.com"
    },

    {
        id: 910,
        email: "xrz@google.com"
    }
]

console.log(user[1].id)

console.log(tinderUser1)
console.log(Object.keys(tinderUser1))    // this is interesting, age espe kaam krenge
console.log(Object.values(tinderUser1))
console.log(Object.entries(tinderUser1))

console.log(tinderUser1.hasOwnProperty('name'))

