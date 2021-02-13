

//1. filter() method creates a new array with elements that return true from the callback function.
var foods =  ["🍎", "🍊", "🍗", "🍕", "🥩", "🍎"];
var result = foods.filter(foods => foods.length = 4)
console.log(result)

//2 lastIndexOf() a given element in the Array, if it is not present, it returns -1
result = foods.lastIndexOf('🍎'); 
console.log(result)

//3. Push add element to the end of an Array.
result = foods.push('🍇');
console.log(foods);

// Tip Use push with the spread operator (...) as an alternative to the concat method.
var numbers = [1,2,3,4,5];
var num2 = [6,7,8,9,10,11,12,33,44,44,33,22,];
result = numbers.push(...num2);

console.log(result);
console.log(numbers);
