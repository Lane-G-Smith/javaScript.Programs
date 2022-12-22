let guestList = ["john", "joe", "jen", "jane"];

let guestName = prompt("In order to know if you are on the guest list, just tell me your first name");

guestName = (guestName.toLowerCase());

function listCheck() { 
    if (guestList.includes(guestName)) {
        alert("welcome!, you are on the guest list.");
        }
    else {
        alert("sorry, you are not on the guest list.");
    }
}
listCheck();