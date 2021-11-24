<template>
  <div class="student">
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sendStudentName">点我把学生名给App</button>
    <button @click="unbind">解绑atSelf事件</button>
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return{
        name: '张三',
        sex: 'man'
      }
    },
    methods:{
      sendStudentName(){
        // 触发student组件实例身上的atself事件
        this.$emit('atself', this.name)
      },
      unbind(){
        this.$off('atself') // 只适合解绑一个自定义事件
        // 解绑多个事件
        // this.$off(['',''])
        // this.$off() // 所有的自定义事件
      }
    }
  }
</script>

<style>
  .student{
    background: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>