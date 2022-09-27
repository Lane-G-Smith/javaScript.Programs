let input = prompt("What's your name?")
function lastLetter() {
    lowerCase = input.toLowerCase();
    capitalLetter = lowerCase.slice(-1).toUpperCase();
    finalName = (lowerCase.slice(0, -1)) + capitalLetter;
    return finalName;
}
alert("hello " + lastLetter(input));
