// let output be displayed as an array
let output = [];

//set count number to 1
let count = 1;


function fizzBuzzWL() {

//when count exceeds 100, the function will stop looping
    while(count <=100) {

//if count is divisible by 3 and 5 add fizzbuzz to the end of the output array
        if (count % 3 === 0 && count % 5 === 0) {
            output.push ("fizzBuzz");
            }

//if count is divisible by 3 add fizz to the end of the output array
        else if (count % 3 === 0) {
            output.push("fizz"); 
            }

//if count is divisible by 5 add buzz to the end of the output array            
        else if (count % 5 === 0) {
            output.push("buzz");
        }

//if count is not divisible by 3 or 5 add count value to the end of the output array        
        else {
            output.push(count);
        }

//after performing one of the if, else if, else statements above, add 1 to count       
        count++;
        }
}

//call the function
fizzBuzzWL();

//log the output array
console.log(output);
