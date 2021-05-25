// scope refers to the availability of variables and functions
// two types of scope
//Global and local 
// Global Var Scope:
let y = "yash";
function namel( )
{
    y=3;
}
console.log(y); // here i'm calling y value without calling the function

namel(); // calling the function
console.log(y);// here i have called the global variable and aslo i ahve changed the value of y
// JS allows us to change global variable value

// i f i create a var without decalring it, it will become global variable
function nale(){
    u = "abhi"

}
nale();
console.log(u);

//Local Scope::

let z = "Real";
function nane(){
    let x = " Madrid"
    console.log(z+x);  // using global with local variable

}
 
nane();
console.log( z + x ); // now this will give error as im calling x out of its scope
