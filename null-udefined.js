/* 
    null : 
    When a variable is used to store the obj data type, when the variable is no longer referenced by obj, it is assigned a null value.
    
    undefined :
    When declaring variables And I haven't assigned an initial value to the variable. The variable will be undefined instead, and in js the variable Obj of global named undefined will store the value undefined again.
*/

var x = null
console.log(`x : ${x}`);

var y;
console.log(`y : ${y}`);


console.log(`(x)null === (y)undefined : `, x === y);
console.log(`(x)null == (y)undefined : `, x == y);
console.log(`typeof(x) : `, typeof(x));
console.log(`typeof(y) : `, typeof(y));

