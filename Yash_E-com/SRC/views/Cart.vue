<template>
    <div>
        <h1> YOUR CART</h1>
     <!--   <div v-for="jersey in jerseys" :key="jersey.id" >  {{ jersey.name}}</div> -->
         <CartITEMS
            v-for="jersey in jerseys" 
            :key="jersey.id"
            :jersey="jersey"
          />

         <CartSUM
           :jersey="jersey"
        
        />   
    </div>    <!--as everything is updated frim the store-->
</template>
<script>

 import CartITEMS  from '../components/cart/Cartitem.vue' 
 import CartSUM  from '../components/cart/Cartsum.vue' 

export default {
    components:{
        CartITEMS , CartSUM

    },
    computed:{
        jerseys(){
            return this.$store.getters.CartITEMS
        }
    }
}
</script>
