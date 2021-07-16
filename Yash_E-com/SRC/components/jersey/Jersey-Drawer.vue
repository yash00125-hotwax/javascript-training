<template>
<div class="drawer" v-bind:class="{show: active}">
            <div class="close-drawer-now" v-on:click="$emit('close-drawer')">  
               
                       X
               
            </div>
              <div v-if="jersey" class="Jersey-information">
                <h3 class="text-center"> {{jersey.name}}</h3>
                <p class="jersey-description"> {{jersey.description}}</p> 
                <h3 class="text-center">{{ jersey.price}}</h3>

                <div class="cart-total-amount" v-if="jersey_total" >
                      
                    <h3> IN CART</h3>
                    <h4> {{ jersey_total }}</h4> 
                      
                </div>
                <div class="button-box">
                        <button class="add" @click="AddTOCart()">  add </button>
                        <button class="remove" @click="RemoveFromCart()" >  Remove  </button> 
                </div>
               
              </div>
        </div>

</template>  



<script>
export default {
    props: ['jersey','active' ],
     methods: {
    
        AddTOCart() {
            this.$store.commit('AddTOCart',this.jersey)
        },
        RemoveFromCart(){
            this.$store.commit('RemoveFromCart',this.jersey)
        }

    },
    computed:{     
                           // jerysey total is a computed property as it is calculating the data.
         
         jersey_total(){
             //return 1 
             


            return this.$store.getters.JerseyQuantity(this.jersey)  // fro herer it wil go to state will search and then return the total quantitiy
         }      

    } 
   
}
</script>

<style lang="scss"> 
.drawer-background{                   /* */
    width: 100%;
    height: 100vh;
    position: fixed;
    right: 0;
    top :0;
    background-color: rgba(109, 123, 168, 0.75);
    z-index:100;
    display : none;
    transition: display .5s ease;

    &.show {                
         
       display:block;
       }
}

.drawer{
    width:98vw;
    height: 100vh;
    background-color:whitesmoke;
    position:fixed;
    top:0;
    right: -100vw;      /* it will be hidden in the right of our screen */  
    padding: 20px;
    transition: right .6s ;
    z-index: 101 ;       /* because this one will be on top of the background -color*/
    overflow-y:scroll;

    &.show{
    right: 0;
    } 


 
}
.close-drawer-now{
    font-size: 1.5rem;
    padding: 5px;
    border-radius: 5px;
    left:10px;
    border:3px solid darkgray;
    color: darkgray;
    width: 20px;
    float: left;
    cursor: pointer;

    &:hover{
          background-color:lightgray;
             

    
    }
}
.jersey-information{
      
        display: flex;
        justify-content: center;
        flex-direction: column;

        p.description{
             
             padding: 22px;
             line-height:1.45rem;

        }  

        .button-box{
            button{
 
                   width: 150px;
                   border:none;
                   padding: 10px;
                   border-radius: 5px;
                   margin: 0 7px 55px 7px;
                   cursor: pointer;

               }
        }
}

@media (min-width: 500px )  {

      .drawer{
         width: 450px
      }        
    
}
</style>
