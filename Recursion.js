// Recursive function is a function that call itself.
let n = function g( Nu) {
    conslole.log( Nu ); // function calling iteself [Recusrsion]
    let next_n = Nu - 1;
    if (next_n > 0 ){
        g(next_n);
    }
}

let u = n; //assiging function to variable
n = null; // function reference to null
u(7); // calling n function
// using of null 
// a recursive function alwasys has a condition taht stops the function from calling itself
// when the function name is set to null the ecurdive function will stop itself.




