<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input 
        type="text" 
        placeholder="enter the name you search" 
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'Search',
    data(){
      return {
        keyWord: '',
      }
    },
    methods:{
      searchUsers(){
        this.$bus.$emit('getDataList',{
          isFirst:false,
          isLoading:true,
          errorMsg: '',
          users:[],
        })
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(res=>{
          this.$bus.$emit('getDataList',{
            isLoading:false,
            errorMsg: '',
            users:res.data.items,
          })
        },error=>{
          this.$bus.$emit('getDataList',{
            isLoading:false,
            errorMsg: error.message,
            users:[],
          })
        })
      }
    }
  }
</script>

<style>

</style>