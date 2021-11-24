<template>
  <div class="student">
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button>把学生名给School组件</button>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        name: "张三",
        sex: "man"
      };
    }
  };
</script>

<style>
.student {
  background: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>