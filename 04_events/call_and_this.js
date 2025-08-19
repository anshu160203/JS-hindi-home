function setUsername (username){
this.setUsername =  username// here this is not of any work it uses createUser's this
}

function createUser (username, email, password){
    setUsername.call(this, username)// we use .call to hold refence and use this to refer current context
    this.email = email,// .call pass the current execution contex to another function
    this.password = password
}

const anshu = new createUser('anshu' , 'himanshuk1602@gmail.com' , '123') 
console.log(anshu)
