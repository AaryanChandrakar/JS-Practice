                                           //filter method
const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter((num) => num > 5)   // numbers jo 5 se bade h
//console.log(newNums)                              // phle store kia fir print kr diya

const nayaNum = myNums.filter((num) => {
    return num>4                                   // curly braces liya h to, return keyword lena pdega
})
//console.log(nayaNum)                               

// ye upr vale kaam, or each loop se bhi kiya ja skta h, if else cond. laga kr.


// niche ek array liay jisme bht se objects h
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  //console.log(userBooks);


  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const latestNums = myNumers.map( (num) => num * 10) .map((num)=>num+1)       // map method to access and get output 
                                   .filter((num)=>num>40)
 // console.log(latestNums)      
                                                   //.map().map().filter() esko bolte h Chaining


// reduce method

const ourNums = [1, 2, 3]

// const myTotal = ourNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)       

const myToTal = ourNums.reduce((acc,curr)=>acc+curr)
//console.log(myToTal)
                                                                // yhha pe zero k jgh koi num doge to indexing vhi se hogi
                                                                 // reduce h thoda difficult but bht useful h, shopping cart me cart value nikalne k time 
                                                                 // acc= accumulator , curr=current value
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);