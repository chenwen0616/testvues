<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
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
    props:['getSchoolName'],
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name);
      }
    }
  }
</script>

<style>
  .school{
    background: olive;
    padding: 5px;
  }
</style>