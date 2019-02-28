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
      <div class="header-right">城市
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </div>


  <div class="block">
    <el-carousel :interval="5000" autoplay  height="150px">
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
          url:'http://img0.imgtn.bdimg.com/it/u=4172547361,4270343151&fm=26&gp=0.jpg'
        },
        {
          name:"img2",
          url:'http://img0.imgtn.bdimg.com/it/u=1583070815,2649388651&fm=26&gp=0.jpg'
        },
        {
          name:"img3",
          url:'http://img5.imgtn.bdimg.com/it/u=174730139,1537551558&fm=26&gp=0.jpg'
        }
      ]
      
    }
  },
  methods:{
   
    },
 
  mounted(){

  }
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
    width: 7.5rem
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

