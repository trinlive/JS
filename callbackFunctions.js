/*
    javascript Callback Functions
    source : https://tinyurl.com/y52owkop

    Introduction Javascript Callback Functions for Beginners
    Callbacks are a great way to handle something after something else has been completed. By something here we mean a function execution. If we want to execute a function right after the return of some other function, then callbacks can be used.

    JavaScript functions have the type of Objects. So, much like any other objects (String, Arrays etc.), They can be passed as an argument to any other function while calling. In this article I will try to explain them in the simplest possible way. I hope it helps someone

    Javascript Functions
    In Javascript functions are objects, like strings, arrays, etc. So if it is an object, this means that you can pass wherever you want, as you would with every object. For example:
*/


var CalculateArea_1 = function(a, b) {

    var area = a * b;
    console.log("calculated area fo "+ a + " and " + b + " is equal to : " + area);
    return area;
}


function rectangleCalculation_1(a, b, calculateFunction) {
    calculateFunction(a, b);
}

rectangleCalculation_1(20, 4, CalculateArea_1);


/*
    In this short example, we see that the "calculateArea" function is passed to the "rectangleCalculation" function as one of the parameters, and it's called inside it. It's very convenient if you have some abstract functions with some common functionality and need to extract some specific functionality. For example: 
*/


function calculateArea (a, b) {
    var area = a * b;
    console.log("Calculated area is equal to: " + area);
    return area;
}


function calculatePerimeter (a, b) {
    var perimeter = 2 * (a + b);
    console.log("Calculated perimeter is equal to : " + perimeter);
}


function rectangleCalculation(a, b, calculateFunction) {
    console.log("Input parameters: a = " + a + "; b = " + b + ";");
    calculateFunction(a, b);
}


rectangleCalculation(5, 4, calculateArea);
rectangleCalculation(5, 4, calculatePerimeter);



/*
    Javascript Callback Functions
    A callback function is a function which is passed to another function, and it is it's responsibility when to call a passed function. This is very convenient when performing long I/O operations, as it allows asynchronous behaviour. Callback functions are widely used in most Javascript frameworks. In the beginning, especially for those who programmed in Java or a similar language, it's a little bit weird, because from a code sequence you cannot be sure that it will be executed line by line. For example:
*/


function callDelayFunction(callbackFunction) {
    setTimeout(function() {
        callbackFunction();
    }, 3000);
}


console.log("Starting")

callDelayFunction(function() {
    console.log("Callback function");
});

console.log("Ending")