//example

let score = 33
console.log( typeof score);// we get the value as a number
// but if 33 is written in "" 
let score1 = "33"
console.log( typeof score1);// we get the value as a string
// console.log(typeof(any variable));// another way to get type of variable

/* if you get a string > but you are sure that u really want to work on a number not on-
    a string so you can simply converse the DT
*/

// METHOD TO CONVERT STRING INTO NUMBER DATA TYPE 

let scoreInNumber = Number(score1) // we take score1 because it gives the string value
// Data type conversion k time jis DT me change krna hai uska first letter capital format me likhenge
console.log(typeof scoreInNumber); // and boom we get the value as number


// conversion into boolean
let anshu = 0       // 1=> true; 0=> false; empty string => false; string => true
let deepak = Boolean(anshu)
console.log(deepak);
console.log(typeof deepak);


//...................Do all this to convert one data type into another............