// blobing :: it is a texhnique in javascript it consist of optional string.
//it is a file like b=object consist of immutable data they can be read as bianry ir text data
//
//syntax of blob :: new Blob(blobparts,options);
//blobparts :: it consist of array of blob or string values.
//options :: object like type and endings
// im using let here because it will remian in scope and hoisting can not be done by js on it.
let blob = new Blob(["<html>...<body> <p> this is yash </p></p></body></body></html>"], {type: 'text/html'}); // creating blob from a string
// first argument hould be an array that the criterai we have to work with
//


// we acan slso using slicing in blob 
//syntax is blob.slice([byteStart], [byteEnd], [contentType]);
//bytestart:: the starttug byte by deafult 0.
// byte end= last byte
// contentType  = the tpye of the new blob
// negative numbers like array are allowes to as it is similar to array
// blob allows us to create blob from everything for ex ::: buffersource,Uint8Array,arraybeffer
let f = new FileReader();
f.readAsArrayBuffer(blob);
f.readAsBinaryString(blob);
f.onload= (event) => {        // used onload fucntion as well as arrow functions
        let arrayBuffer = f.result;
        let BinaryString = f.results
} ;

// blob represent bonary data with types


// File inhertis from blob 
// symtax :: new File(fileparts ,dileName,[options])
//fileParts - is an array pf blob vlaues
// file name :: file name string
// oprions:: optional object \\

// file inhertis from blob they have sma eproperties and name , lastModilfed - the timeatamp of last modifaction
<input type="file" onchange="readFile(this)">

<script>
function readFile(input) {
  let file = input.files[0];  
  
  let reader = new FileReader();     // filereader

  reader.readAsText(file);


  reader.onerror = function() {     // using onerro function 
    console.log(reader.error);
  };

  reader.onload = function() {          // using onload funvtion
    console.log(reader.result);
  };

 
}
</script>

</input>
//fileReader objettes are able to read from a file or a blob itcan be read in string, arrayBuffer and DataUrl


// Mixin :: well here what it does os mixin is a class conataing methods that can be used by other classes without a need to inherit it
// now it gets interresting mxin provides methods that perform a certain behavior , but i just do not use ot alone i can use it ot add the behavior to other classes

let yashMixin={
    play(football){
        alert(football);
    }
};
let yashiiMixin = {
    __proto__:yashMixin, // herer im setting the prototype
    ppllay(){
        super.play('Im playing' + ${this.club} );

    }
    pplayer() {
        super.play('Kross' + ${this.club});
    }
};
class Main{
    constructor(club){
        this.club = club;
    }
}

Object.assign(Main.prototype, yashiiMixin); // here i copiesd the methods

new Main("Real Madrid").ppllay();
 
