class User {
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    // class ke bahar se koi value get krna chahte h to isliye getter hota hai
    get password(){//getters mein hmesha return aata hai
        return this._password.toUpperCase()
    }
    // koi value set krna chahte hh class ke aandr tb setter hota hai
    set password(value){// setters kabhi bhi return nhi hote
        this._password = value.toUpperCase()
    }
}
// jitni bhi hm property bnate hh unke naame se automatically getter or setter bn jaate hhh
const himanshu = new User("H@himanshu.ai", "abc")
console.log(himanshu.password)

// sometimes we want to hide something or don't want to give assess we use getter setter
// get aur set krne ke baad contructor mein jo property hh uska koi kaam nhi hh
// means:- constructor mein abb this.password ka koi kaam nhi hh kyuki hmne set baad mein kiya hh pass.




// when above getter and setter were not available

function UserOne (email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        set : function (value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password',{
        get : function(){
            return this._password.toUpperCase()
        },
        set : function (value){
            this._password = value
        }
    })
}

const cat = new UserOne("hihi@hidh.com", "anshu")
console.log(cat.password)