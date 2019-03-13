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
      <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
      </router-link>
    </div>
  <div class="block">
    <el-carousel :interval="5000" autoplay  height="120px">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <img class="img" :src='item.url' :alt='item.name'/>
      </el-carousel-item>
    </el-carousel>
  </div>
  
</div>

</template>
<script>
export default {
  name:"login",
  data(){
    return{
      imgList:[
        { 
          name:"img1",
          url:'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        },
        {
          name:"img2",
          url:'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        },
        {
          name:"img3",
          url:'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
        },
        {
          name:"img4",
          url:'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
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
      color: #fff
      .arrow-icon
        margin-left: -.09rem
        font-size: rem
    
</style>

