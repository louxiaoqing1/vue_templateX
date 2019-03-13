<template>
  <div>
    <headerX></headerX>
    <login></login>
    <icons :list="iconList"></icons>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
import login from "./../components/template/Login"
import headerX from "./../components/template/headerX";
import icons from "./../components/template/icons";
import recommend from "./../components/template/Recommend";
import weekend from "./../components/template/Weekend";
import axios from 'axios'
export default {
  name: "home",
  components: {
    headerX,
    login,
    icons,
    recommend,
    weekend,
  },
  data () {
    return{
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods:{
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
        res = res.data
        if(res.ret && res.data){
            const data = res.data
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
        }
        console.log(res)
      }
  },   
  mounted () {
    this.getHomeInfo()
  }
}
</script>


<style lang="less" scoped>

</style>