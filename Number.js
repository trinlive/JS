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

x = 200e5; // 200 x 100 pow 5  = 20000000
console.log(`200e5 : ${x}`);


// Function syntax
x = '123'
console.log(`x = '123' : ${x}`) // returns the number 123


console.log('x === 123 :', x === 123 );
console.log(`Number('123') === 123`, Number('123') === 123 );



/* 
    Using the Number object to assign values to numeric variables 
    The following example uses the Number object's properties to assign values to several numeric variables 
*/

const biggestNum = Number.MAX_VALUE;                console.log(`bigestNum : ${biggestNum}`);  //1.7976931348623157e+308
const smallestNum = Number.MIN_VALUE;               console.log(`smallestNum : ${smallestNum}`); //5e-324
const infiniteNum = Number.POSITIVE_INFINITY;       console.log(`infiniteNum : ${infiniteNum}`); //Infinity
const negInfiniteNum = Number.NEGATIVE_INFINITY;    console.log(`NEGATIVE_INFINITY : ${negInfiniteNum}`); //-Infinity
const notANum = Number.NaN;                         console.log(`notANum : ${notANum}`); //NaN


/*
    Integer range for Number
    The following example show the minimum and maximum integer values that can be represented as Number object. 

    When parsing data that has bee serialized to JSON, integer values falling outside of this range can be expected
    to become corrupted when JSON parser coerces them to Number type.

    A Possible workaround is to use String instead. 
    Larger numbers can be represented using the BIgInt type.
*/

const biggestInt = Number.MAX_SAFE_INTEGER;         console.log(`biggestInt : ${biggestInt}`); //9007199254740991
const smllestInt = Number.MIN_SAFE_INTEGER;         console.log(`smllestInt : ${smllestInt}`); //-9007199254740991


/*
    Using Number to convert a Date object 
    The following example converts the Date object to a numerical value using Number as a function :
*/

let d = new Date('December 17, 1995 03:24:00'); // Sun Dec 17 1995 03:24:00 GMT+0700 (Indochina Time)
console.log(`d : ${d}`);
console.log(`Number(d) : `, Number(d)); //819145440000

/*
    Convert numeric strings and null to numbers
*/

x = Number('123');                                  console.log(`x = Number('123') : ${x}`); //123
x = Number('123') === 123;                          console.log(`x = Number('123') === 123 : ${x}`); //true
x = Number('12.3');                                 console.log(`x = Number('12.3') : ${x}`); //12.3
x = Number('12.00');                                console.log(`x = Number('12.00') : ${x}`); //12
x = Number('123e-1');                               console.log(`x = Number('123e-1') : ${x}`); //12.3
x = Number('');                                     console.log(`x = Number('') : ${x}`); //0
x = Number(null);                                   console.log(`x = Number(null) : ${x}`); //0
x = Number('0x11');                                 console.log(`x = Number('0x11') : ${x}`); //17
x = Number('0b11');                                 console.log(`x = Number('0b11') : ${x}`); //3
x = Number('0o11');                                 console.log(`x = Number('0o11') : ${x}`); //9
x = Number('foo');                                  console.log(`x = Number('foo') : ${x}`); //NaN
x = Number('100a');                                 console.log(`x = Number('100a') : ${x}`); //NaN
x = Number('-Infinity');                            console.log(`x = Number(-Infinity) : ${x}`); //-Infinity
