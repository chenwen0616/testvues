<template>
  <ul>
    <li>消息id：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ['id','title'],
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style>

</style>