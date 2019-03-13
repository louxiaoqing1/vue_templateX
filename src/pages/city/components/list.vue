<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                        v-for="item of hot" 
                        :key="item.id" 
                        @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
            v-for="(item,key) of cities" 
            :key="key" 
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div claa="item-list">
                    <div 
                        class="item border-bottom" 
                        v-for="innerItem of item" 
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)">
                            {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hot: Array,
        letter: String     
    },
    methods: {
        handleCityClick (city) {
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
        }
    },
    watch: {
        letter () {
            if (this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
     mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list{
    overflow:hidden;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
}
.title{
     width: 394px; 
     line-height: 20px;
     background : #eee;
     padding-left : 5px;
     color : #666;
     font-size: 15px;
}
.button-list{
    width: 394px;
    overflow: hidden;
    padding: 2px 5px 2px 5px;
}
.button-wrapper{
    width: 115px;
    float: left;
}
.button{
    margin: 4px;
    padding: 4px 0;
    text-align: center;
    border : 1px solid #ccc
    border-radius: 3px;
}
.item{
    line-height: 25px;
    color : #666;
    padding-left:5px;
}


</style>
