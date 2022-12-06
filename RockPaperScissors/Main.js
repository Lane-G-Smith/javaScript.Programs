
console.log("here we go!");
// identify in the console that the game has started

const options = [ "rock", "paper", "scissors"];
// set the playable input options to an array [0,1,2]

let playerScore = (0);
// set initial player score

let computerScore = (0);
// set initial computer score

let tieScore = (0);
// srt initial tie score

let playerChoice = prompt("type rock, paper, or scissors");
// ask the player for input and store the player input as playerChoice

playerChoice = playerChoice.toLowerCase();
// change playerChoice to all lower case

let check = () => (options.includes(playerChoice)) && (playerChoice != null)
//check user input for empty or incorrect spelling/words

let computerChoice = () => {
    if ((check()) == true) {options[Math.floor(Math.random()*options.length)];}
    else { [alert("You may have mistyped, please try again."),  playerChoice = prompt("type rock, paper, or scissors")
]};
}
// randomly generate rock paper or scissors as long as the check is true for the computer
console.log(computerChoice(options));
console.log(playerChoice);

let roundWin = () => {
    if ((computerChoice() == ("rock")) && (playerChoice == ("paper"))) 
    { 
         [playerScore == (playerScore + (1)), console.log("I threw rock, you win!")];
    }
    else if ((computerChoice() == ("rock")) && (playerChoice == ("scissors"))) 
    {
        return [computerScore = (computerScore + (1)), console.log("I threw rock, I win!")] 
    }
    else if ((computerChoice() == ("rock")) && (playerChoice == ("rock")))
    {
        return [tieScore == (tieScore + (1)), console.log("I threw rock, it's a tie!") ]
    }
    else if ((computerChoice() == ("paper")) && (playerChoice == ("paper"))) 
    {
        return [tieScore == (tieScore + (1)), console.log("I threw paper, it's a tie!")]
    }
    else if ((computerChoice() == ("paper")) && (playerChoice == ("scissors"))) 
    {
        return [playerScore == (playerScore + (1)), console.log("I threw paper, you win!")]
    }
    else if ((computerChoice() == ("paper")) && (playerChoice == ("rock"))) 
    {
        return [computerScore = (computerScore + (1)), console.log("I threw paper, I win!")]
    }
    else if ((computerChoice() == ("scissors")) && (playerChoice == ("paper"))) 
    {
        return [computerScore = (computerScore + (1)), console.log("I threw scissors, I win!")]
    }
    else if ((computerChoice() == ("scissors")) && (playerChoice == ("scissors"))) 
    {
    return [tieScore == (tieScore + (1)), console.log("I threw scissors, it's a tie!")]
    }
        else if ((computerChoice() == ("scissors")) && (playerChoice == ("rock"))) 
    {
    return [playerScore == (playerScore + (1)), console.log("I threw scissors, you win!")]
    }      
}

// console.log(roundWin(computerChoice, playerChoice));
// console.log the result of the match

// add one to the counter for computer or player wins

// start again








function greet(){
    console.log("balls");
}
// this is a FUNCTION DECLARATION. It's empty and uses the function word
// function declarations get "hoisted" and are therefore read at the very top of the file

greet();
// call that function


const speak = function(){

};
// this is called a FUNCTION EXPRESSION, and is the only time you use a semicolon after curly braces. when a const or let = function
// function expressions do not get hoisted to the top of the page
// you can only call this function when it is above the point on the page you try to call it from

speak();
// call that function


const speak = function(){
    console.log();
};



