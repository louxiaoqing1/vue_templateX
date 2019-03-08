z <template>
    <div class="icons">        
        <div class="icon" v-for="item of list" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl"/>
                <span class="icon-title-name"> {{item.desc}}</span>
            </div>
        </div> 
    </div>
</template>

 <script>
     export default{
        name: 'Icons',
        props:{
            list: Array
        }, 
    }
 </script>

<style lang="stylus" scoped>
    .icons{
        height: 0;
        width: 500px;
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