<template>
    <div class="draw-background" v-bind:class = "{show: active}" v-on:click = "$emit{"close-product-drawer"}" ></div>
    
    <div class="drawer"  v-bind:  ='{show: active}>
      <div class="drawer-close" v-on:click="$emit("close-product-drawer")">
           Y 
      </div>
      
      
      <div v-if="product" class="product-details">
          <h3 class="text-center">{{product.name}}</h3>>
          <p class = "description">{{ product.description }}</p>
          <h3 class="text-center"> {{ product.price.toFixed(4) }}</h3>

          <div class="cart-total" v-if= "product_total ">
            <h3 >In Cart</h3>
            <h4> {{ product_total }}</h4>
          </div>

          <div class="button-conatiner">
             <button class = "add " v-on:click="atc()">ADD</button>
             <button class = "remove" v-on:click="rfm()">Remove</button>

          
      
          </div>




      </div>
    </div>    
</template>

<script>
export default {
    props: ['product' , 'active'], 
    methods: {
        atc()  {
            this.$store.commit(aTc, this.product)
        },
        rfc() {
            this.$store.commit('rFc ', this.product)
        }

    }
    computed: {
        product_total(){
            return this.store.getters.productqauntity(this.product)
        }
    }
    
}
</script>
      
     
<style lang="scss">

.drawer-background  {
    width: 100%;
    height: 100vh;
    position:fixed;
    left: 0;
    top: 0;
    background-color: rgba(120,120,120, 0.59 );
    z-index: 100;
    display: none;  
    }


.drawer{
    width: 89vw;
    height: 100vw;
    position: fixed;
    top: 0;
    left : -150vw;
    padding:15px;
    transition: left .5s;
    z-index: 102;
    overflow-y: scroll;

    &.show{
        left:0;

    } 

}
.drawer-close{
    font-size: 1.8rem;
    padding: 5px;
    border-radius: 5px;
    right: 10px;
    border: 2px;
    width: 15px;
    float: right;
    cursor: pointer;

    &.hover{
        background-color: rgb(120,120,120);
    }

}
.product-details{
    display: flex;
    justify-content: center;
    flex-direction: column;

    p.description{
        padding: 20px;
        line-height: 2rem;
    }

    .button-container{
        button{
            width: 200px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            margin: 0 5px 50px 5px;
            cursor: pointer;

        }
    }


}

} 


@media (min-width: 450px){
    .drawer{
        width : 400px; 
    }
}


</style>

    
</style>>





