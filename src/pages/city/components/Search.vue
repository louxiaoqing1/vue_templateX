<template>
    <div class="search">
        <input class=“input1“ data-v-42ab7441 type="text" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
export default {
    name: "Citysearch"
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .search{
        height:30px;
        background: $bgcolor;
        padding: 0 3px;
    }
    .input1{
        height: 90px;
        line-height: 30px;
        width: 100%;
        text-align : center;
        border-radius: 3px;
    }
</style>
