class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    createId(){
        return`123`
    }
}

const himanshu = new user("himanshu")
console.log(himanshu.createId())