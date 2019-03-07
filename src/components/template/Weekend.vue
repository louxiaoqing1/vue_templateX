<template>
  <div> 
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgurl" />
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
    name: "weekend",
    data() {
        return{
                recommendList: [{
                id: '0001',
                imgurl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2340370831,2340565752&fm=27&gp=0.jpg',
                title: '大连圣亚海洋馆',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },{
                id: '0002',
                imgurl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2340370831,2340565752&fm=27&gp=0.jpg',
                title: '大连圣亚海洋馆',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },{
                id: '0003',
                imgurl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2340370831,2340565752&fm=27&gp=0.jpg',
                title: '大连圣亚海洋馆',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title{
        line-height: 25px;
        background:#ccc;
        text-indent: 5px;
    }
    .item-img-wrapper{
        overflow: hidden;
        height: 130px;
        width: 380px;
    }
    .item-img{
       width: 100%;
    }
    .item-info{
        padding: 5px;
    }
    .item-title{
        line-height: 30px;
        font-size: 15px;
        ellipsis ()
    }
    .item-desc{
        line-height: 10px;
        color: #ccc;
        ellipsis ()
    }

</style>
