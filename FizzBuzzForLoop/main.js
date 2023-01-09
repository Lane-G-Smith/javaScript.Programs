// ask user for number between 1 and 100 and parse to integer
let number = parseInt(prompt("Give me a number between 1 and 100"));

// for loop sets i as a countdown timer
// i is set to 1, so long as i<=number execute code in brackets, then add 1 to i
for (let i = 1; i <= number; i++) {

// if i is divisible by 3 and 5 log fizzbuzz
   if (i % 3 === 0 && i % 5 ===0){
      console.log("fizzbuzz");
   }

//if i is divisible by 3 log fizz
   else if (i % 3 === 0) {
      console.log("fizz");
   }

// if i is divisible by 5 log buzz   
   else if (i % 5 === 0) {
      console.log("buzz");
   }

// if i is not divisible by 5 or 3 log number
   else {
         console.log(i); }
};
