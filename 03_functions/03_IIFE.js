// IIFE( Immediately Invoked Function Expression)

/* to invoke a function immediately 
   dusre global variable hmare function ko polute na kre usse bachne k liye iska use kiya jata
   immediately database ko connect krne k liye
   (defination of function)(calling the function)
*/

( function one (){
     console.log("Db connected");
}) ();

( function two (name,id){
    console.log(`Db connected ${name} and your id is ${id}`);
})(`Himanshu`, 100);


// arrow function in IIFE

( (location,pin) => {
    console.log(`Your location is ${location} and your pincode is ${pin}`);
}) ("Jind", 126102)

// always use ; to stop one running program