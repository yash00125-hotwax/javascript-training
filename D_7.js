// Resorce loading::
// two events which can be used are:
//onload and onerrror
// onload :: it load triggers on a succesful load and executes the code/
let script = document.createElemnet('script'); // creating a script
script.src = "C:\Users\Yash Gaikwad\.vscode\extensions\yg_java\first.js"; // loading a script i have already made as first.js 
// what i have done here is get the path of script and tell src to load from the given address
document.head.append(script);

// now i will use script onload to load it 
script.onload = function(){
    alert(_.VERSTION); // here it will show libary version of the script called above namely first.js

};
// now using onerror if the above script is failed toolad or doesnot even exixst

script.onerror = function(){
    alert("loading error _ onerror for script" + this.src); // here this function calls the function object we created [let script]

};

// extent of onkload and onerror are limited 
//eroor that occur during script processing and execution are out of scope

// to lkeep a track of script a window.onerror which is aglobal handler
// 




// pop up window
//by using pop up i can show additional dcuments to user
//main idea is to show more content without closing the current window.

window.open('https://www.google.co.in/'); //using a pop up window to open google also its window method to open 
// now i will use a button method to intialze pop up method like when we aregiven 
//option of what id do you want login with gmail,facebook,
button.onclick= () => {
    window.open("https://www.facebook.com");

};
button.onclick= () => {
    window.close("https://www.google.com");
    window.blur("https://www.facebook.com");
    window.open("https://www.youtube.com");
    window.focus("https://www.youtube.com");
    

};





