import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/ToDoList/Index.vue'
import Home from '../views/Home/Home.vue'
import Info from '../views/Info/Info.vue'
import Main from '../views/Main/Main.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
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