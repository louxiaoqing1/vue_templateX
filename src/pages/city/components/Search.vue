<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
export default {
    name: "Citysearch"
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .search {
        width: 100%;
        height:40px;
        background-color: $bgcolor;
        box-sizing: border-box;
        padding: 1px 2px;
    }
    .search-input{
       height: 30px;
       width :100%;
       text-align: center;
       
    }
</style>
