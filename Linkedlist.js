// Linked list is a dynamic data structure also we can add or remove element.
// Linked stores elem sequentially.
class L1 {
    constructor (elem) {
        this.elem = elem;
        this.next = null ;

    }
}
class L2 {               // creating a linked list class
    constructor(){
        this.head = null;    // this keyword refer to current object 
        this.size = 0;
    }
    addd(elem) {
        var n = new L1 (elem); // here it creates a new node
        var current;  // storing value

        if(this.head == null){     // using if tocheck it the list is empty or not
                //      using is equal to operator
            this.head = n;
        }
        else{
            current = this.head;  

            while(current.next){          // this conditon will iterate to the end of the list
                current = current.next;
            }
            current.next = n ;     // adding the value
        }
        this.size++;   // using increment operator 

    }

    remove(elem){                        // this function will remove the value 
        var current = this.head;
        var p = null;

        while(current != null){              // heck if its null
            if (p == null ) {                //  using is equal to operator.     
                this.head = current.next;
            }
            else{
                p.next=current.next;

            }
            this.size--;     // using decremnet operator
            return current.elem;

        }
        p = current;
        current = current.next;

    }
    return  -1;
 

}


// now We can Add a elem at aspecific position
// addAT(elem , index)

// we cam remove a elem from a specific position
//remove(elem,index)
