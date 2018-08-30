<template>
  <div id="app">
    <Header />
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/head_foot/head";

  export default {
    name: "App",
    components: {
      Header
    },

    // component: resolve => require(['@/head_foot/head'], resolve)
  };

</script>

<style>
  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    background: url("assets/images/home/bg.jpg");
  }

  #app {
    /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    /* text-align: center;
    color: #2c3e50; */
    /* margin-top: 60px; */
  }

  .el-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }



  .el-carousel__arrow.el-carousel__arrow--right,
  .el-carousel__arrow.el-carousel__arrow--left {
    font-size: 2em;
    border-radius: 0;
    height: 65px;
    width: 40px;
  }

  /* .el-carousel__arrow.el-carousel__arrow--left:nth-child(1),
  .el-carousel__arrow.el-carousel__arrow--right:nth-child(1) {
    background-color:rgba(31,45,61,.80);
  } */

</style>
