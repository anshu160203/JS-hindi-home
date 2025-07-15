// on the basis of data storage and accessing Datatypes are divided into 2 types:- 1.) Primitive 2.) Non- primitive

/* 1) Primitive:- call by value datatype, means original data ka refrence nhi diya jaata, copy ka refrence diya
      hai and the changes we made is in copy data
      7 types>>>> String, Number, Boolean, Null, Undefined, Symbol(To make a value unique), BigInt.
*/
// example =>
    const score = 100;  // number
    const value = 9.2;  // decimal, floating
    const isLoggedIn = false // boolean
    const outsideTemperature = null  // empty but it's not zero
    let userEmail; // undefined 
    let userNewEmail = undefined // undefined

    const id = Symbol('1234')
    const newId = Symbol('1234')
    // dono ki value same nhi hai beacuse ki symbol unqiue-ness k liye use kiya jata hai

    // checking whether the value is true or not:
    console.log(id === newId); // false

    const bigNumber = 3478923n; // last me n use krna bigInt ko represent krta hai
    console.log( typeof bigNumber); // bigint
    
    
/* 2) Refrence type(Non-Prmitive):- ye saari values vo hai jo ki memory me inka refernce directly allocate kia ja-
      skta hai >>>>>>>  objects and web events master for js
      types>>>> Arrays, Objects, Function
*/
const heroes = ["IronMan", "BlackPanther", "Thor"]; // arrays

const myObj = {   //objects.... all the values in {} are objects
    name : 'deep',  // DataType could be anythingt
    age : 19,
}

const myFunction = function(){ // functions.... all the valus in {} are functions
    console.log("hello world"); 
}
/* 1)javascript is a dynamicallty types language, because data type will automatically assigned at the time of
   compilation or code execution.
   2)function ka DT function hi hota hai but bola "Object function" jata hai, jitne v non-primitive DT hai
   unka return data type "object" hi aata hai.
*/
