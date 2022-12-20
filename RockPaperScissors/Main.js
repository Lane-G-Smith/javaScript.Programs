console.log("here we go!");
// identify in the console that the game has started

let options = [ "rock", "paper", "scissors"];
// set the playable input options to an array [0,1,2]

let playerScore = (0);
// set initial player score

let computerScore = (0);
// set initial computer score

playerChoice = prompt("type rock, paper, or scissors");
// ask the player for input and store the player input as playerChoice

let i = (computerScore + playerScore);

playerChoice = playerChoice.toLowerCase();
// change playerChoice to all lower case

console.log(playerChoice);
// print to console for diagnostics


function check(options, playerChoice) {
    if (options.includes(playerChoice) && (playerChoice != null)) {
        return correctlyTyped = true }
    else {
        return correctlyTyped = false }
};
//check user input for empty or incorrectly spelled words. Return as variable correctlyTyped true/false

check(options, playerChoice);
// call the check function

console.log(correctlyTyped);
// print true/false to console for diagnostics

let computerChoice = Math.floor(Math.random()*options.length);
// randomly generate number between 0 and 1
// multiply it by number of objects in array (3)
// round to the nearest whole number
// store number in variable computerChoice

console.log(computerChoice);
// print computerChoice to console for diagnostic purposes

function roundWin(computerChoice, playerChoice){  
        if ((computerChoice == ("0")) && (playerChoice == ("paper"))) 
        { 
            [playerScore++, console.log("Computer throws rock, you win!")];
        }
        else if ((computerChoice == ("0")) && (playerChoice == ("scissors"))) 
        {
            return [computerScore++, console.log("Computer throws rock, you lose!")] 
        }
        else if ((computerChoice == ("0")) && (playerChoice == ("rock")))
        {
            return console.log("Computer throws rock, it's a tie!")
        }
        else if ((computerChoice == ("1")) && (playerChoice == ("paper"))) 
        {
            return console.log("Computer throws paper, it's a tie!")
        }
        else if ((computerChoice == ("1")) && (playerChoice == ("scissors"))) 
        {
            return [playerScore++, console.log("Computer throws paper, you win!")]
        }
        else if ((computerChoice == ("1")) && (playerChoice == ("rock"))) 
        {
            return [computerScore++, console.log("Computer throws paper, you lose")]
        }
        else if ((computerChoice == ("2")) && (playerChoice == ("paper"))) 
        {
            return [computerScore++, console.log("Computer throws scissors, you lose!")]
        }
        else if ((computerChoice == ("2")) && (playerChoice == ("scissors"))) 
        {
            return console.log("Computer throws scissors, it's a tie!")
        }
        else if ((computerChoice == ("2")) && (playerChoice == ("rock"))) 
        {
            return [playerScore++, console.log("Computer throws scissors, you win!")]
        }      
    }

roundWin(computerChoice, playerChoice);
// call the function to play a hand

const gameRounds = () => {
    for (let i = 0; i < 5; 1++) {
        const playerChoice = prompt("type rock, paper, or scissors");
        const computerChoice = Math.floor(Math.random()*options.length);options;
        roundWin(computerChoice, playerChoice);
    }
}
// function adds 1 to each round played until i = 5
// print result of each round winner

gameRounds();
// call the gameRound function

console.log(playerScore);
console.log(computerScore);
// print the score of the hands played so far


// roundWin(computerChoice, playerChoice);
// console.log roundWin();
// console.log the result of the match

// add one to the counter for computer or player wins

