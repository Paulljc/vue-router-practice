import VueRouter from 'vue-router'
import Index from './components/Index.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Index }
  ]
})

export default router