/* filter :- always returns value
             have a call back function as perimeter
            
*/

const mynums = [1,2,3,4,5,6,7,8,9,10]

// myNums.filter((call back function) => condition),,, if condition is true then value is returned
const newNums = mynums.filter( (num) => num >= 5)
// if we use {} after => function then we have to use return,,, without we don't get value
// console.log(newNums);

// another example of filter :-
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
  const filterBooks = books.filter((book) => { return book.edition >= 2007 && book.genre === 'History'})
    // console.log(filterBooks);
  const userBooks = books.filter((book) => book.genre === 'Fiction' )
    // console.log("Books with genre History",userBooks);


//  Chaining :- using methods inside methods

const newChain = [1,2,3,4,5,6,7,8,9,10]
const chain = newChain
              .map( (num) => num * 10)// iska result 2nd chain mein pass hoga
              .map( (num) => num + 1)// iska result 3rd chain mein pass hoga
              .filter( (num) => num > 50)
// console.log(chain);




// ******* Reduce **********

const myValue = [1,2,3,4,5]
// basic
// const totalValue = myValue.reduce( function (acc,curr) {
//   console.log(`value of accumlator is ${acc} and current value is ${curr}`);
//   return acc + curr
// }, 0 )
  // console.log(totalValue);
              
// with arrow function
 const totalValue = myValue.reduce((acc, curr) => acc + curr,0)
 console.log(totalValue);

 
// another example :-
 const shoppingCart = [
    {
        itemName : 'js course',
        price : 2000
    },
    {
        itemName : 'py course',
        price : 4999
    },
    {
        itemName : 'DS course',
        price : 12999
    }
]
// add all the prices in the shopping cart.....

const output = shoppingCart.reduce( (accumulator,item) => accumulator+item.price,0)
console.log(output);