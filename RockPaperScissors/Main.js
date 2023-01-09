// identify in the console that the game has started
console.log("here we go!");

// set the playable input options to an array [0,1,2]
let options = [ "rock", "paper", "scissors"];

// set initial player score
let playerScore = (0);

// set initial computer score
let computerScore = (0);

// ask the player for input and store the player input as playerChoice
playerChoice = prompt("type rock, paper, or scissors");

let i = (computerScore + playerScore);

// change playerChoice to all lower case
playerChoice = playerChoice.toLowerCase();

// print to console for diagnostics
console.log(playerChoice);

//check user input for empty or incorrectly spelled words. Return as variable correctlyTyped true/false
function check(options, playerChoice) {
    if (options.includes(playerChoice) && (playerChoice != null)) {
        return correctlyTyped = true }
    else {
        return correctlyTyped = false }
};

// call the check function
check(options, playerChoice);

// print true/false to console for diagnostics
console.log(correctlyTyped);

// randomly generate number between 0 and 1
// multiply it by number of objects in array (3)
// round to the nearest whole number
// store number in variable computerChoice
let computerChoice = Math.floor(Math.random()*options.length);

// print computerChoice to console for diagnostic purposes
console.log(computerChoice);


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

// call the function to play a hand
roundWin(computerChoice, playerChoice);

// function adds 1 to each round played until i = 5
// print result of each round winner
const gameRounds = () => {
    for (let i = 0; i < 5; 1++) {
        const playerChoice = prompt("type rock, paper, or scissors");
        const computerChoice = Math.floor(Math.random()*options.length);options;
        roundWin(computerChoice, playerChoice);
    }
}

// call the gameRound function
gameRounds();

// print the score of the hands played so far
console.log(playerScore);
console.log(computerScore);

// roundWin(computerChoice, playerChoice);
// console.log roundWin();
// console.log the result of the match

// add one to the counter for computer or player wins

