let weightString = prompt("What is your weight in pounds?");
let heightString = prompt("What is your height in inches?");
let weight = parseInt(weightString);
let height = parseInt(heightString);

function bmiCalculator(weight, height) {
    let bmi = (weight *703) / Math.pow(height, 2);
    return Math.round(bmi);
}
let bmi = bmiCalculator(weight, height);
bmi = bmi.toFixed(2);
alert(bmi + "......18.5-24.9 is normal, 25-29.9 is overweight, 30-34.9 is obese");
