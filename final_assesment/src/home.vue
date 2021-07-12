<template>
  <div class="Home">
     <desc
     :product="product"
     :active="active.product_drawer"
     v-on:close-product-drawer="closeProductDrawer()"
     />
  
    <div class="product-cards-con">
    <Product
    v-for= "product in items"  :key="product.id" 
    :product="product"
    v-on: view-product= "viewProduct($event)"
    />
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import items from '../data/item.js'
import Product from '../components/PSC/PSC.vue'
import desc from '../components/PSC/desc.vue'


export default {
  name: 'Home',
  components: {
    Product , desc
  

  },
  data(){
    return {
      items : items,
      product : null,
      active: {
        product_drawer: false
      }

    }
  }, 
  methods: {
    viewProduct(product){
      this.product=product
      this.active.product_drawer =true
      console.log(this.product)
    },
    closeProductDrawer() {
      this.active.product_drawer = false
    }
 
  }
}
</script>

<style lang="scss">
  .product-cards-con{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;


 }


</style>
