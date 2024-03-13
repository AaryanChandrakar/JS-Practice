                                  // 2 Types of Memory
//       1.) Stack                                                2.) Heap
//      (Primitive)                                             (Non-Primitive)

    let myStageName = "meraNaamJocker";
    let anotherName = myStageName;
    anotherName = "BatMan";

    console.log(anotherName);
    console.log(myStageName);

console.log("-----------------------------");

    let userOne = {
        email: "xyz@gmail.com",
        passward: 1234
    }

    let userTwo = userOne;
    console.log(userOne.email);
    console.log(userTwo.email);

    userTwo.email= "ABC@gmail.com"    // change in userTwo, but email of both user will change because of same referance.

    console.log(userOne.email);
    console.log(userTwo.email);
