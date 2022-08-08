var guestlist = ["John", "Joe", "Jen", "Jane"];

var guestname = prompt("In order to know if you are on the guest list, just tell me your first name. (remember to only Capitolize the first letter");

if (guestlist.includes(guestname)) {
    alert("welcome!, you are on the guest list.");
} else {
    alert("sorry, you are not on the guest list.");
}


