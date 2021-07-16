<template>
  <div class="UI-card">
          <h3>{{ jersey.name }}</h3>
          <h5 class="price"> Price: {{jersey.price}} /- Rupees </h5>
          <p class="description" > description: {{ descrption }}</p>  <!--here i wil create a computed ptoperty for the same -->            
          <p class="jersey-category" > {{ jersey.category }}</p> <!--this is where i will put category -->
          <button class="view-button" v-on:click="$emit('view-jersey', jersey)">ADD To Cart</button>  <!-- this button will let the user view the details also it will trigger a event every time a user click the button--> 
          
  </div>
  
</template>

<script>
export default {
    props: ['jersey'],
    computed: {
        description(){
            return this.jersey.description

        }
    }

}
</script>

<style lang="scss">

.UI-card{
    width:70%;
    margin: 20%;
    padding: 15px;
    border-radius: 6px;
    background-color:whitesmoke;
    box-shadow: 1 1 10px grey;
    align-items: center;
    border-color:black;

    h5.price{
        color:grey;

    } 
    p.description{
        font-size: 1rem;

    }
    p.jersey-category{
        color:grey;

    }
    button.view-button{
        padding: 15px;
        background-color: darkcyan;
        border: none;
        color: white;
        font-weight:bold;
        font-size:1.25rem;
        border-radius:6px;
        cursor:pointer;
        text-align: center;


    }
}
@media(min-width: 500px)
{
    .UI-card{
        width:400px;
        margin: 12px;
        align-content: center;
    }
}  /*this is called the media queery this allows me to create diffrent layouts as per the viewport */
</style>
