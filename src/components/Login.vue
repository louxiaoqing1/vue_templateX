<template>
  <div class="header">
    <div class="header-left">箭头</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>
<script>
export default {
  name:"login",
  data(){
    return{
      
    }
  },
  methods:{
   
    },
 
  mounted(){

  }
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .86rem
    width: 8.15rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float:left
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      margin-right: .5rem
      background: #fff
      border-radius: .1rem
      color: #ccc

    .header-right
      width: 1.24rem
      float: right
</style>

