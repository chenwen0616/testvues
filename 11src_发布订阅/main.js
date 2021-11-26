import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(plugins)
// 创建vm
new Vue({
  el:'#app',
  render: h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus = this // 安装全局事件总线
  }
})
