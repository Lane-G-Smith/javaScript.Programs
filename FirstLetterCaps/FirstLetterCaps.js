
input = prompt("What is your name?");

function capitalize() {
  lowerCase = input.toLowerCase();
  finalName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  return finalName;
}
alert("hello " + capitalize(input));
