                                // High order array loops
//for of 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]        // name=arr

for (const iterator of arr) {  // name=arr      // i=intetation (repeatition)
    //console.log(iterator)                       // iteration
}

const india = "I love India"
for(const i of india) {
    //console.log(`String elements is ${i}`)
}

// Map (data type , similar to arrays but cotaining unique values)

const myMap = new Map()                  // Map le kr for of loop laga diya
myMap.set ('IN','India')
myMap.set('UK','United Kingdom')
myMap.set('USA','United States of Ameriaca')
myMap.set('IN','India')                  // this line will not repeat

//console.log(myMap)

for(const [key,value] of myMap)
 {
  // console.log(key,':-',value)
 }

 const myObject={
   'game1': 'NFS',
   'game2': 'SpiderMan'
 }

 //for(const [key,value] of myObject){  //boss objects me for of loop ni lgta, es liye apn for in use krenge
    // console.log(key,':-',value);
 //}

 const progra = {
    js: 'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift: 'swift by apple'
 }

 for (const key in progra) {
   // console.log(`${key} stands for ${progra[key]}`) 
    }


const lang = ["js","java","python","c++"]

for(const key in lang)
{
    //console.log(lang[key],'at', key)
}

const yourMap = new Map()                  // Map le kr for in loop laga diya
myMap.set ('IN','India')
myMap.set('UK','United Kingdom')
myMap.set('USA','United States of Ameriaca')
myMap.set('IN','India')      

for(const [key,value] in yourMap){                    // map me interation kaam ni kerta (for in kar ni krta but for of krta h)
  //  console.log(`key, 'at', yourMap[key]`)
}

// for each loop

const coding = ["js","ruby","java","c++","python","c#"]

coding.forEach((element, index, arr) => {     //arrow fun use hua h, normal fun se bhi ho jayga, esko krne k bht tarike h
    //console.log(element, index, arr)          // jaise nornal fun, aur phle fun de kr fun call krna
});


// array k andar object lele

const ourArray = [
    {
        lang:'java',
        power:"100"
    },
    {
        lang:'c++',
        power:"100"
    },
    {
        lang:'pythone',
        power:"100"
    }
]

ourArray.forEach(element => {
    console.log(element.lang)
});