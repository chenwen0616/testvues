<template>
<!-- 
  avatar_url
  html_url
  login
 -->
  <div class="rowq">
    <h1 v-show="info.isFirst">欢迎来到搜索页面</h1>
    <div v-show="info.users.length>0" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" alt="jpg" style="width:100px">
      </a>
      <p class="cart-text">{{user.login}}</p>
    </div>
    <h2 v-show="info.isLoading">加载中......</h2>
    <h2 v-show="info.errorMsg">{{info.errorMsg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Lists',
    data(){
      return{
        info:{
          isFirst:true,
          isLoading:false,
          errorMsg:'',
          users:[]
        }
      }
    },
    mounted(){
      this.$bus.$on('getDataList',(dataObj)=>{
        console.log('我是list组件',dataObj)
        this.info = {...this.info,...dataObj}
      })
    }
  }
</script>

<style scoped>
  .album{
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background: #f7f7f7;
  }
  .card{
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  .card > img{
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  .card-text{
    font-size: 85%;
  }
</style>