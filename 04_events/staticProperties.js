class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    // static prevents form being accessed by all
    static createId(){
        return`123`
    }
}

const himanshu = new user("himanshu")
console.log(himanshu.createId())