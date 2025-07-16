//  String concatenate
let name = "Himanshu"
let bodyCount = 20
// console.log(name + " have "+ bodyCount + " bodyCount ");// old way

// String inter-polation>>>> in this we use back ticks``
// ``>>>benefit is that we are making placeholder in these the any variable we make we can direcetly place
// console.log(`hello my name is ${ name } and my body count is ${ bodyCount}`);
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
const newName = myName.substring(3,10) // starting index : 0(included),ending index : 4(excluded)
console.log(newName);//


