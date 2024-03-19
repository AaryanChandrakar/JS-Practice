const course = {
    name: "WenDev",
    price: 999,
    courseInstructor: "Ramesh Babu"
}

//course.courseInstructor = "Ramesh Babu";     // eske alawa ek aur rasta h

const {courseInstructor: instructor} = course  // primary name ko secondary name se link kr diya joki chota h aur easy to use h

console.log(instructor);
//--------------------------------------------------
// ye jo niche vala concept baad me smjhenge
const navbar = ({company}) => {             // {company} vali chij ko de-structuring bolte h

}
navbar (company = "Ramlal")
//---------------------------------------------------
// API's kya h? ---> jab apna kal kisi aur k sar dal dete h vo api's hota h

// API ki format kesi hoti h?
//Ans.-> Phle XML k format me hoti thi, par ab json k format m hoti h
// {
//     "name": "Mahesh Babu",
//     "age": 52,
//     "location": "M.P."
// }
// kabhi kabhi array k andar oject format m bhi bhi json ja file hota h
// [
//     {},
//     {},
//     {}
// ]