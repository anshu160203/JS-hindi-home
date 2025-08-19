// declaring our own function 

let myHeros = ["thor", " spiderman"]

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
// we make our own function
Object.prototype.himanshu = function (){
    console.log(`Himanshu is also a super hero`)
}

heroPower.himanshu()// our own function is available in heroPower object 
myHeros.himanshu()// our own function is also available in myHeros array

// inheritance :- to inherit the properties we use __proto__,, ex:-

const user = {
    name : 'himanshu',
    email : ' himanshuk1602@gmail.com'
}
const teacher = {
    makeVideo : true
}
const teacherSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignmment : 'JS assignment',
    fullTime : true ,
    __proto__ : teacherSupport
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teacherSupport, teacher)

