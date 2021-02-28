

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
var num2 = [6,7,8,9,10];
numbers.push(...num2);
console.log(numbers);


//5. Unshift Add an element to the beginning of an Array.
foods.unshift('🐝');
console.log(foods);

// Tip: Use unshift with the spread operator (...) to concat elements at the beginning.
numbers.unshift(...num2);
console.log(numbers);


//6. Pop removes the last element of the array.
//Tip: We can use the pop method in stack implementation.
result = foods.pop();
console.log(result);
console.log(foods);

/* 
    7. Shift Remove the first element of the array.
    Tip: We can use the shift method in dequeue operations on Queue implementation.
*/
foods.shift();
console.log(foods);

/*
    8. Join() the elements of Array to String.
    Tip: use as an alternative to string concatenation.
*/

var joinedFood = foods.join();
var joinedFood1 = foods.join('**');
console.log(joinedFood);
console.log(joinedFood1);
console.log(foods);

var arr = ['J','a','v','a'];
var str = ' ';

// whit out join
for (let i = 0, len = arr.length; i < len ; i ++) {
    str += arr[i];
}
console.log(str);

var str2 = arr.join('');
console.log(str2);