const user = {
    username : "Himanshu",
    coursePrice : 1100,

    welcome : function(){ // this refers current context
        console.log(`${this.username}, welcome to the website, course price is ${this.coursePrice} `);
        console.log(this);
        
    }
}
// user.welcome()//Himanshu, welcome to the website, course price is 1100 
// user.username = "Anshu"
// user.coursePrice = 1400 
// user.welcome()

// in browser the global object is the window object..... interview question
// this is only used in objects there is no use of this in function 

function chai (){
    // console.log(this);
    // console.log(this.username);
}
chai()


//.......... declaring this thorugh arrow functions...........

// arrow function
// = () => {}
const water = () => {
    let nameOfUser = "Anshu";
    console.log(this);
}
water()

// explicit return:- it's a normal thing, we use return keyword along with {}
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// implicit return:- in this, no need to use curly braces{}
// in additon we dont use return keyword, if we use {} then we have to use return 
// we can also bind the num1 + num2 in parenthesis()
const addTwo = (num1,num2) => num1 + num2
console.log(addTwo(3,5));


// obect is always return in {}

