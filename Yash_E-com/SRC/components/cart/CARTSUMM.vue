<template>
    <div class="cart-item">  
        <h3> CART TOTAL: {{cart_total }} Ruppes </h3>
        
        <button class="view-jersey" @click="done()"> Pay </button>
    </div>
</template>>

<script>
export default {
    props: ['jersey'],
    computed:{
        cart_total(){
            return this.$store.getters.cart_Total
        }
    }, 
    methods:{
        done(){
            return console.log("yor payemnet is done thank you")
        }
    }
}
</script>

