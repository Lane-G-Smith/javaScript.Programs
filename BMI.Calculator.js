

function bmiCalculator(weight, height) {
    var bmi = (weight *703) / Math.pow(height, 2);
    return Math.round(bmi);
}

// place weight in pounds followed by height in inches where green numbers are

var bmi = bmiCalculator(215, 73);
bmi = bmi.toFixed(2);
console.log (bmi + "......18.5-24.9 is normal, 25-29.9 is overweight, 30-34.9 is obese");
