<template>
    <div class="CartItem">
       <h3>Cart_total: ${{cart_TA.toFixed(4)}}</h3>

       <button class="view-pb"> Pay by card</button>

     

    </div>
</template>
<script>
export default {
    
    computed:{
        cart_TA(){
            return this.$state.getters.cartTTA()
        }
    }
}
</script>>
