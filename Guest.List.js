let guest_list = ["John", "Joe", "Jen", "Jane"];

let guest_name = prompt("In order to know if you are on the guest list, just tell me your first name. (remember to only Capitalize the first letter");

if (guest_list.includes(guest_name)) {
    alert("welcome!, you are on the guest list.");
} else {
    alert("sorry, you are not on the guest list.");
}


