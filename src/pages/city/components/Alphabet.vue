<template>
    <ul class="list">
        <li class="item" 
        v-for="item of letters" 
        :key="item"
        :ref="item"
        :touchstart="handleTouchStart"
        :touchmove="handleTouchMove"
        :touchend="handleTouchEnd"
        @click="handleLetterClick">
            {{item}}
        </li>
    </ul>
</template>
<script>
export default {
    name:"CityAlphabet",
    props: {
        cities: Object
    },
    computed : {
        letters () {
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus:false
        }
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                const startY = this.$refs['A'][0].offsetTop
                const touchY = e.touches[0].clientY
                console.log()
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .list{
        display: flex;
        flex-direction : column 
        justify-content: center
        position: absolute;
        right: 0;
        top: 80px;
        bottom: 0;
        width: 18px;
    }
    .item{
        line-height: 20px;
        text-align: center;
        color: $bgcolor;
    }
</style>
