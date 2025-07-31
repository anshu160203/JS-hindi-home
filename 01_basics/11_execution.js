/* Here we know about how a code is executed and how all things work

   Javs Script Execution Context:-
    js runs our progam in two phases

   1). Execution Phase-
        it tells us that a whole code is executed 
        Global Execution Context
        Function Execution Context
        Eval Execution Context:- property of global object
   2). Memory Creation Phase/ Creation Phase :-
        how functions and other things will go in memory, how execute they are and they come out 
        it only allocates memory to our declared variable, objects, etc... 
        
    when we give js a code the code always makes a global exec, context and this is 
    placed in this variable
    
    this..... in browser the value of this is window object
    javaScript is single threaded in this all things are process
*/
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)
/*---------Steps to run/execute this program----------
  1) global execution, all the codes were run by global execution and this is allocated in this
  ... when a function is executed and is returning a value then it is returned in global exc.
  2) memory phase, all variables were combine togerther in memory
     in first we have val1 in which undefined is stored, as well as in val2
     addNum in this defination of function is stored
     result1 and result again contain undefined
  3)execution phase
    val1 => 10 assigned
    val2 => 5
    result1 => addNum => creates a seperate executional context, in this 
                         new varialble environment + executional thread
                         kaam ho jaane ke baad ye delete bhi ho jaye ga automatic
    jinti baar bhi hm funcion bnaye ge utni baar step 2 and step 3 repeat honge      
    
    
    --------------------call stack ----------
    in call stack .. LIFO is used last in first out
 */