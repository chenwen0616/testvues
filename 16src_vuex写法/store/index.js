// 该文件用于创建vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions - 用于相应组件中的动作
const actions = {
  jiaOdd(context,val){
    const {commit,state} = context;
    if(state.sum%2){
      commit('JIA',val)
    }
  },
  jiaWait(context,val){
    const {commit}= context;
    setTimeout(()=>{
      commit('JIA',val)
    },500)
  }
}
// 用于操作数据（state）
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  MINUS(state,value){
    state.sum -= value
  },
}

// 用于存储数据
const state = {
  sum: 0,
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
})
