export default {
  install(Vue){
    // 全局过滤器
    Vue.filter('mySlice',function(value){
      return value.slice(0,4)
    })

    // 定义全局指令
    Vue.directive('fbind',{
      // 指令与元素成功绑定（一开始加载）
      bind(element,binding){
        element.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted(element){
        element.focus()
      },
      update(element,binding){
        element.value = binding.value
      }
    })

    // 定义混入
    Vue.mixin({
      data(){
        return{
          x:1,
          y:2
        }
      }
    })

    Vue.prototype.hello = ()=>{alert('hello')}
  }
}

