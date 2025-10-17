Function = Reusable block of code for a specific task.
👉 Saves time, avoids repetition.
5 function types (commonly used):

Normal Function Declaration
function add(a, b) { console.log(a + b); }
add(10, 6);


➤ Easy to read and reuse.
Arrow Function (=>)
const greet = (name) => console.log(`Good Night! ${name}`);


➤ Short and modern syntax; doesn’t bind its own this.
Function Expression
const subtract = function(a, b) { return a - b; }


Return Statement
➤ Sends result back out of a function.

⚖️ Parameters vs Arguments
Parameters = placeholders in the function definition.
➤ Example: function add(a, b) → a and b are parameters.

Arguments = actual values you pass in when calling the function.
➤ Example: add(10, 6) → 10 and 6 are arguments.

🌧️ If / Else Statements
Used for decision-making in code.
if (money > 250) { ... } else { ... }

➤ Executes code depending on a true/false condition.
Example:
let money = 200;
if (money > 250) console.log("You can eat");
else console.log("You cannot eat");

⚡ Ternary Operator
Shorter version of if / else.
isHungry ? console.log("Eat Something") : console.log("Just drink water");


➤ ? = if true, : = else

🔢 Data Types
1. Primitive Data Types
Hold single values only.
Number → e.g. 25
String → e.g. "Sadaf"
Boolean → true / false
Undefined → variable declared but not assigned
Null → intentionally empty value
Symbol → creates unique identifiers
BigInt → handles very large numbers (123456n)

💡 Example:
let age = null; // type: object (special case)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false → each Symbol is unique

2. Non-Primitive Data Types
Hold multiple values.
Array → list of values
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // object

➤ Arrays are objects behind the scenes.
Object → key-value pairs

let student = { name: "Ali", age: 22, isEnrolled: true };
➤ Used to store related data together.