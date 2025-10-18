🧠 JavaScript Class Summary — DOM + Scopes
🧩 1. DOM Manipulation

The Document Object Model (DOM) lets you interact with HTML elements using JavaScript.

🧠 Example:

let myHeader = document.getElementById("myHeader");
let changeBtn = document.getElementById("changeBtn");

function changeText() {
  myHeader.innerHTML = "Today is second class";
  console.log("Your text is changed");
}

changeBtn.addEventListener("click", changeText);

🚀 What’s Happening Here

document.getElementById("myHeader") → Finds the HTML element with id="myHeader".

innerHTML → Changes the content inside that element.

addEventListener("click", changeText) → Runs the changeText() function when the button is clicked.

✅ Output: When the button is clicked, the text of the header changes to “Today is second class”.

🧮 2. Variable Scopes Review
🧍‍♀️ Global Scope

Declared outside any function or block → can be accessed anywhere.

var name = "Sadaf";
var name = "Sadaf Shahab"; // allowed with var (re-declaration)
console.log(name); // "Sadaf Shahab"

🏫 Function Scope

Declared inside a function → accessible only inside that function.

function names() {
  var student = "Resham";
  console.log(student); // ✅ accessible
}
names();
console.log(student); // ❌ ReferenceError

📦 Block Scope

{} → creates a block.
⚠️ var is not block-scoped, but let and const are!

{
  var student = "Resham Khan 123"; // var leaks out of block
}
console.log(student); // ✅ accessible (bad practice)

🔥 3. Key Takeaways

var → function scope only (not block scope). Avoid it if possible.

let & const → block scope, safer and cleaner.

Use addEventListener for interactive web pages.

Don’t forget: everything in the browser is an object, and the DOM is your playground.

💬 Pro Tip

Think of var like an “overly friendly” variable — it goes everywhere it’s not supposed to.
Use let and const to keep your code disciplined and bug-free. 😎
