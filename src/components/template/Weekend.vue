<template>
  <div> 
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
            <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
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
    props: {
        list: Array
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
