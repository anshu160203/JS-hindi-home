// making a function

//function, funcion name,parameters
function addTwoNo(n1,n2 ){
    console.log( n1 + n2);
}
//funcition name, arguments
addTwoNo(10,20);// here they are numbers :-- 30
// what if we pass strings?
addTwoNo("10","20");// 1020

// stroing in a variable

function addingTwoNo( no1, no2){
    //   console.log(no1 + no2);// this will print the value but not return it
    // here we use return to get the value
    return no1 + no2; // this will return the value
    /* - no code after return will be executed
       - so if we write console.log here it will not work
       - the value of return will be stored in the variable
       - we can also use return directly
    */   
}
const result = addingTwoNo(5,6); // undefined
// console.log("Result is: ", result); // undefined

console.log("Result is: ", result); // Result is: 11

// if no vaulue is passed it return underdefined nor null

function userLoggedIn(username = ""){
    if(!username){
        // console.log("Please enter a username");
        console.log("Guest logged in");
        return;
    }
    return `User ${username} is logged in`;
}
console.log(userLoggedIn("")); // Guest logged in
console.log(userLoggedIn("Himanshu")); // User Himanshu is logged in


// <---------------------functions with objects and arrays--------------------->


const user_obj = {
    name : "Himanshu",
    id :1002,
}
// Passing object in function
function handelObj(user_obj){
    console.log(`User name is: ${user_obj.name} and id is: ${user_obj.id}`);
}
handelObj(user_obj); // User name is: Himanshu and id is: 1002


// Passing array in function
const arr = [0,1,2,3,4,5]

function printarray(anyarray){
    console.log(anyarray[1]);
    return anyarray[1];
}
printarray(arr);
console.log(printarray(arr));
