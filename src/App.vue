<template>
  <div id="app">
    <div>
      <div class="todo-container">
        <div class="todo-wrap">
          <HeaderTop :addTodo="addTodo"></HeaderTop>
          <UseList :todos="todos"></UseList>
          <UseFooter></UseFooter>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
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
      todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:false},
        {id:'003',name:'唱歌',done:false},
        {id:'004',name:'跳舞',done:false},
      ],
    }
  },
  methods:{
    addTodo(x){
      console.log('我收到了数据：',x)
      this.todos.unshift(x);
    }
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
