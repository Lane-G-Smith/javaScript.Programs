let output = [];

function fibonacci () {
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        output.push(output[output.length - 2] + output[output.length - 1]);
        if (n === output.length) {
            
        }
        else{
            
        }
    }
return output;
}
fibonacci();

// number is the sum of the two numbers before it
//
1,1,2,3,5,8,13