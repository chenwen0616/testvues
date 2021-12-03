<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- query传参 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link>

        <!-- params参数 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->
        <!-- 当params传参的时候 配合name使用 -->
        <!-- <router-link :to="{
          name:'xiangqing',
          params:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name:'Message',
  data(){
    return{
      messageList: [
        {id: '001',title: '消息001'},
        {id: '002',title: '消息002'},
        {id: '003',title: '消息003'},
      ]
    }
  }
}
</script>

<style>

</style>