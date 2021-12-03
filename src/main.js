import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import router from './router'

// 完整引入elementUI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入elementUI
import {Button,Select, Row, DatePicker} from 'element-ui'

Vue.component(Button.name,Button)
Vue.component(Select.name,Select)
Vue.component(Row.name,Row)
// Vue.component('at-date-picker',DatePicker)

Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(ElementUI)  // 完整引入elementUI

new Vue({
  render: h => h(App),
  // router: router
}).$mount('#app')
