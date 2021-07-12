<template>
    <div class ="card">
       <h3 >{{product.name}}</h3>
       <h5 class='price' :Price: $ >{{product.price.toFixed(4) }} </h5>
       <p class="description"> Description: {{description}}</p>    
       <p class="text-muted">{{product.category}}</p>
       <button class="view-product-button"  v-on: click = "$emit{'view-product', product}" >Know More</button>
    </div>

</template>

<script>
export default {
    props: ['product'],
    computed :{
        description(){
            return this.product.description.substring(0, 150)
        }
    }
    }
</script>

<style lang="scss">
   .cart{
       width: 80%;
       margin: 10%;
       padding: 10px;
       border-radius: 5px;
       background-color: gray;
       box-shadow: 0 0 5px darkgray;

     
       p.description{
           font-size: .85rem;

       }
       p.text-muted{
           color:brown;

       }
       button.view-product-button{
           padding: 10px;
           background-color: grey;
           border:none;
           color: white;
           font-weight: bold;
           font-size: 1.75rem;
           border-radius: 5px;
           cursor: pointer;

       }
   }
 @media (min-width: 500px){
     .card{
         width: 300px;
         margin: 10px;

     }

 }
</style>
