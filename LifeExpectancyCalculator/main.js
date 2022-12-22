let age = prompt("How old are you?");


function lifeInWeeks() {
    
    var years = 84 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;

    alert(`According to the average life expectancy, you probably only have a total of time left to live of   ---${years} years---   ---${months} Months---   ---${weeks} weeks---   ---${days} days---`);
}
lifeInWeeks();
