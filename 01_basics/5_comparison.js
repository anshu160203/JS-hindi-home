// <, >, =, <=, >=, ==, != (comparisons)

// comparison krte time ye dhayn rakhe ki dono value ka DT same ho >
// typescript allow nhi krta different DT compare krne ko, agr aisa krte hai to kyi baar predictable result nhi milta
// <> and ==, inn dono ka javaScript mein kaam krne ka way thoda different hai.

// with null
console.log(null > 0); // false > bcoz null is empty  >>> 1
console.log(null == 0); // false   >>> 2


console.log(null >= 0);   // true   >>> 3
// Reason -> is that an equity check == and comparisons > < >= <= work differently.
// Comparison convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > is false.

// // with undefined
// //  undefined always returns false
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);
// null and undefined converions must be confusing so we avoid these

// ===, strict check, it check values and as well as their datatypes
console.log( "2"===2); // returns false because data type of both values is not same 
