<template>
   <div>
     <h1>Cart</h1>


    
     <CartItem
      v-for="product in items"
      :key="product.id"
      :product="product"
      /> 

      <Summary
      
      />


   </div>

</template>

<script>
import CartItem from "../components/cart/CartItem.vue"
import Summary from "../components/cart/sum.vue"
export default {
   component:{
      CartItem ,Summary
   },
   computed: {
      products(){
         return this.$store.getters.cartItems
      }
   }
}
</script>
