
//state the names of the people on the guest list and initialize as as an array names guestList
let guestList = ["john", "joe", "jen", "jane"];

// prompt the user for name input
let guestName = prompt("In order to know if you are on the guest list, just tell me your first name");

// transcribe user input to lowercase to avoid errors
guestName = (guestName.toLowerCase());

//function that checks array for user input
function listCheck() { 

//if array includes user input name, log welcome
    if (guestList.includes(guestName)) {
        alert("welcome!, you are on the guest list.");
        }

//if array doesn't include user input name, log sorry       
    else {
        alert("sorry, you are not on the guest list.");
    }
}

//call the function to check the guest list array for user input
listCheck();