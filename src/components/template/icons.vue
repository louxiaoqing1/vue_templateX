z <template>
    <div class="icons">        
        <div class="icon" v-for="item of iconList" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgurl"/>
                <span class="icon-title-name"> {{item.desc}}</span>
            </div>
        </div> 
    </div>
</template>

 <script>
     export default{
        name: 'Icons',
        data() {
        return{
                iconList: [{
                id: '0001',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票'
            },{
                id: '0002',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
                desc:'滑雪季'
            },{
                id: '0003',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
                desc:'泡温泉'
            },{
                id: '0004',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
                desc:'动植园'
            },{
                id: '0005',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
                desc:'游乐园'
            },{
                id: '0006',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
                desc:'必游榜单'
            },{
                id: '0007',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
                desc:'演出'
            },{
                id: '0008',
                imgurl:'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
                desc:'城市观光'
            }]
        }
    }
    }
 </script>

<style lang="stylus" scoped>
    .icons{
        height: 0;
        width: 400px;
        padding-bottom: 200px;
        margin-top: 10px;
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
        height: 85%;
        width: 85%;
    }
    .icon-title-name{
        display inline-block;
        width:80%;
        text-align: center;
        padding 0 ;
        margin  0;
    }

</style>