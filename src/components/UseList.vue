<template>
  <ul class="todo-main">
    <UseItem 
      v-for="item in todos" 
      :key='item.id' 
      :todo="item" 
      :checkTodo='checkTodo' 
      :delTodo='delTodo' 
    />
  </ul>
</template>
<script>
  import UseItem from './UseItem.vue'
  export default {
    name: 'UseList',
    components:{
      UseItem
    },
    props:['todos', 'checkTodo', 'delTodo'],
  }
</script>
<style scoped>
   /* main */
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>

