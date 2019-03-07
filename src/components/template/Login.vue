<template>
  <div class="login">
    <div class="header">
      <div class="header-left">
          <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
      </div>
      <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </div>
  <div class="block">
    <el-carousel :interval="5000" autoplay  height="120px">
      <el-carousel-item v-for="item in List" :key="item.name">
        <img class="img" :src='item.url' :alt='item.name'/>
      </el-carousel-item>
    </el-carousel>
  </div>
  
</div>

</template>
<script>
export default {
  name:"login", 
  props: {
    city: String
  },
  data(){
    return{
      imgList:[
        {
          name:"img1",
          url:'http://img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg'
        },
        {
          name:"img2",
          url:'http://img1.qunarzz.com/vc/1d/d5/dc/bfb1990e14a1fdb082cf817657.jpg'
        },
        {
          name:"img3",
          url:'http://img1.qunarzz.com/vc/a9/f4/f1/bb33ddb697f07c375e7af81256.jpg'
        }
      ]
      
    }
  },
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .img{
    width :400px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    overflow: hidden;
  }
  .img1:nth-child(2n){
    
  }
  .header
    display: flex
    line-height: .8rem
    width: 8rem
    background: $bgcolor
    color: #fff
    .header-left
      width: .5rem
      float:left
      .back-icon
          text-align: center
          font-size: .4rem
    .header-input
      flex: 1
      height: .6rem
      line-height: .64rem
      margin-top: .11rem
      margin-left: .1rem
      margin-right: .3rem
      padding-left: .5rem
      background: #fff
      border-radius: .1rem
      color: #ccc

    .header-right
      width: 2rem
      float: right
      margin-right:-0.6rem
      .arrow-icon
        margin-left: -.09rem
        font-size: rem
    
</style>

