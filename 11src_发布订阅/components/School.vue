<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name:'School',
    data(){
      return{
        name: '白云区学校',
        address: '白云区'
      }
    },
    mounted(){
      // console.log('School',this)
      // this.$bus.$on('hello',data=>{
      //   console.log('我是school组件，收到了数据',data)
      // })
      this.pubId = pubsub.subscribe('hello',(name,data)=>{
        console.log('school组件拿到数据了',data)
      })
    },
    beforeDestroy(){
      pubsub.unsubscribe(this.pubId)
    }
  }
</script>

<style>
  .school{
    background: olive;
    padding: 5px;
  }
</style>