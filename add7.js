let startWord = prompt("Give me a number and I will add seven to it.");
let startNumber = parseInt(startWord);
function add7() { 
  let endNumber = (startNumber + 7);
  return endNumber;
}
alert(add7(startNumber));
