<template>
  <div>
    <headerX></headerX>
    <login :city="city"></login>
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
      city: ''
    }
  },
  methods:{
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then((result) => {
          console.log(result)
        })
    },
  },   
  mounted () {
    this.getHomeInfo()
  }
}
</script>


<style lang="less" scoped>

</style>