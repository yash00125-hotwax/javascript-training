<template>
  <div id="app">
    <div id="nav">
      <router-link v-bind: class ="(active: $route.name === 'Home' )" to="/">Home</router-link> |
      <router-link v-bind: class ="(active: $route.name === 'Cart' )" to="/cart">Cart</router-link>
    </div>
    <router-view/>
  </div>

</template>

<script>
  export default{
    mounted(){
      this.$store.commit('UpdateLocalStorageofCart')
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #06101a;
  margin-top: 60px;
}

html ,body{
margin: 0;
padding: 0;
overflow-x: hidden ;
}

body{
background-color: dimgray;
}
#nav{
padding: 10px;
width: 100px;
height: 10px;
background-color: rebeccapurple;
line-height: 30px ;
}






</style>
