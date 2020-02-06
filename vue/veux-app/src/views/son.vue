<template>
  <div>
    <div></div>
    <!-- <router-link :to="{name:'',params:{}}"></router-link> -->
    <a href="#" @click="toFather()">toFather</a>
    <div>{{id}}</div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      Id: this.id + 5
    };
  },
  mounted() {
    console.log(this);
    console.log("进入son");
    console.log(this.$route); //当前路由对象
    console.log(this.$router); //vue router 对象
  },
  name: "son",
  methods: {
    toFather() {
      // this.$router.push('path')

      this.$router.push("/about");
      // this.$router.push({path:'',params:{},name:''})
      //提供path params会被忽略
    }
  }
};
</script>

<style scoped>
</style>
