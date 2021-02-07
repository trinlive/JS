/*
    spread syntax (...) allows an iterable such as an array expression or string to be expanded
    in places where zero or more arguments (for function calls) or elements (for array literals) are
    expected, or an object expression to be expanded in places where zero or more key-value pairs 
    (for object literals) are expected.
*/

console.log(`--Spread Operator--`)

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

var x = sum(numbers);
console.log(`x = sum(numbers) : `, x); // 1, 2, 3  undefined undefined

x = sum(...numbers);
console.log(`x = sum(...numbers) : `, x); // 6

x = sum.apply(null, numbers);
console.log(`x = sum.apply(null, numbers) : `, x); // 6


/*
    Description

    Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
    In the above example, the defined function takes x, y, and z as arguments and returns the sum of these values. An array value is also defined.
    When we invoke the function, we pass it all the values in the array using the spread syntax and the array name — ...numbers.
    If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function, e.g.:

*/

/*
    The above example is somewhat rigid; the real value in spread syntax is that it works with the same value, no matter how many elements are contained in the object, array, etc.

    It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. A very simple version of this kind of action could look like so:

    In the above example you can rerun the last line as many time as you like, to keep adding an additional 12 to the end of the array.
*/

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

console.log('numberStore :',numberStore);
console.log(`numberStore : ${numberStore}`);



let iterableObj = [49, 90, 'text'];

// For function call 
function sum2(x, y, z, n) {
    return x + y + z + n;
}
console.log(sum2(iterableObj));


// For array Literals or String 
x = [...iterableObj, '4', 'five', 6]; // combine two arrays by inserting all elements from iterableObj
console.log(x); // return array object 
console.log(`x = [...iterableObj, '4', 'five', 6] : ${x}`); // t,e,x,t,4,five,6


// For object literals (new in ECMAScript 2018)
let objClone = {...x};
console.log('objClone :', objClone);
