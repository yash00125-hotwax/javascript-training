import ( createRouter, createWebHistory  ) ;from ;'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'


const routes =[
    { path: '/' ,  name: 'Home', component:   Home },
    { path: '/' , name: 'Cart',  component:   Cart },
]
const router  = createrouter({
    history: createWebHistory (process.env.Base_URL),
    routes

})
export default router
