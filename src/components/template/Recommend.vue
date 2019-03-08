<template>
  <div> 
    <div class="title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
    name: "Recommend",
    props:{
        list: Array
    },
    data() {
        return{
                recommendList: [{
                id: '0001',
                imgurl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3739589073,2196410818&fm=27&gp=0.jpg',
                title: '大连圣亚海洋馆',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },{
                id: '0002',
                imgurl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3739589073,2196410818&fm=27&gp=0.jpg',
                title: '大连圣亚海洋馆',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },{
                id: '0003',
                imgurl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3739589073,2196410818&fm=27&gp=0.jpg',
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
        margin-top:5px;
        line-height: 25px;
        background:#ccc;
        text-indent: 5px;
    }
    .item{
        display: flex;
        height: 80px;
        overflow: hidden;
    }
    .item-img{
        width: 90px;
        height: 70px;
        padding: 5px;
    }
    .item-info{
        flex: 1;
        padding: 5px;
        min-width: 0;
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
    .item-button{
        line-height: 17px;
        margin-top: 8px;
        background: #ff9300;
        padding: 0 5px;
        border-radius: 5px;
        color: #fff 
    }
</style>
