// stack and heap memory
// stack is used for primitive data type and heap is used for reference/non-primitive data type
// example of stack(Primitive data type )
let originalname = "Anshu"
let surname = originalname
console.log(surname);// Anshu mile ga, surname mein originalname ki value copy hui h
// another
surname = "Chahal"
console.log(surname);// chahal milega, value assign kri hh surname mein isliye

// example of heap(Non- primitive data type )
let userOne = {
    name : "Himanshu",
    age : "22",
}

let userTwo = userOne
console.log(userOne);// prints the values of user one
console.log(userTwo);// also prints the value of user one

/* but if we change the value in userTwo then, userOne will also change :>>
   chahe userOne me change kro ya userTwo me change kro dono ka reference same
   hai to ek me change krenge to dusre me bhi change hoga, coz of heap. */

userTwo.name = "Sachin"
userTwo.age = "20"   
console.log(userOne);// get sachin bcoz we get refrence of original value so changing after accessing
                      // should be in original value not on copy like stack
console.log(userTwo);