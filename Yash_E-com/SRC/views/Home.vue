<template>
  <div class="home">
  <p>THE JERSEY STORE</p>
  <div class ="slide-container">
  
      
  
  </div>
  <img  src="../assets/home1.jpg ">
  
  <p>Select</p>
   <Jerseydrawer
   v-bind:jersey="jersey"
   v-bind:active="active.jersey_drawer"
   v-on:close-drawer="CloseDrawer()"   

   /><!-- it will work when the jersey in the data component will be not null -->
     <!--state of the component will be passed (active)  -->

   <div class="Jersey-card-conatiner">
                <!--this the field of data which i have defined as a compnent-->   
       <Jerseyinfo
        v-for= "jersey in items"
        :key= "jersey.id"
        :jersey="jersey"
        v-on:view-jersey="viewJersey($event)"    
       />  <!-- the event from the Jinfo page is catched here as it was passed through Jinfo -->
   </div>
   <img src='../assets/download.jpeg'>

  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/item.js'  // here it imports data from item,js where i have creates a list of items for the e-com
import Jerseyinfo from '../components/Jersey/Jinfo.vue'  // from here i will get the  
import Jerseydrawer from "../components/Jersey/JDrawer.vue"  // here i need a drawer to open my jersey view option.



export default {
  name: 'Home',
  components: {

    Jerseyinfo , Jerseydrawer                 // Registring it as a component  so that  can efficientley use it in the div classs
                                // because I will use it to pass the data 

    
        },
  data () {
    return {
       
      items: items,
      jersey: null,
      active:{
        jersey_drawer: false    // linked this object in above Jdraer component
      }

    }
  },
  methods: {
    viewJersey(jersey){
      this.jersey = jersey
      this.active.jersey_drawer= true
      console.log(this.jersey)   // this is used by me so that I can see everytime in the browser console to see if its working.   

    },
    CloseDrawer(){
      this.active.jersey_drawer= false

    }
  }
}
</script>

<style lang="scss">
  .Jersey-card-container{

    display: flex;
    flex-wrap: wrap;
    justify-content: center;


 }

</style>
