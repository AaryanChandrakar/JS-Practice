const marvel_heros = ["Ironman","Thor","Spiderman"]
const dc_heros = ["Batman","Superman","flash"]

marvel_heros.push(dc_heros);
console.log(marvel_heros)
marvel_heros.pop()
console.log(marvel_heros)

marvel_heros.concat(dc_heros)  // Aise kaam ni bnega new array ko store krna pdega
console.log(marvel_heros)  

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros) 

const all_new_heros = [...marvel_heros, ...dc_heros]  // using spred operator
console.log(all_new_heros)

const nested_array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]]
const usable_array = nested_array.flat(1)  // yha pe level dalne se usi level tak array flat hota h, Infiniy likhne se pura flat ho jata h
console.log(usable_array)

console.log(Array.isArray("Ramlal"))
console.log(Array.from("Ramlal"))          // array me convert ho jayga
console.log(Array.from({name: "Ramlal"}))  // object ko array m convert krne ki koshish (interviw question)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))