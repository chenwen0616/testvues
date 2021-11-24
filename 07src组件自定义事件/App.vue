<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给福传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <Student v-on:atself="getStuName"></Student>
  </div>
</template>

<script>
  
  import Student from './components/Student';
  import School from './components/School'
  export default {
    name: 'App',
    components:{
      Student,
      School
    },
    data(){
      return{
        msg:'你好啊！'
      }
    },
    methods:{
      getSchoolName(name){
        console.log('app收到了学校名', name)
      },
      getStuName(name){
        console.log('demo被调用了', name)
      },
    }
  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 6px;
  }
</style>