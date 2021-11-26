<template>
  <div id="app">
    <div>
      <div class="todo-container">
        <div class="todo-wrap">
          <HeaderTop @addTodo="addTodo"></HeaderTop>
          <UseList :todos="todos" :checkTodo='checkTodo' :delTodo='delTodo'></UseList>
          <UseFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></UseFooter>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  import HeaderTop from './components/HeaderTop.vue'
  import UseFooter from './components/UseFooter.vue'
  import UseList from './components/UseList.vue'
  export default {
    name: 'App',
    components: {
      HeaderTop,
      UseList,
      UseFooter,
    },
    data(){
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
      }
    },
    methods:{
      // 添加todo
      addTodo(x){
        this.todos.unshift(x);
      },
      // 取消/勾选
      checkTodo(_,id){
        this.todos.forEach(todo=>{
          if(todo.id === id){
            todo.done = !todo.done
          }
        })
      },
      delTodo(_,id){
        this.todos = this.todos.filter(todo=> todo.id !== id)
      },
      // 编辑
      updateTodo(_,val){
        this.todos.forEach(todo=>{
          if(todo.id === val.id){
            todo.name = val.name
          }
        })
      },
      // 全选 全部选
      checkAllTodo(done){
        this.todos.forEach(item=>{
          item.done = done
        })
      },
      // 清除所有已弯沉固定todo
      clearAllTodo(){
        this.todos = this.todos.filter(item=>!item.done)
      }
    },
    watch: {
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos', JSON.stringify(value))
        }
      }
    },
    mounted(){
      // this.$bus.$on('checkTodo',this.checkTodo)
      // this.$bus.$on('delTodo',this.delTodo)
      this.checkTodoId = pubsub.subscribe('checkTodo',this.checkTodo)
      this.delTodoId = pubsub.subscribe('delTodo',this.delTodo)
      this.updateTodoId = pubsub.subscribe('updateTodo',this.updateTodo)
    },
    beforeDestroy(){
      // this.$bus.$off('checkTodo')
      // this.$bus.$off('delTodo')
      pubsub.unsubscribe(this.checkTodoId)
      pubsub.unsubscribe(this.delTodoId)
      pubsub.unsubscribe(this.updateTodoId)
    }
  }
</script>

<style>
  /* base */
  body{
    background: #FFF;
  }
  .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger{
    color: #fff;
    background: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover{
    color: #fff;
    background: #bd362f;
  }
  .btn-edit{
    color: #FFF;
    background: blue;
    border: 1px solid blue;
    margin-right: 10px;
  }
  .btn:focus{
    outline: none;
  }
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
