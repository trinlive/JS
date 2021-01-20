
// ES6 Destructuring with array sequence
const fruits = ["apple", "mango", "banana", "pineapple"];

const [ a0, a1, a2 ] = fruits;
console.log(a0, a1, a2);

const [ b0, ,b2] = fruits;
console.log(b0, b2)

const [ apple,...rest] = fruits; 
console.log(apple,...rest);console.log(a0, a1, a2);


// Destructuring Arrays and Object both Example1
const groceryList = [
    { item: "Apples", price:25, category: "fruits" },
    { item: "Mangoes", price:35, category: "fruits2" },
];

// Old Way
const gr1 = groceryList[0].item;
console.log(gr1);
const gr2 = groceryList[1].category;
console.log(gr2);

// ES6 Destructuring with array sequence
const [ { item } ] = groceryList;
console.log(item);

const [ { price } ] = groceryList;
console.log(price);


// Destructuring Arrays and Object both Example2
const company = {
    name: "google",
    locations: ["Singapore", "India", "Germany"],
}

//Old Way
const loc1 = company.locations[0];
console.log(loc1);
const loc2 = company.locations[1];
console.log(loc2);


//ES6 Destructuring
const { locations: [ l1 ]} = company;
console.log(l1);

const { locations: [ ,l2 ] } = company;
console.log(l2);
