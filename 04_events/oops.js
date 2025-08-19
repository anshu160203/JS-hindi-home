// objects literals :- object is a literal and it is basic unit, simply it is the making of object

const user = { // this is object making
    username : 'Himanshu',
    age : 21,
    isSignedIN : true ,

    getUserDeatails : function(){
        console.log('Got user details from database')
    }
}
// in this keyword which is used as this.getUserDeatails is refered to as current context
// console.log(user.username);
// console.log(user.getUserDeatails())


/* constructor function:- new keyword, allow to make multiple instances using one object literal
   1.when we use new keyword a empty obejct is created called this 
   2. cosntructor function is called due to new keyword
   3. in this keyword's all argument will injected in this 
   4. we'll find all this in function

   constructor is nothing just a refrence of your own
*/

const promiseOne =  new Promise()// here new is promise constructor
const dateOne = new Date()// here new is date constructor



