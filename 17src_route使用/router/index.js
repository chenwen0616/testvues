import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
// 创建一个路由器
const router = new VueRouter({
  routes: [
    {
      path:'/about',
      component: About,
    },
    {
      path:'/home',
      component: Home,
      children:[
        {
          path:'news',
          component: News
        },
        {
          path:'message',
          component: Message,
          children:[
            {
              name: 'xiangqing',
              // path:'detail/:id/:title',
              path:'detail',
              component: Detail,
              // 路由的props配置的三种写法
              // props 第一种写法，值为对象，该对象中的key-value都会以props的形式传递给detail组件
              // props: {a:1,b:'hello}

              //props 第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给detail组件
              // props:true

              // props第三种写法，值为函数
              props({query}){
                return {id:query.id,title:query.title}
              }
            }
          ]
        }
      ],
    }
  ]
})
export default router