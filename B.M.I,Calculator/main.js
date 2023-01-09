// ask for user input values
let weightString = prompt("What is your weight in pounds?");
let heightString = prompt("What is your height in inches?");

// parse strings to integers
let weight = parseInt(weightString);
let height = parseInt(heightString);

//function calculated BMI with user input values
function bmiCalculator() {
    let bmi = (weight *703) / Math.pow(height, 2);
     Math.round(bmi);
}
//call the function and set return value to bmi
let bmi = bmiCalculator(weight, height);
//fix bmi calculated value to 2 digits
bmi = bmi.toFixed(2);
//alert the user of the results
alert("your BMI is " + bmi + "...... 18.5-24.9 is normal, 25-29.9 is overweight, 30-34.9 is obese");