                                           //objects

// singleton


// constructor
Object.create


// object literals

const mySym = Symbol ("key1")          // symbol declear kiya

const jsUser = {
    name: "Ramesh",
    "full name":"Ramesh Chandrakar",    // define krne ka tarika alag hai
    [mySym]: "symbl1",                    // symbol ko key bna diya, sqare bracket k sath lena pdga, ni to access value ka type symbol ho jata h
    age: 28,
    state: "MH",
    email: "xyx@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])     // yha dot lga k access ni kr skte 
console.log(jsUser.mySym)            // sybol key ko access kiya
console.log(jsUser[mySym])     // eska type string hoga agr sqare bracket nhi hota to -- undefined result type dega

jsUser.email = "lakhan@microsoft.com"
//Object.freeze(jsUser)
jsUser.email = "lakhan@adobe.com"     // freez krne k baad value change kr k dekh rhe h
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

//note-- kab dot lete h aur kab square bracket lete h ye pta hona bht jruri h, interview k perspective se
