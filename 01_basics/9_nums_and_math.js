const number = 100
// console.log(number) // normal print, value - 100

const score  = new Number(5000000);// if we want the value as a number only
// console.log(score);//[Number: 5000000],,,, it defines the type of value

// using methods
// console.log(score.toString());// changes our score value into String

// console.log(score.toString().length);// number changes in string and string has length

const newScore = 125.6945

// console.log(newScore.toFixed(1));// decimal ke baad kitne characters chaiye

// console.log(newScore.toPrecision(3));// it gives the round off figure in String

// console.log(score.toLocaleString());// 5,000,000:- by default us standards

// console.log(score.toLocaleString('en-In'));//50,00,000:- indian standard

// more values/standard on MDN
// try console in browser............. insepct>>>>>console

//+++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++

// console.log(Math);// for more properties run on console

// console.log(Math.abs(-4));// -ve numebr to +ve number <<Absolute value>>

// console.log(Math.round(5.67));// gives us the round off value

// console.log(Math.ceil(3.67));// round of to the next (big) number

// console.log(Math.floor(3.67));// round of to previous(lower) number

// console.log(Math.min(1,2,3,45,5,6575765,73,452,4,624,456,23523,452345,));// gives minimum value

// console.log(Math.max(12,24,34,456,5,657576514,73,452,4,624,456,23523,452345));// maximum value

console.log(Math.random()); // random number range between >> 0-1......0.10257307401093363

//agr kisi specific range me number chahiye like dice me 1-6 ya koi or 1-10 to uske liye krenge :-

// decimal ko ek place left shift krne k liye *10 kare
console.log(Math.random()*10); // shifts one digit, now the digit is between 0 to 10...7.446368301364745

// decimal k baad double zero k case ko avoid krne k liye +1 kare
console.log(Math.random()*10 +1 );//gurantee that minimum value is one 1, not zero 0

// (Math.random()*10) ko pehle execute krne k liye () me wrap krdiya
console.log((Math.random() * 10) + 1);

// agr ek hi value chaiye mtlb no decimal to Math.random ko Math.floor k saath wrap krdenge
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+ min)
// Math.floor >> for only one value
// Math.random() >> for random
// max_ - min_ >> 20 - 10 => 10 

// math.random *10 >> gives upto 10 and then we add >> min_ >> therefore now the value will be 10-20!

const low = 1 
const high = 6
console.log(Math.floor(Math.random() * ( high - low + 1)) + low)

