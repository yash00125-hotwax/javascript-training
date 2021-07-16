<template>
  <div id="nav">
    <router-link v-bind:class="{active: $route.name === 'Home'}" to="/">Home</router-link> 
    <router-link v-bind:class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>
    <router-link v-bind:class="{active: $route.name === 'About'}" to="/about">About</router-link>
  </div>
  <router-view/>
</template>
<script>
export default {
  mounted(){
    this.$store.commit('updateCartFromLocalStorage')
  }
  
}
</script>>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html ,body{
margin: 0;
padding: 0;
overflow-x: hidden ;
}

body{
background-color:white;
}
#nav{
padding: 10px;
width: 100px;
height: 10px;
background-color:white;
line-height: 40px ;

a{
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin: 0 5px 0 10px;
  font-size: 1.5rem;

  

}

}  


.text-center{
  text-align: center;
}
</style>
