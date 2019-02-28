<template>
  <div>
    <headerX></headerX>
    <home-icons></home-icons>
  </div>
</template>

<script>
import headerX from "./../components/template/headerX";
import HomeIcons from "./../components/template/icon";
export default {
  name: "home",
  components: {
    headerX,
    HomeIcons
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