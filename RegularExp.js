// regular expression(rg or RG or Rg)
// RG is the patterns used to match char combination in strings. 
// Rg are also objects
// Creating a regualr Expression
// we can create rg in two ways 
// first way :: pattern enclosed between slashes 
let re = /ab-c/;

// Second way is to call by constructor function
let rey = new RegExp('ab+c');

// Rg can be a single char or complicated mixture of multiple char
// it is used to perform text search and text replace
// syntax  |  /pattern/modifier;

// Rg are mostly used qith string methods:
// 1 search () it is used to search for a match and return the position of the match

 var str = " I am using search string method search in Rg";
 var y = str.search("search");
 console.log(y);
 // now using Search with Rg
 var x= str.search(/search/i, "search"); // it performs case -insensitive matching
 console.log(x);
 var u = str.search(/search/g,"search"); // perform global match , find all matches
 console.log(u);
 var i = str.search(/search/m,"search");  // it perfrom multiline matching
 console.log(i);

 //  using string replace with Rg

 var st = "my name is namam";
 var tes = str.replace(/naman/i,"YAsh"); 

 // RG Expression patterns 
 // [xyz] find any char between brackets
 // [0-9]  find ang digit btw the bracket
 // (x|y) find any alternatives sepreated by |

// lets test the sentence to serch for char"y"
/y/.test("my name is yash gaikwad");
//test () is Rg method used to search a pattern and retrun a boolean vlaue 

// exec() is another Rg methodit looks for a specified patern and unlike test it retruns text  as an object.
// if no match then it returns null
/t/.exec("my name is yash gaikwad"); // null 
/name/.exec("my name is yash gaikwad"); // returns the position of name.

