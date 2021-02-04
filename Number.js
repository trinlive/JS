var pi = 3.141;
var x

console.log(`pi : ${pi}`); // 3.141

x = pi.toFixed(0); // 3
console.log(`pi.toFixed(0) : ${x}`);

x = pi.toFixed(2); // 3.14  - for working with money
console.log(`pi.toFixed(2) : ${x}`);

x = pi.toPrecision(2) // 3.1
console.log(`pi.toPrecision(2) : ${x}`);

x = pi.valueOf() // 3.141
console.log(`pi.valueOf() : ${x}`);

x = Number(true); // 1
console.log(`Number(true) : ${x}`);

x = new Date(); // Wed Feb 03 2021 14:37:35 GMT+0700 (Indochina Time)
console.log(`new Date() : ${x}`);

x = Number(new Date()); // 1612337223457
console.log(`Number(new Date()) : ${x}`);

x = Number.MAX_VALUE; // 1.7976931348623157e+308
console.log(`Number.MAX_VALUE : ${x}`);

x = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log(`Number.MAX_SAFE_INTEGER : ${x}`);

x = Number.MIN_VALUE; // 5e-324
console.log(`Number.MIN_VALUE : ${x}`);

x = Number.MIN_SAFE_INTEGER // -9007199254740991
console.log(`Number.MIN_SAFE_INTEGER : ${x}`);

x = Number.NEGATIVE_INFINITY // -Infinity
console.log(`Number.NEGATIVE_INFINITY : ${x}`);

x = Number.POSITIVE_INFINITY // Infinity
console.log(`Number.POSITIVE_INFINITY : ${x}`);



x = 200e5; // 200 x 105