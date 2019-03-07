<template>
  <div>
    <headerX></headerX>
    <login></login>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import login from "./../components/template/Login"
import headerX from "./../components/template/headerX";
import icons from "./../components/template/icons";
import recommend from "./../components/template/Recommend";
import weekend from "./../components/template/Weekend";
import asios from 'axios'
export default {
  name: "home",
  components: {
    headerX,
    login,
    icons,
    recommend,
    weekend
  },   
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this,getHomeInfoSucc)
    },
    getHomeInfoSucc () {
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