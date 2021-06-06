var y= new Date(2020,12,12,2,30,10);

// six number will specify year, month , day ,hour, minute, second
// five numbers specify year,month,day,hour and minute
 let x = new Date(2020,12,12,3,40);
 var t = new Date('November 12 , 2019 11:45:12');


 // object to primitive conversion
 //object are added and subtracted or printed with the help of alert.
 // in all such cases boject are automatically converted to primitives and after that the operation is carried out

 // numeric conversion will hapeen when we apply any mathematical functions.
 // string conversion it will hapeen when _
 var u = [77,887,9854];
 var i = ['yash','training','javascript'];
 console.log(Document.write(u.toString()));
 console.log(Document.write(i.toString()));
Document.write(u.valueOf());


// promise  :: a promise is a special js object that links producing code and consuming codetogether
// promise syntax
let p = new Promise(function(resolve, reject){
    // here a code can be wriiteb
    setTimeout(() => resolve('possitively yes'),2000); // using timwout proprety it will evaluate resolve after 2000 ms or 2 seconds in this partocualr probelm
    setTimeout(() => reject(new Error('sorrry invalid auth')),10000); 
}) ;
// new promise is an executer 
// reject(error) :: if someway an eroor occur , error is the error object
// reolve :: the job whateva it is if  it finishes sucessfully with result value again it can be anyhthing
//p.then(     .then syntax 
  //  function (reuslt) 
    //function(error)
//);
p.then (
    result => alert(result),
    error => alert(error)

);
// now if i want only one lets ay resolve is the one o need 
// now i will send an alert using then about the resolved method 
p.then(alert); //this will show resolve property result 

//.catch  :: generally it is used for error
p.catch(alert); //will show reject prop values 


// .finally it os used mostly fpr calenup or stopping or loasing indicators
.finally (() => alert('promise ready'))
.then(result => alert(rsult));

//now i will impment chaining
new Promise(function(resolve,rejcet) {
    setTimeout(() => resolve(11),1000 );
})
.then(function(result) {
    alert(result);
    return result * 4;
})
.then(function(result) {
    alert(result);
    return result * 2;
}).then(function(result) {
    alert(result);
    return result * 2;
}).then(function(result) {
    alert(result);
    return result * 2;
}).then(function(result) {
    alert(result);
    return result * 2;
});

let promise = fetch('C:\Users\Yash Gaikwad\.vscode\extensions\yg_java')
     .then (response => response.json())
     .then (user => fetch('https://api.google.com/user/${user.name}'))

//     fetch is used to load informaion about the user 
     .catch(error => alert(eroor.message)) ;  // eroor handling using catch function   

    
new Promise((resolve,reject ) => {
    resolve ("my name is yash");
    throw new Error("No they lost the game")

 
}).then ((result) =>{
    PSG_lost();    // no such function exist

})
.catch (function(error) {
    alert("Psg lost the game to Madrid");

)}.then (() => alert('NExt game is btw bayern vs madrid')); // here it will tell no such function exist      


//  async / await

// async :: async function means that this function will always returns promise 
// async will wrap non promises 

// simple function ::

async fuction y():{
    return Promise.resolve(12);
    let yeto =  new Promise ((resolve, reject) =>{
        setTimeout(() => resolve('yes it s done lets go '),2000)
    }); // will use it for await see below

    let rep = await yeto ;
    alert(rep);  // await :: this function will make js wait until that primise made in aync settles and returns its result.
}
y.then(alert);  // this will send the value 12 


