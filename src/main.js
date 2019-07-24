import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
import store from './store/index'
import router from './router/router'

Vue.use(Antd)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
