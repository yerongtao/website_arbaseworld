<template>
  <div class="detail-container" style="min-height:100vh">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: breadcrumb.path}">{{ breadcrumb.item1 }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ breadcrumb.item2 }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="detail-content">
      <!-- // 方法1: innerHTML 方法  -->
      <!-- <div class="content" ref="content"></div> -->
      <h2 class="data-title" v-html="title"></h2>
      <!-- // 方法2: v-html 方法，建议使用这个方法 -->
      <div class="content" v-html="content"></div>
      <p class="data-title">
        <span class="data-back" v-on:click="comeBack">
          返回
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  var breadcrumb = [{
      type: "news",
      path: "/news",
      item1: "新闻动态",
      item2: "新闻详情"
    },
    {
      type: "case",
      path: "/case",
      item1: "案例分享",
      item2: "案例详情"
    }
  ];
  var url_case = "https://dev.arbaseworld.com/wb/s/sample_content",
    url_news = "https://dev.arbaseworld.com/wb/n/news_content";

  export default {
    name: "news-detail",
    data() {
      return {
        breadcrumb: breadcrumb[0],
        content: '',
        title: '',
      };
    },
    mounted() {
      if (this.$route.query.page != 'case' && this.$route.query.page != 'news' ||
        this.$route.query.id == undefined) {
        window.location.href = '/#/';
        return false;
      }
      this.breadcrumb = (this.$route.query.page == "news") ? breadcrumb[0] : breadcrumb[1]
      this.getData(this.$route.query.page, this.$route.query.id);
    },
    methods: {
      comeBack: function () {
        // if (this.$route.query.page == 'news') {
        //   window.location.href='/#/news'
        // }
        // if (this.$route.query.page == 'case') {
        //   window.location.href='/#/case'
        // }
        this.$router.go(-1);
      },
      getData(page, id) {
        var _URL = (page == "news") ? url_news : url_case
        const _this = this;
        this.axios({
            method: "get",
            url: _URL,
            params: {
              id: id
            }
          })
          .then(function (res) {
            if (res.data.content == undefined || res.data.content == null ||
              res.data.title == undefined || res.data.title == undefined) {
              window.location.href = '/#/';
              return false;
            }
            _this.content = res.data.content;
            _this.title = res.data.title;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .data-title {
    text-align: center;
    margin-bottom: 1.5em;
  }

  .data-back {
    display: inline-block;
    padding: 5px;
    margin-top: 3em;
    border: 1px solid #959595;
    width: 160px;
    text-align: center;
    color: #959595;
    font-size: 14px;
    line-height: 20px;
    transition: .3s;
    cursor: pointer;
  }

  .data-back:hover {
    color: #fff;
    background: #333;
  }

  .detail-container {
    max-width: 1200px;
    position: relative;
    overflow: visible;
    margin: 0 auto;
    padding: 0 15px 60px 15px;
  }

  .el-breadcrumb {
    padding: 65px 0 5px 0;
    font-size: 18px;
    line-height: 27px;
  }

  .detail-content {
    border-top: 2px dotted #959595;
    padding: 30px 0;
    margin: 35px 0;
  }

</style>
