
// in js everything is a object,,, function is also a object and it's also a function

function multiplyby5(num){
    return num * 5
}

multiplyby5.power = 2
console.log(multiplyby5(5))
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);//by default jo context set hota hh .protoype ka ye uss method ka this hai


function createUser(username , score) {
    this.username = username //  this refers to current context
    this.score = score
}

// we can also declare our own function by using .protoype

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printME = function () {
    console.log(`price is ${this.score}`)
}
const chai = new createUser('chai' ,25)// code not run,, for run use new
const tea =  new createUser ('tea' ,250)

chai.printME()
/* Here's happen behind the scene when the new keyword is used:-

A new object is created : The new keyword initiates the creation of a new JavaScript object.

A new prototype is linked : The newly created objects gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the constructor's
prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

The object is returned: After the constructor function has been called, if it doesn,t return a non-primitive value(object, array, function, etc...), the newly created object is returned

*/
