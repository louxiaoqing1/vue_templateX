z <template>
    <div class="icons"> 
        <div>
            <el-carousel :interval="5000" autoplay  height="200px">
                <el-carousel-item v-for="item of iconList" :key="item.name">
                    <div class="icon">
                        <div class="icon-img">
                            <img class="icon-img-content" :src='item.url'/>
                            <span class="icon-title-name"> {{item.desc}}</span>
                        </div>
                    </div>     
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
 
 <script>
     export default{
        name: 'HomeIcons',
        data(){
            return{
            iconList:[
                {
                name:"img1",
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071027899,2821326239&fm=26&gp=0.jpg',
                desc: '热门景点'
                },
                {
                name:"img2",
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071027899,2821326239&fm=26&gp=0.jpg',
                desc: '热门景点'
                },
                {
                name:"img3",
                url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071027899,2821326239&fm=26&gp=0.jpg',
                desc: '热门景点'
                }
            ]
            
            }
        },
    }

 </script>

<style lang="stylus" scoped>

    .icons{

        height: 0;
        width: 400px;
        padding-bottom: 200px;
        
    }
    .icon{
        float: left;
        overflow: hidden;
        position : relative;
        width: 95px;
        padding-bottom: 100px;
        
    }
    .icon-img{
      position : absolute;
      top: 0;
      right: 10;
      left: 2px;
      bottom: 1px;
      
    }
    .icon-img-content{ 
        display: block;
        maigin: 0 auto;
        height: 80%;
        width 100%;
    }
    .icon-title-name{
        display inline-block;
        width 100%;
        text-align: center;
        padding 0 ;
        margin  0;
    }

</style>