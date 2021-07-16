<template>
    <div class = "cart-item">
          <div class="head">
                   
                   <h3>  {{ jersey.name}} </h3>   <!-- as im passing through jersey n-->
                   <h4>  IN Cart : {{jersey.quantity}} </h4>
                   <h4>  Total Cost: {{ item_cost}}     </h4>

          </div>
          <p> {{ description }}</p>
        
    </div>
</template>

<script>
export default {
    props: ['jersey'],
    computed: {
        description(){
            return this.jersey.description.substring(0,100)


        },
        item_cost(){
            return this.jersey.price * this.jersey.quantity
        }
    }
}
</script>
<style lang ="scss">
.cart-item{
    width:90%;
    left:5%;
    margin: 10%;
    background-color: palegoldenrod;
    box-shadow:  0 0 5px darkolivegreen;
    border-radius: 5px;
    padding: 10px;
    text-align: center;

    .head{
       
       display: flex;
       justify-content: space-around;
      
    }


}  

</style>
