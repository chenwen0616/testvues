<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span v-show="!todo.isEdit">{{todo.name}}</span>
      <input 
        type="text" 
        ref="inputTitle"
        v-show="todo.isEdit" 
        :value="todo.name"
        @blur="handleBlur(todo,$event)"
      >
    </label>
    <button class="btn btn-danger" @click="delItem(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="editItem(todo)">编辑</button>
  </li>
</template>
<script>
  import pubsub from 'pubsub-js'
  export default {
    name: 'UseItem',
    // 声明接收todo对象
    props:['todo'],
    methods:{
      handleCheck(id){
        // this.checkTodo(id)
        // this.$bus.$emit('checkTodo',id)
        pubsub.publish('checkTodo',id)
      },
      delItem(id){
        // this.delTodo(id)
        // this.$bus.$emit('delTodo',id)
        pubsub.publish('delTodo',id)
      },
      editItem(todo){
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }else{
          this.$set(todo,'isEdit',true)
        }
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      handleBlur(todo,e){
        todo.isEdit = false
        if(!e.target.value.trim()) return alert('待办事项不能为空')
        pubsub.publish('updateTodo',{id:todo.id,name:e.target.value})
      }
    }
  }
</script>
<style scoped>
  /* item */
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label{
    float: left;
    cursor: pointer;
  }
  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button{
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before{
    content: initial;
  }
  li:last-child{
    border-bottom: none;
  }
  li:hover{
    background: #ddd;
  }
  li:hover button{
    display: block;
  }
</style>

