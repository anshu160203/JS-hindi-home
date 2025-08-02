// iterations are just loops like :- for loop, while, do-while, etc.

// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

// for adding a text in between
for (let i = 1; i <=10; i++) {
    const element = i;
    if (element == 7) {
        // console.log(`${element} is the best number`);
    }
    // console.log(element);
}

//loop in loop,, for in for

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and outer loop value ${i}`);
        // console.log(i + ' * '+ j +' = ' + i * j);
        // console.log(` ${i} * ${j} = ${ i * j}`);
    }
}

// for loop in array

const myArray = [ 'Iron Man', 'Super Man', 'Bat Man']
// console.log(myArray.length); // calculating length of array

for (let index = 1; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

/* break and continue 
   break :- it will stop the execution and exit the loop
   continue :- it will stop the execution, gives the statement and continue execution
*/

// break
for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        // console.log("5 is the best number");
        break; // here the execution is stopped and we step out of the loop
    }
    // console.log(index);
}

// continue
for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        // console.log("10 is the best number");
        continue; // here we execute the value in if and continue next execution
    }
    // console.log(index);
}