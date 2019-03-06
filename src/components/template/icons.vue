z <template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071027899,2821326239&fm=26&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div>        
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3287249329,3074687661&fm=26&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div> 
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2395496933,1048204219&fm=26&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div> 
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1624641722,2539712386&fm=26&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div> 
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1624641722,2539712386&fm=26&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div> 
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3690319275,2860222045&fm=200&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div> 
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071027899,2821326239&fm=26&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div>  
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071027899,2821326239&fm=26&gp=0.jpg'/>
                <span class="icon-title-name"> 热门景点</span>
            </div>
        </div> 
    </div>
</template>

 <script>
     export default{
        name: 'HomeIcons'
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