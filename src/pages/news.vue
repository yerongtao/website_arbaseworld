<template>
  <div class="news-container" style="min-height:100vh">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
    </el-breadcrumb>
    <ul class="news-list">
      <li v-for="item in newsContent" class="news-li" :key="item.id">
        <el-row>
          <el-col :span="5" class="news-left">
            <div class="month">
              <p>{{ item.month }}</p>
            </div>
            <div class="day">{{ item.day }}</div>
          </el-col>
          <el-col :span="19" class="news-right">
            <router-link class="" :to="childrenPath+'&id='+item.id">
              <div class="title">{{ item.title }}</div>
              <div class="day-mobile"> {{"------- " + item.month + " - "+ item.day + " ------"}} </div>
            </router-link>
            <div class="content" ref="brief1">
              <p ref="brief">{{ item.brief }}</p>
            </div>
            <router-link class="" :to="childrenPath+'&id='+item.id">
              <div class="more">More+</div>
            </router-link>
          </el-col>
        </el-row>
      </li>
    </ul>
    <el-pagination class="pagination" background @current-change="handleCurrentChange" layout="prev, pager, next" :page-size="pagesize"
      :total="total" :pager-count="5" :current-page="pagenum">
    </el-pagination>
  </div>
</template>

<script>
  var url_news = "https://dev.arbaseworld.com/wb/n/news";
  export default {
    name: "news",
    data() {
      return {
        newsContent: [{
          month: "aa",
          day: ""
        }],
        childrenPath: "/data?page=news",
        total: 10,
        pagesize: 5,
        pagenum: 1
      };
    },
    mounted() {
      this.getNewsData(this.pagenum);

    },
    methods: {
      newsDataList: function (data) {
        this.newsContent = data;
        for (var i = 0; i < data.length; i++) {
          // console.log(this);
          // console.log(this.newsContent[i].month);
          this.newsContent[i].month = data[i].occurtime.substring(4, 6);
          this.newsContent[i].day = data[i].occurtime.substring(6, 8);
          // this.newsContent[i].title = data[i].title;
          // this.newsContent[i].brief = data[i].brief;
        }
      },
      getNewsData(pagenum) {
        const _this = this;
        this.axios({
            method: "get",
            url: url_news,
            params: {
              pagenum: pagenum
            }
          })
          .then(function (res) {
            // console.log(res.data);
            _this.total = res.data.total;
            _this.pagesize = res.data.pagesize;
            _this.newsDataList(res.data.news);
            // console.log(res.data.news);
          })
          .catch(function (error) {
            // console.log(error);
          });
      },
      handleCurrentChange(val) {
        this.pagenum = val;
        // console.log(`当前页: ${val}`);
        this.getNewsData(this.pagenum);
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title,
  .more {
    transition: .3s;
  }

  .title:hover {
    color: #959595;
  }

  .more:hover {
    color: #fff !important;
    background: #333;
  }

  .news-container {
    max-width: 1200px;
    position: relative;
    overflow: visible;
    margin: 0 auto;
    padding: 0 15px;
  }

  .news-list {
    padding-top: 35px;
  }

  .news-li {
    position: relative;
    overflow: hidden;
    margin-bottom: 35px;
    padding: 0;
    border-top: 2px dotted #959595;
  }

  .news-li .el-row {
    padding-top: 30px;
  }

  .news-left {
    height: 245px;
    position: relative;
    color: #ffffff;
    text-align: center;
    font-size: 50px;
    line-height: 112px;
  }

  .news-left .month {
    background-color: #2e6899;
    height: 50%;
    position: relative;
  }

  .news-left .day {
    background-color: #a0a0a0;
    height: 50%;
    position: relative;
  }

  .news-right {
    padding-left: 60px;
  }

  .news-right .title {
    font-size: 26px;
    line-height: 39px;
    /* font-family: "Microsoft YaHei"; */
    font-weight: bold;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .news-right .day-mobile {
    display: none;
    color: #959595;
    padding-top: 5px;
    text-align: center;
  }

  .news-right .content {
    height: 143px;
    position: relative;
    font-size: 16px;
    line-height: 28.5px;
    /* font-family: "SimHei"; */
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    -webkit-line-clamp: 5;
    text-align: justify;
  }

  .news-right .more {
    float: right;
    padding: 5px;
    margin-top: 25px;
    border: #959595 solid 1px;
    width: 160px;
    /* height: 30px; */
    text-align: center;
    color: #959595;
    font-size: 14px;
    line-height: 20px;
    /* font-family: "Arial"; */
  }

  .el-breadcrumb {
    padding: 65px 0 5px 0;
    font-size: 18px;
    line-height: 27px;
  }

  .el-pagination {
    text-align: center;
    font-size: 18px;
    color: #a0a0a0;
  }

  @media screen and (max-width: 768px) {
    .news-left {
      height: 124px;
      font-size: 30px;
      line-height: 62px;
    }
    .news-right {
      padding-left: 30px;
    }
    .news-right .title {
      line-height: 30px;
    }
    .news-right .content {
      height: 81px;
      font-size: 14px;
      line-height: 21px;
      /* font-family: "SimHei"; */
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      text-align: justify;
    }
    .news-right .more {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .news-li {
      margin-bottom: 15px;
    }
    .news-li .el-row {
      padding-top: 15px;
    }
    .news-left {
      display: none;
    }
    .news-right {
      width: 100%;
      padding-left: 0;
    }
    .news-right .day-mobile {
      display: block;
    }
    .news-right .title {
      font-size: 18px;
      line-height: 20px;
    }
    .news-right .content {
      height: 96px;
      font-size: 16px;
      line-height: 24px;
      /* font-family: "SimHei"; */
      margin-top: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      text-align: justify;
    }
    .news-right .more {
      margin-top: 10px;
      padding: 2px;
    }
  }

</style>
