<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">测试数据</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data(){
      return {
        isShow:true,
      }
    }
  }
</script>

<style>
  h1{
    background: orange;
  }
  .v-enter-active{
    animation: myTestaction 0.6s linear;
  }
  .v-leave-active{
    animation: myTestaction 0.6s linear reverse;
  }
  @keyframes myTestaction {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px)
    }
  }
</style>