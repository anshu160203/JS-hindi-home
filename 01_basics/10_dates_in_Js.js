// Dates

let myDate = new Date() // myDate is an object
console.log(myDate);
console.log(myDate.toDateString()); // Mon Jul 28 2025:- best to use
console.log(myDate.toString()); // date + time(gmt+0000)
console.log(myDate.toLocaleString());// 7/28/2025, 5:49:28 AM

// to give a specific date

let newCreatedDate = new Date( 2025 , 11, 28) // in js months start with 0
console.log(newCreatedDate.toDateString());

// with time

let oldDate = new Date(2025,8,23,5,8)
console.log(oldDate.toLocaleString());//9/23/2025, 5:08:00 AM

// for specific format 

let randomDate = new Date ("2-24-2023")// mm-dd-yyyy
console.log(randomDate.toLocaleString());