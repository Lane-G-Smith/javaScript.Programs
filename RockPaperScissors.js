let input = prompt("please type rock, paper, or scissors");
let number = (Math.random() * 3);
let response = Math.round(number);

if (input == ("rock") && response == (2)) {
    alert("Paper! Way to go loser!");
}
else if (input == ("rock") && response == (3)) {
    alert("Scissors! you win!");
}
else if (input == ("paper") && response == (3)) {
    alert("Scissors! you lose!");
}
else if (input == ("paper") && response == (1)) {
    alert("Scissors! You win!");
}
else if (input == ("scissors") && response == (1)) {
    alert("Scissors! you lose!");
}
else if (input == ("scissors") && response == (2)) {
    alert("Scissors! you win!");
}
else alert("It's a tie, try again");
