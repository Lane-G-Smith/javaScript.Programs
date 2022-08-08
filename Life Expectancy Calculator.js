var age = prompt("How old are you?");


function lifeInWeeks(age) {
    
    var yearsRemaining = 84 - age;
    var months = yearsRemaining * 12;
    var weeks = yearsRemaining * 52;
    var days = yearsRemaining * 365;

    alert("According to the average life expectancy, you probably only have " + months + " Months, " + weeks + " weeks, " + " and " + days + " days left to live.");
}

lifeInWeeks(age);