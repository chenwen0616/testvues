const clickBtn = {
  methods:{
    showName(){
      alert(this.name)
    }
  }
}

const commonData = {
  data(){
    return{
      x:1,
      y:2
    }
  }
}
export {
  clickBtn,
  commonData
}