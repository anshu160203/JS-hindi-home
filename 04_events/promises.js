// // creating a promise :- 

// // promise 1
// const promiseONe =  new Promise(function(resolve , reject){
//       setTimeout(() => {
//         console.log('async one is completed');
//         resolve(); // it is a method which is directly connects to then
//       },1000);
// })

// promiseONe.then(() => {
//     console.log('Promise one consumed')
// })

// // promise 2 :-- without storing it in variables

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('async 2 completed');
//         resolve();
//     }, 2000);
// }).then(() => {
//     console.log('async 2 promise resolved')
// })

// // promise 3 :--  giving perimeter in resolve and passing it in then

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise three')
//         resolve({ name : ' Himanshu', emaail : 'himanshuk1602@gmail.com', age : 21})
//     }, 3000);
// }).then((user) => {
//     console.log(user)
// })



// // promise 4th,,, dealing with reject and getting one element of objects

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (! error) {
//             resolve ({ username : 'Anshu', password : '1234'})
//         } else {
//             reject('ERROR : SOMETHING WENT WRONG')
//         }
        
//     }, 4000);
// })
// // // if error = false;
// // promiseFour.then(function(myValues){
// //     console.log(myValues);
// //     console.log('promiseFour is resolved');
// // })
// // // if error =  true;
// // promiseFour.catch(function(myValues){
// //     console.log(myValues);
// //     console.log('promiseFour is resolved');
// // })


// // callBack hell,,,, like if we want only username of object

// promiseFour
// .then((user) => {
//     console.log('user');
//     return user.username
// })
// .then((username) => {
//     console.log(username)
//  })
//  .catch((error) => {
//     console.log(error)
//  })
//  .finally(()=>{
//     console.log('The promise is either resolved or rejected')
//  })


 // promise 5

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username : ' Himanshu Kumar', password :123456})
        }else {
            reject ('ERROR : Something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



async function getAllUsers(){
try {
        const response = await fetch('https://api.github.com/users/anshu160203')
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log('ERROR' , error)
}
}

getAllUsers()


