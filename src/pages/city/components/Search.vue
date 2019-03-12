<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content">
            <ul>
                <li v-for="item of list">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Citysearch",
    props:{
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: []
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || 
                            value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
    }
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
    .search-content{
        z-index : 1
        overflow: hidden;
        position: absolute;
        top: 80px;
        left:0;
        right: 0;
        bottom:0;
        background : green;
    }
</style>
