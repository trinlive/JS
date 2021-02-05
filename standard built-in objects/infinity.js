/*
    The global property Infinity is a numeric value representing infinity.

    Property attributes of Infinity
    Writable : no
    Enumerable : no
    configurable : no

*/


// JS Demo : Standard built-in objects - infinity

const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
    console.log(`Math.pow(10, 100) === ${maxNumber}`);
}

console.log(`1 / maxNumber : `,1 / maxNumber); //0


/*
    Description
    infinity is a property of the global object. In other words, it is a variable in global scope.

    The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number.

    This value behaves slightly differently than mathematical infinity; see
    Number.POSITIVE_INFINITY for details.

    As defined by the ECMAScript 5 specification, Infinity is read-only (implemented in JavaScrip 1.8.5 / Firefox4)

*/


// Using Infinity

console.log(`Infinity :`, Infinity); // Infinity
console.log(`Infinity + 1 :`, Infinity + 1); // Infinity
console.log(`Math.pow(10, 1000) :`, Math.pow(10, 1000)); // Infinity
console.log(`Math.log(0) :`, Math.log(0)); // -Infinity
console.log(`1 / Infinity :`, 1 / Infinity); // 0
console.log(`1 / 0 :`, 1 / 0); // Infinity