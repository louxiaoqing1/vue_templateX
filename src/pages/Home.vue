<template>
  <div>

    <headerX></headerX>
    <login></login>
    <icons></icons>
  </div>
</template>

<script>
import login from "./../components/template/Login"
import headerX from "./../components/template/headerX";
import icons from "./../components/template/icons";
export default {
  name: "home",
  components: {
    headerX,
    login,
    icons
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