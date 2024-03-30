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

const myMap = new Map()
myMap.set ('IN','India')
myMap.set('UK','United Kingdom')
myMap.set('USA','United States of Ameriaca')
myMap.set('IN','India')                  // this line will not repeat

console.log(myMap)

