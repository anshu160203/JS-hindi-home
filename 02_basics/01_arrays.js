// indexing starts from zero
// store any type of element
// js array-copy operations makes shallow copy
// shalow copy - share same refrence
// deep copy - doesn't share same refrence

const arr = [ 1,3,4,5,2, true , "himanshu"]
const newArr = [ 0,1,2,3,4,5,6,7,8]

// Methods in array

// newArr.push(9) // add the element at the end
// console.log(newArr);

// newArr.pop() // removes the last element
// console.log(newArr);

// newArr.unshift(10) // add element at first/zero indexing
// console.log(newArr);

// newArr.shift() // removes the first element
// console.log(newArr); 

// console.log(newArr.includes()); // check whether the elemnt is present, type - boolean

// console.log(newArr.indexOf()); // find the index of first occurence of value

// const arr2 = newArr.join() // Adds all the elements of an array into a string
// console.log(newArr);
// console.log(arr2);
// console.log(typeof arr2);

// slice and splice 

// const myNewArraySlice = newArr.slice(1,3)// here we gives the index of numbers
// console.log( "slice",myNewArraySlice);// doesn't include end index and no change in original array

// const spliceArray = newArr.splice(1,3)// include end index and change in original array
// console.log("splice", spliceArray);
// console.log("original array", newArr);
