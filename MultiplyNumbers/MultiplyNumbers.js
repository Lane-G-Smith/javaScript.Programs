alert("give me two numbers and I will multiply them");
let startWord1 = prompt("what is the first number?");
let startWord2 = prompt("What is the second number?");
let startNumber1 = parseInt(startWord1);
let startNumber2 = parseInt(startWord2);
function multiply() { 
  let endNumber = (startNumber1 * startNumber2);
  return endNumber;
}
alert(multiply());
