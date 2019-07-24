import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import store from './store/index'
import router from './router/router'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
