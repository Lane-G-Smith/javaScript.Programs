let output = [];

function fizzBuzzFL() {
    for (let count = 1; count < 101; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push ("fizzBuzz");
        } else if (count % 3 === 0) {
            output.push("fizz"); 
        } else if (count % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(count);
        }   
    }
     console.log(output);
}
