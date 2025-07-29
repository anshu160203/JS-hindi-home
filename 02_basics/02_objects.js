/* two ways to create a object :- literal and constrctor
   constructor makes a object singleton while literal doesn't.
   no difference in both except singleton
*/   

// --------------------- 1. literal ---------------------------------

const teleUser = {}; // this is how we create a object using literal
const appUser = {
    name : " Himanshu",
    "full name" :"Himanshu Kumar" ,
    age : 22,
    email : "himanshuk1602@gmail.com",
    residence : "Jind,Haryana",
    isLoggedIn : true,
    loginDays : " Monday,Tuesday,Satruday"
}
console.log(appUser);
console.log(appUser["name"]);// this is how we access the value of a key in object
console.log(appUser["age"]);
console.log(appUser.email);
console.log(appUser["full name"]);// see full name, to access these keys we use[""]
// Object.freeze(appUser); // this will freeze the object and prevent any changes to it
// appUser.age = 20; // this will not work as the object is frozen


// using symbol in object

// creating a symbol
const mySymbol = Symbol("key1") 

// // using symbol as key

const newSymbol = {
    [mySymbol] : "my key first"
}
console.log(newSymbol);
console.log(newSymbol[mySymbol]);
console.log(typeof newSymbol[mySymbol]);
console.log(mySymbol);
console.log(typeof mySymbol);

// taking another example of symbol
const oldSymbol = Symbol("Key-2")

const anshu = {
    [oldSymbol] : " Himanshu"
}
console.log(anshu);
console.log(anshu[oldSymbol]);
console.log(typeof anshu[oldSymbol]);
console.log(oldSymbol);
console.log(typeof oldSymbol);

// reference of object
appUser.introduction = function() { 
    console.log(`Hello, appUser your name is ${this.name} and your age is ${this.age}`);
}
console.log(appUser.introduction());


// -------------------------- 2. constructor -----------------------------

const appUser2 = new Object(); // this is how we create a object using constructor

appUser2.name = "Sachin"
appUser2.age = 20
appUser2.email = "Sachin1982@gmail.com"
appUser2.location = "Bangalore"
console.log(appUser2);
console.log(Object.keys(appUser2)); // this will return the keys of the object
console.log(Object.values(appUser2)); // this will return the values of the object
console.log(Object.entries(appUser2)); // this will return the key value pairs of the object


// using objects in objects

const regularUser = {
    officialId : 1,
    about : {
        empName : "Sahil",
        userName : {
            firstName : "Sahil",
            lastName : "Vasisth"
        }
    }
}
// accessing the values
console.log(regularUser);
console.log(regularUser.officialId);
console.log(regularUser.about.userName.lastName);// that's how you do it
console.log(regularUser.hasOwnProperty("officialId"));// this will return true if the object has the property
console.log(regularUser.hasOwnProperty("officialId1"));//return false if the object doesn't have the property


// combining objects

const obj_1 = {1 :"a" , 2 : "b"}
const obj_2 = {3 :"a" , 4 : "b"}
const obj_3 = {5 :"e" , 6 : "f"}

const obj_4 = Object.assign({}/*Target*/, obj_1, obj_2, obj_3/*source*/); // this will combine the objects
// {} - this is the target object where the properties will be copied
console.log(obj_4);     // we can combine multiple objects like this
// console.log(obj_4[1]); // accessing the value of key 1

// const returnedtarget = Object.assign(Target,source)
// console.log(returnedtarget);
// console.log(returnedtarget === target);// true, this will return the target object


// spread method, latest and easy to use
const obj_5 = {...obj_1, ...obj_2, ...obj_3}; // this will also combine the objects
console.log(obj_5);



//---------more on console --------
