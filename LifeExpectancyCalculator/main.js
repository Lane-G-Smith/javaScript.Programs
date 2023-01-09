//ask the user for their age, instantiate variable to age
let age = prompt("How old are you?");

//function calculates years left based on life expectancy of 84 years
//months, weeks, and days are calculated from the years number 
function lifeCalculator() {
    var years = 84 - age;
    var months = years * 12;
    var weeks = years * 52;
    var days = years * 365;
//alert the user of the calculated answer
    alert(`According to the average life expectancy, you probably only have a total of time left to live of   ---${years} years---   ---${months} Months---   ---${weeks} weeks---   ---${days} days---`);
}

// call the life calculator function
lifeCalculator();


//needs a null for invalid user input
//needs variables such as male and female
//needs a function to adjust for smoker, obese, socioeconomic status, race
