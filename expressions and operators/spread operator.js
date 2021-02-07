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

