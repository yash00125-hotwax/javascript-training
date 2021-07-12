<template>
    <div class = "cart-item">
      <h3>{{product.name}}</h3>>
      <h4>Jerseys in Cart: {{product.quantity}}</h4>
      <h4>Total Amount: {{item_amount.toFixed(4)}}
    
    
    </div>

</template>>

<script>
export default {
    props: ['product'],

    computed:{
        description(){
            return this.product.desccription.substring

        },
        item_amount(){
            return this.product.price * this.product.quantity
        }
    } 
}
</script>
<style>
.cart-item{
    width:90%;
    margin:10%;
    background-color: khaki;
    box-shadow: 0 0 5px grey;
    border-radius: 5px;
    padding: 10px;
    text-align:left;
}
    .header{
        display: flex;
        justify-content :space-around;
    }

</style>
