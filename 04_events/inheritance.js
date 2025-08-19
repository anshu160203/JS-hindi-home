
class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

// to inherit all the properties of class user in teacher we use extend 
class teacher extends user{
    constructor(username, email, password){
    super(username)//super autocheck the parent class and constructor on that, check value set value and gives acess to us of that value,, behind the auto place this keyword
    this.email = email
    this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`); //let's access username
    }
}

const chai = new teacher('chai', 'chaiAndTeacher@gmail.com', '123')
chai.addCourse()
chai.logMe()

// to check instance we use instanceOf
