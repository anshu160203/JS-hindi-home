// addition(+), subtraction(-), multiplication(*), power(**), Divide(/), Remainder(%)

// //  newStr = str1 + str2   < the addition of 2 strings to make a big one:- string concatenation>
// console.log("1" + 2);   //12 //  concatenate
// console.log(1 + "2");   //12

// //  but if
// console.log("1" + 2 + 2);   // 122 >> agr string first hai to sbko string me treat kiya jayega

// // can check reason on ECMAScript

// console.log(1 + 2 + "2"); //  <1+2> + 2 => 32  >> agr string last me hai to pehle jo hai vo conversion ho jayega!

/* Description --> 

if used postfix, with operator after operand (for example, x++), the increment operator increments and returns the 
value before incrementing

if used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the
 value after incrementing
*/
// ex:-
let a = 1
// let b = a++
let b = ++a
console.log(a); //2
console.log(b); //2

let x = 1
let y = x++
console.log(x); //2
console.log(y); //1