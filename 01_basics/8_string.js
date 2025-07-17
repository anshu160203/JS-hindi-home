//  String concatenate
let name = "Himanshu"
let bodyWeight = 70
// console.log(name + " have "+ bodyWeight + " bodyWeight ");// old way

// String inter-polation>>>> in this we use back ticks``
// ``>>>benefit is that we are making placeholder in these the any variable we make we can direcetly place
// console.log(`hello my name is ${ name } and my body weight is ${ bodyWeight}`);
// we can add more strings on the go in string-inter-polation method on placeholder

// one more method to declearing String:-

const myName =  new String ("Himanshu-Kumar")// make new string
// console.log(myName);
// console.log(myName[5]);// accessing key value
// console.log(myName.__proto__);// accessing prototype>>> return object
// console.log(myName.length);// 14 gives the length of the string
// console.log(myName.toUpperCase());// returns all the letter of the string in upperCase
// console.log(myName.toLowerCase());// returns all the letter of the string in lowerCase
// console.log(myName.charAt(6));// put index and get character
// console.log(myName.indexOf('s'));// put character and get index
// Substring
const newName = myName.substring(3,10) // starting index : 3(included),ending index : 10(excluded)
console.log(newName);//anshu-K bcoz of our input indexes

const sliceString = myName.slice(3,10)//starting index : 3(included),ending index : 10(excluded)
console.log(sliceString);//anshu-k bcoz of our input indexes.....we can also give -ve values

// str.trim() => remove whitespaces only of starting and ending of string. 
// str.replace(searchVal, newVal) // search and replace the value.

const url = "https://schoolacademy.com/school%20academy"
console.log(url.replace('%20', '-'));

// to find any word in string
console.log(url.includes('school')) // true
console.log(url.includes('college')) // false
console.log(myName.split('-'));// return-'Himanshu', 'Kumar' it seperates the string on the basis of "-"

