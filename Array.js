

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

// with join
var str2 = arr.join('');
console.log(str2);

/*
    9.Concat
    Concat an Array with arguments.

*/

var array9 = [1,2,3,4,5];
var newArray = array9.concat(1,2,3, [12,12,34], undefined, null);
console.log(newArray);


/*
    10. Reverse 
    Reverse the elements of the array.
*/

var foods = ["🍎", "🍊", "🍗", "🍕", "🥩"];
foods.reverse();
console.log(foods);

//Tip: Reversing string.
var str = "Anitha";
var strArray = [...str].reverse().join('');
console.log(strArray);


/* 
    11. indexOf
    First index of a given element in the Array, if it is not present, it returns -1
*/

var foods = ["🍎", "🍊", "🍗", "🍕", "🥩", "🍎"];
foods.indexOf('🍎'); //0
foods.indexOf('🍔'); // -1


/*
    12. Some
    Checks if any of the elements return true from the callback function.
*/

var num = [1,2,3,4,10, 12];
console.log(num.some(n => n > 10));
console.log(num.some(n => n > 100));
console.log(num.some(n => n != null));

/*
    13. Every
    Check if all fo the elements return true from the callback function.
*/

var num = [1,2,3,4,10, 12];
console.log(num.every(n => n > 10));
console.log(num.every(n => n > 0));