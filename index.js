let myHeader = document.getElementById("myHeader");
let changeBtn = document.getElementById("changeBtn");
console.log(myHeader);
function changeText() {
  myHeader.innerHTML = "Today is second class";
  console.log("Your text is changed");
}
changeBtn.addEventListener("click", changeText);

var name = "sadaf"; // global scope variable
var name = "sadaf shahab"; // global scope variable
console.log(name);

function names() {
  var student = "Resham"; //function scope variable (can be accessed only inside the function)
  console.log(student);
}
names();
console.log(student);

//block scope {}
{
  var student = "Resham Khan 123"; //global scope variable (can be accessed outside the block)
}

console.log(student);
function names() {
  console.log(student);
}
names();
