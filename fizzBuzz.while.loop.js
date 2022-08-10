var output = [];
var count = 1;

function fizzBuzzWL() {
    
    while(count <=101) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push ("fizzBuzz");
        } else if (count % 3 === 0) {
            output.push("fizz"); 
        } else if (count % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(count);
        }
     count++;   
    }
console.log(output);
    }
