// // function -> resuable block of code hain jo particular task perform krty hain.
// // 5 methods of functions in javascript:
// function add(a, b) {
//   //  console.log("this is my add function")
//   console.log(a + b);
//   // 10 + 6// + arithmetic operator
// }
// add(10, 6); //invoke

// //  -- parameters , argument

// // parameters are input value/ varibale of our function
// //argument --> actual value hoti hai jo hm function ko pas krty hain

// // arrow function --> lambda function bhi kehty hain

// const greet = (name) => {
//   console.log(`Good Night! ${name}`);
// };
// greet("Resham");
// // = --> assignment operator

// // function expression
// const subtract = function (a, b) {
//   return a - b; // jo bhi answer aega wo return krdega
// };
// console.log(subtract(50, 20));

// // operation --> +,-,*,/, %
// function sum(num1, num2) {
//   console.log("Addition: " + (num1 + num2));
// }
// sum(40, 20);
// sum(100, 60);
// sum(66, 40);
// sum(500, 200)
// console.log("Sadaf" + " " + "Shahab"); //conctenation //
// console.log(`Sadaf Shahab`)

// if else --> decision maker --> statement jo kisi bhi condition k base pr decision leta hai
let money = 200;

if (money > 250) {
  console.log("Aap Khana Khany jasakty hain");
} else {
  console.log("Aap Khana Nahi Khany jasakty hain");
}

let isRaining = false;

if (isRaining) {
  //=== value + data type check krta hai
  console.log("Take an umbrella");
} else {
  console.log("You do not need an umbrella.");
}
//always return true or false

// ternary operator --> short method if else

let isHungry = false; //? --> true (if)
isHungry ? console.log("Eat Something") : console.log("just drink water");

// data types
// 1. primitive data types --> wo data type hoty hain jo single ko hold/store krty hain
// number, string, boolean , undefined, null , symbol, bigInt

let age = null;
console.log(typeof age);

// symbol --> make value unique
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);

let bigNumber = 123456678854454546156156n;
console.log("Checking bigint type: ", typeof bigNumber);

// 2. non-primitive data types --> wo data type hoty hain jo mutliple values ko hold/store krty hain
// object , array , function
// array --> collection of similar data types / different data types
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // it will return object because array is a type of object
let student = {
  // object contains key value pairs
  name: "Ali",
  age: 22,
  isEnrolled: true,
};
console.log(typeof student);
