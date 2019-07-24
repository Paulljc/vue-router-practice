import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Home from './components/Home.vue'
import Info from './components/Info.vue'
import Main from './components/Main.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/welcome',
      component: Main
    },
    {
      path: '/home/:id',
      component: Home,
      children: [{
        path: '',
        component: Index
      },
      {
        path: '/myInfo/:id',
        component: Info
      },
      {
        path: '/home/:id?',
        redirect: '/home/none'
      }]
    }
  ]
})

export default router