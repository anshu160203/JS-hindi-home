//for-of loop

const myArray = [ 1,2,3,4,5,6,7,8]
for (const arr of myArray) {
    // console.log();
}

// printing every character of an array
const greetings = "welcome"
for (const greet of greetings) {
    // console.log(`${greet}`);    
}

// passing space
const newGreet = "Hello World!";
for (const greet of newGreet){
    if(greet === " "){
        continue;
    }
    // console.log(`Each Character is ${greet}`);
}


// maps :- never contain duplicate value and remember the sequence
const map = new Map()
map.set('IN','India')
map.set('UZB','Uzebkistan')
map.set('FR','France')
// console.log(map);

// if we want normal values
// for (const key of map) {
//     // console.log(key);    
// }

// if we want seperate values
for (const [key, value] of map) {// we store key and values differently in []
//  console.log(key,':-' ,value);
}

// for object:- we can not use for-of iteration in objects
// we use for-in itereation in objects


// for-in
const newObject = {
    game1 : 'COD',
    game2 : 'Temple Run',
    game3 : 'Subway Surfers'
}

for (const key in newObject) {
    // console.log(key);// print all keys
    // console.log(newObject[key]);// print all values
    // console.log(`${key} is for ${newObject[key]}`);// combined
}

// for-in iteration in arrays
const programming = ['js', 'rb', 'py', 'cpp', 'java']
for (const key in programming) {
    //    console.log(key);// it prints the keys of arrays
    //    console.log(programming[key]);// prints all the values
}
// not used on maps


/* for-each loop:- method provides a way to iterate over the elements of an array
   It executes a provided function once for each array element
   higher order function
*/

const coding = ['js', 'py', 'ruby', 'cpp', 'java']
// array.forEach(callbackfn)
coding.forEach(function (item){
// console.log(item);
})
/* coding >> our array
   forEach >> loop
   callbackfn >> no name
   callbackfn(parameter) >> paramter name should be aything.......
   item is our parameter
   then body of the function
*/

// using arrow function
coding.forEach( (value) => {
    // console.log(value);
})


// object inside array

const myCoding = [
    {
        languageName : 'Java',
        languageFileName : '.java'
    },
    {
        languageName : 'JavaScript',
        languageFileName : '.js'
    },
    {
        languageName : 'Python',
        languageFileName :' .py'
    }
]

// iteration
myCoding.forEach((item) => {
    // console.log(item);
    console.log(`name of language is ${item.languageName} and file name is ${item.languageFileName}`);
    // console.log(item.languageFileName);
})

// forEach never return values
