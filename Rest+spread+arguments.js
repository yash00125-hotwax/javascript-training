// it let us handle various input as parameters in a function
// it allows us to represent an indefinate number of arguments as an array.
// x {... parameters} , x = function [basic syntax without statement]

function x(...rest){    // for mulitple arguments using rest parameter
    let sum = 0 ; 
    for (let i of rest){       // using for loop .
        sum += 1;
    } 
    return sum;
 }

 


 // now calling the function with multiple parameters 
 console.log(x(10,20,88,12));   // using 4 parameters
 console.log(x(1,9,45,78,777,78,98,56)); // using 8 parameters
// parameter in a function call are the function arguments


// Spread Syntax and implementation.
Math.min(...[1,2,5]) // using spread this does the opposite of rest parameter it allows me to aexpand an array like shown into zero or more arguments

// Arguments Keyword 

// arguments arethe real value passed to the function
// argument object it contains an array of the arguments used when the function is called

function Ltest(i,u,t){
    console.log("lenght=",arguments.lenght);
    console.log(arguments[0],arguments[1],arguments[3]);
}
Ltest(1,2,3) // calling the function.
