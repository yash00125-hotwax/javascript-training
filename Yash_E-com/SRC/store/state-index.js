import { createStore } from 'vuex'


function updateLocalStorage(cart) 
{
  localStorage.setItem('cart', JSON.stringify(cart) )  
  
}  

export default createStore({
  state: {
    cart: []               // array of objects 
  },
  getters: {
    JerseyQuantity: state => jersey => {          // first it will pass through state and then will pass through jersey to collect the jersey quantity
      const item = state.cart.find(i  =>  i.id  ===  jersey.id) 
       // here in this function state is operatng on jersey function aslo it is known as high order array function.
      if (item){
        return item.quantity
      }
      else{
        return null
      }

    },
    // now im updationg the getter for the cart cartitem which have been used in computed property of cart.vue
    CartITEMS: state => {
      return state.cart
    },
    cart_Total: state => {
      return state.cart.reduce((a,b) => a+(b.price * b.quantity),0) // for now this value is passed to a after when loop goes on the value will be updated
    }
  },
  mutations: {
    AddTOCart(state , jersey) {
    
      let item = state.cart.find(i => i.id === jersey.id) // searching through the array ofobjects 
      if (item){
        item.quantity = item.quantity + 1  // we are adding it through the cart array
      }
      else {
        state.cart.push({...jersey, quantity: 1})  // otherwise I am  creating  and pushing  it into the array
      }  
               updateLocalStorage(state.cart)   // now if accidentialy i  reload or refresh  the cartdur to inerternet connection problem then the items wil remian intact in the cart
                
    
    
    },
    RemoveFromCart( state , jersey){
      let item = state.cart.find(i => i.id === jersey.id)
      if(item){
        if(item.quantity > 1 ){
          item.quantity = item.quantity - 1
        } 
        else{
          state.cart = state.cart.filter(i => i.id !== jersey.id)
        }

      }
          updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state){    // now im aupdating cart wrt to local storage
      const cart = localStorage.getItem('cart')
      if(cart){
        state.cart = JSON.parse(cart)
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
