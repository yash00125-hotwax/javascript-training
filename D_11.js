// some() ::  it is an array method which checks if any elem in an array passes a test]
// it also executes the function once for each elem present in array.
// it will executee array elem without elem 
// it will not change the oriaignal array
// if it finds an array elem where the funvtion return a true value and so some will return true and will not check remaing values


// syntax :: array.some(function(currentVlaue , index , arr), thisValue)
var nnums = [10.78,12,5.2,58,45];
function checkOD(nums){
    return nnums >= document.getElementById('check_number').value;

}
function SOMEEEEE(){
    document.getElementById().innerHTML = numm.some(SOMEEEEE); // 
    document.getElementById().innerHTML = numm.every(SOMEEEEE); // used evyery as well  


};

// Every() ::  the only diffrence from some is that if it finds an array elem where the function returns a false value, every returns false an so will not checj rema

//websockets ::it is a way to have consistent browser connections.
// it dont have cross origin limitataions
//i can send and recive strings ans well as well as binary data

let GDR =  new WebSocket('https://www.thehindu.com/opinion/cartoon/'); // do check out this particluar cartoon from the hindu :) 

// sending message 
document.forms.publich.onsubmit = function(){
    let OGWEB = this.message.value;
    GDR.send(OGWEB); // sending message .// GDR is a part of germany before tthe fall of berlin wall in 1989 hmm specifically the EAST BERLON
     return false;  
}
GDR.onmessage = function(WESTBERLIN){
    let berlin = WESTBERLIN.data;
    let berlinELem = document.createElement('div');
    berlinELem.textContent = berlin;
    document.getElementsById('cartoon the Hindu ').ptepend(berlinELem);
}
// i have made this specifically or the client side by this he can share his thugts onto the next person just a protypte
// with the help of a simpl eform creation in html this code is executable just a form with some input and as text will do it.
