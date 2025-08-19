class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    // ye ek function hi hh lekin class mein isko method bol dete hh
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
// constructor is automatically called when we use new keyword
const milk = new user("anshu" , "anshu@xyz.com", '123')

console.log(milk.encryptPassword())
console.log(milk.changeUserName())