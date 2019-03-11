<template>
    <div class="header">
        <span class="s1">城市选择</span>
        <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

 <style lang="stylus" scoped>
 @import '~styles/varibles.styl'
    .header{
        width: 400px;
        position : relative;
        overflow:hidden;
        height: 40px;
        line-height: 40px;
        background: $bgcolor
    }
    .s1{
        color: #fff;
        font-size: 17px;
        padding-left :155px;
    }
    .header-back{
        position: absolute;
        top:0;
        left: 0;
        width: 30px;
        text-align: center;
        font-size: 18px;
        color : #fff;
    }
</style>