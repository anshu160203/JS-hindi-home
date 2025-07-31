// // if
// const userLoggedIN = false
// if (userLoggedIN) {
//     // if the condition is true then code in scope will execute otherwise not
//     // ex. is 2===2 then the code will execute otherwise not
//     console.log("Hello user");
// }
// // console.log(userLoggedIN)

// // if-else
// const temperature = 41
// if (temperature < 50){
//     console.log("temperature is less than 50");
// } else {
//     console.log("temperature is more than 50");
// }


// const balance = 1000

// // implicit scope >> execute in only one line >> isme maan liya jata hai ki scope hai
// if(balance>500) console.log("evaluated");


// // nesting (else-if)
// if(balance<500){
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


// // logical operator :-
// // &&  and operator --- run when all conditions are true

// const userLoggedIn = true
// const debitcard = true
// if (userLoggedIn && debitcard) {
//     console.log("Allowed to buy courses");
// }


// // || or operator ----- run when one condition is true from all conditions
// const userLoggedInGoogle = false
// const userLoggedInEmail = true
// const guestUser = false
// if (userLoggedInGoogle || userLoggedInEmail || guestUser) {
//    console.log("Logged in successfully, welcome");
// }





// +++++++++++++++++++++++++++ Switch +++++++++++++++++++++++++++++++++++++++

// syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 8 // we can also use string
// switch (month) {
//     case 1:
//         console.log("Janurary");
//         break;
//     case 2:
//         console.log("Feburary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;

//     default:
//         console.log("default case");
//         break;
// }




// <<<<<<<<<<<<<<<<<<<<<<<< Truthy and Falsey values >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// falsy values>>>>>false, 0, -0, BigInt 0n, "", null, undefined. NaN
// truthy >> true, "0", 'false', " " (one space) , [], {}, function()(), empty array, empty object, empty function  


// to check whether the array is empty or not
const userMail = " "
if (userMail.length === 0) {
    console.log("array is empty");
} else {
     console.log("Logged in successful");
}

// to check whether the object is empty or not

const emptyObj = { }

if (Object.keys(emptyObj).length === 0) {
    console.log("Object empty");
} else {
    console.log("Object is not empty");
}


// Nullish Coalescing Operator (??)  : null and undefined
// val1 = 5 ?? 10 
// val1 = null ?? 100 // (2)   
val1 = undefined ?? 1000 // (3)   
// val1 = undefined ?? 5000 ?? 10000 // (4)   
console.log(val1);  // >> 5 value (1)
console.log(val1);   // >> 100 (2)
console.log(val1);   // >> 1000 (3)
console.log(val1);   // >> 5000 (4)




// ***********************ternery operator***************************
// condition ? true : false 
const coffeePrice = 100
coffeePrice <=80 ? console.log("less than 80") : console.log("more than 80");