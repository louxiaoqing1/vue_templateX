z <template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img src='https://imgs.qunarzz.com/p/tts8/1901/e8/a3a86dd03bb01702.jpg_262x238_50e4fdb1.png'/>
            </div>
        </div>        
        <div class="icon">
        </div> 
        <div class="icon">
        </div> 
        <div class="icon">
        </div> 
        <div class="icon">
        </div> 
        <div class="icon">
        </div> 
        <div class="icon">
        </div> 
        <div class="icon">
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
        overflow: hidden;
        height: 0;
        width: 400px;
        padding-bottom: 200px;
        background: green;
    }
    .icon{
        float: left;
        overflow: hidden;
        width: 100px;
        padding-bottom: 100px;
        background: red;
    }
    .icon-img:{
      position: absolute;
      top: 0;
      left: 0:
      right: 0;
      bottom: 100px;
    }

</style>