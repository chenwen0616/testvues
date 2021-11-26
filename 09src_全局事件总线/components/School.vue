<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return{
        name: '白云区学校',
        address: '白云区'
      }
    },
    mounted(){
      console.log('School',this)
      this.$bus.$on('hello',data=>{
        console.log('我是school组件，收到了数据',data)
      })
    }
  }
</script>

<style>
  .school{
    background: olive;
    padding: 5px;
  }
</style>