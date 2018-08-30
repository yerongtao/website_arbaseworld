<template>
  <div class="case-container" style="min-height:100vh">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>案例分享</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="case-type">
      <div class="case-type-menu">案例分类：</div>
      <ul class="case-type-list">
        <li v-for="(item,index) in caseType" :key="item.type">
          <router-link class="" :to="'/case'+'?type='+index">
            <div :class="{ active: item.isActive }">{{ item.message }}</div>
          </router-link>
        </li>
      </ul>
    </div>

    <ul class="case-list clear">
      <li v-for="item in caseContent" class="case-li" :key="item.id">
        <el-row>
          <el-col :span="5" class="case-left">
            <router-link class="" :to="childrenPath+'&id='+item.id">
              <div class="image" :style="'backgroundImage:url('+item.thumbnail+');'">
                <!-- <img :src="item.thumbnail" alt=""> -->
              </div>
            </router-link>
          </el-col>
          <el-col :span="19" class="case-right">
            <router-link class="" :to="childrenPath+'&id='+item.id">
              <div class="title">{{ item.title }}</div>
            </router-link>
            <div class="content">{{ item.brief }}</div>
            <router-link class="" :to="childrenPath+'&id='+item.id">
              <div class="more">More+</div>
            </router-link>
          </el-col>
        </el-row>
      </li>
    </ul>
    <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :page-size="pagesize" :total="total"
      :pager-count="5" :current-page="pagenum">
    </el-pagination>
  </div>
</template>

<script>
  var url_case = "https://dev.arbaseworld.com/wb/s/sample?";
  var caseType = [{
      type: 0,
      message: "全部",
      isActive: true
    },
    {
      type: 1,
      message: "商业活动",
      isActive: false
    },
    {
      type: 2,
      message: "展览展厅",
      isActive: false
    },
    {
      type: 3,
      message: "市场营销",
      isActive: false
    },
    {
      type: 4,
      message: "其他",
      isActive: false
    }
  ]
  export default {
    name: "case",
    // image: require('../assets/images/home/case-1.png'),
    data() {
      return {
        caseContent: [],
        caseType: caseType,
        childrenPath: "/data?page=case",
        total: 10,
        pagesize: 5,
        type: 0,
        pagenum: 1
      };
    },
    watch: {
      $route(to, from) {
        // console.log(to);
        this.pagenum = 1;
        if (to.query.type != null && to.query.type != "" && to.query.type < 5 && to.query.type > 0) {
          this.getCaseData(to.query.type, this.pagenum);
        } else {
          this.getCaseData(0, this.pagenum);
        }
      }
    },
    mounted() {
      if (this.$route.query.type != null && this.$route.query.type != "") {
        this.type = this.$route.query.type;
        this.getCaseData(this.type, this.pagenum);
        // console.log(this.$route.query.type);
      } else {
        this.type = 0;
        this.getCaseData(0, this.pagenum);
      }

    },
    methods: {
      getCaseData(type, pagenum) {
        if (type > 0 && type < 5) {
          this.type = type;
          this.active(type);
          var _URL = url_case + "&pagenum=" + pagenum + "&type=" + type;
        } else {
          this.type = 0;
          this.active(0);
          var _URL = url_case + "&pagenum=" + pagenum;
        }
        const _this = this;

        this.axios({
            method: "get",
            url: _URL
          })
          .then(function (res) {
            // console.log(res.data);
            _this.pagenum = res.data.pagenum;
            _this.total = res.data.total;
            _this.pagesize = res.data.pagesize;
            _this.caseContent = res.data.samples;
          })
          .catch(function (error) {
            // console.log(error);
          });
      },
      active(type) {
        // this.type = type;
        for (let i = 0; i < this.caseType.length; i++) {
          this.caseType[i].isActive = false;
        }
        this.caseType[type].isActive = true;
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        // this.pagenum = val;
        this.getCaseData(this.type, val);
        // this.active(this.type);
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title,
  .more,
  .image {
    transition: .3s;
  }

  .title:hover {
    color: #959595;
  }

  .image:hover {
    transform: scale(1.2);
  }

  .more:hover {
    color: #fff !important;
    background: #333;
  }

  .clear {
    clear: both;
  }

  .case-container {
    max-width: 1200px;
    position: relative;
    overflow: visible;
    margin: 0 auto;
    padding: 0 15px;
  }

  .case-type {
    border-top: 2px dotted #959595;
    padding: 20px 0 15px 0;
    padding-top: 35px;
    font-size: 18px;
    line-height: 27px;
    /* font-family: "SimHei"; */
    display: block;
  }

  .case-type .case-type-menu {
    float: left;
    padding: 10px 0;
  }

  .case-type .case-type-list {
    width: 100%;
  }

  .case-type .case-type-list li {
    float: left;
  }

  .case-type .case-type-list li div {
    padding: 10px 15px;
    margin-left: 5px;
    text-align: center;
  }

  .case-type .case-type-list li div:hover {
    background-color: #d1d1d1;
    color: #ffffff;
  }

  .case-type .case-type-list li div.active {
    background-color: #959595;
    color: #ffffff;
  }

  .case-li {
    position: relative;
    overflow: hidden;
    margin-bottom: 35px;
    padding: 0;
    border-top: 2px dotted #959595;
  }

  .case-li:first-child {
    border-top: none;
  }

  .case-li .el-row {
    padding-top: 30px;
  }

  .case-left {
    height: 254px;
    overflow: hidden;
  }

  .case-left .image {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .case-right {
    padding-left: 60px;
  }

  .case-right .title {
    font-size: 26px;
    line-height: 39px;
    /* font-family: "Microsoft YaHei"; */
    font-weight: bold;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .case-right .content {
    height: 143px;
    font-size: 16px;
    line-height: 28.5px;
    /* font-family: "SimHei"; */
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    text-align: justify;
  }

  .case-right .more {
    float: right;
    padding: 5px;
    margin-top: 25px;
    border: #959595 solid 1px;
    width: 160px;
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
    .case-left {
      height: 123px;
      overflow: hidden;
    }
    .case-right {
      padding-left: 30px;
    }
    .case-right .title {
      line-height: 30px;
    }
    .case-right .content {
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
    .case-right .more {
      display: none;
    }

  }

  @media screen and (max-width: 480px) {
    .case-type {
      font-size: 14px;
    }
    .case-type .case-type-menu {
      display: none;
    }
    .case-type .case-type-list li div {
      padding: 5px;
    }
    .case-type .case-type-list li div:first-child {
      margin-left: 0;
    }
    .case-li {
      margin-bottom: 15px;
    }
    .case-li .el-row {
      padding-top: 15px;
    }
    .case-left {
      height: 83px;
      overflow: hidden;
    }
    .case-right {
      padding-left: 10px;
    }
    .case-right .title {
      font-size: 18px;
      line-height: 20px;
    }
    .case-right .content {
      height: 62px;
      font-size: 14px;
      line-height: 21px;
      /* font-family: "SimHei"; */
      margin-top: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 3;
      text-align: justify;
    }
    .case-right .more {
      display: none;
    }
  }

</style>
