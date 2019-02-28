<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
       <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市
       <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
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
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    width: 7.5rem
    background: $bgcolor
    color: #fff
    .header-left
      width: .5rem
      float:left
        .back-icon
            text-align: center 
            font-size: .2rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .11rem
      margin-left: .1rem
      margin-right: .1rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc

    .header-right
      width: 1rem
      float: right
      .arrow-icon
        margin-left: -.07rem
        font-size: .3rem
    
</style>

