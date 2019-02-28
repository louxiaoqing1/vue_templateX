<template>
  <div>
    <headerX></headerX>
    <swiper></swiper>
  </div>
</template>

<script>
import headerX from "./../components/template/headerX";
import swiper from "./../components/template/swiper";
export default {
  name: "home",
  components: {
    headerX,
    swiper
  },
  data() {
    return {

    };
  },
  methods: {},
  mounted() {
  }
};
</script>


<style lang="less" scoped>

</style>