<template>
  <div class="top">
    <el-carousel trigger="click" :height="head.bannerHeight + 'px'">
      <el-carousel-item v-for="(item,i) in head.banner" :key="item.title" class="banner-bg">
        <!-- <h3>{{ item }}</h3> -->
        <div class="top-title" :class="{'top-title-center':i==2}">
          <h2 :class="className[i].h2">
            <span v-if="i!=2">
              {{item.title}}
            </span>
            <span class="top-title-j" v-if="i==2">
              {{item.title}}
            </span>
            <span>
              {{item.titleBr}}
            </span>
          </h2>
          <p :class="className[i].p">
            {{item.p}}
            <br>{{item.pBr}}
          </p>
        </div>
        <img class="banner" :src="item.src" alt="" ref="bann" />
        <!-- <img src="" alt=""> -->
      </el-carousel-item>
    </el-carousel>
    <!-- pc端导航 -->
    <div class="top-header">
      <el-row type="flex" class="header hidden-xs-only">
        <el-col :sm="7" :md="9" :lg="11" class="logo ">
          <router-link to="/">
            <img src="../assets/images/home/logo.png" alt="">
          </router-link>
        </el-col>
        <el-col :sm="17" :md="15" :lg="13" class="top-nav">
          <el-row type="flex" :gutter="5" justify="space-between">
            <el-col :span="5" v-for="(con,i) in nav" :key="con.en">
              <router-link class="top-nav-child" :to="con.link" ref="nav" v-bind:class="{ active: isActive[i] }">
                <span>{{con.en}}</span>
                <br/>{{con.zh}}
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 移动端导航 -->
    <el-menu default-active="1" class="xs-header hidden-sm-and-up el-menu-vertical-demo" background-color="rgba(47, 42, 43, 0.5)"
      text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <img src="../assets/images/home/logo.png" alt="">
        </template>
        <el-menu-item v-for="(con,i) in nav" :key="con.en" :index="'1-'+i" class="xs-nav">
          <router-link :to="con.link">
            {{con.en}}&nbsp;&nbsp;&nbsp;&nbsp;{{con.zh}}
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        nav: [{
            en: "HOME",
            zh: "首页",
            link: "/home"
          },
          {
            en: "NEWS",
            zh: "新闻动态",
            link: "/news"
          },
          {
            en: "CASE",
            zh: "案例分享",
            link: "/case"
          },
          {
            en: "ABOUT",
            zh: "关于我们",
            link: "/about"
          },
          {
            en: "CONTACT",
            zh: "联系我们",
            link: "/contact"
          }
        ],
        head: {
          banner: [{
              src: require("../assets/images/home/b1.jpg"),
              title: "璟世数字",
              titleBr: "创造美学科技",
              p: "Baseworld Digital Solution",
              pBr: "Creative aesthetic technology"
            },
            {
              src: require("../assets/images/home/b2.jpg"),
              title: "以多媒体交互",
              titleBr: "撬动市场营销的灵感",
              p: "Baseworld Digital Solution",
              pBr: "Creative aesthetic technology"
            },
            {
              src: require("../assets/images/home/b3.jpg"),
              title: "璟世数字科技",
              titleBr: "引领体验营销新纪元",
              p: "Baseworld Digital Solution",
              pBr: "Creative aesthetic technology"
            }
          ],
          bannerHeight: 500
        },
        className: [{
            h2: "top-title-h2a",
            p: "top-title-pa"
          },
          {
            h2: "top-title-h2b",
            p: "top-title-pb"
          },
          {
            h2: "top-title-h2c",
            p: "top-title-pc"
          }
        ],
        isActive: [false, false, false, false, false]
      };
    },
    mounted() {
      const _this = this;
      // 获取及监控banner高度
      document.getElementsByClassName("banner")[0].onload = function () {
        _this.h();
      };
      window.addEventListener(
        "resize",
        function () {
          _this.h();
        },
        false
      );
      this.parUrl(this.$route.path);
      // console.log(this.$route.path)
    },
    watch: {
      $route(to, from) {
        var str = to.path.toString();
        if (str != "/home" && str != "/" && to.query.type == undefined) {
          var i = 0;
          var speed = this.head.bannerHeight / 15;
          var setT = setInterval(() => {
            i += speed;
            window.scrollTo(0, i);
            if (i >= this.head.bannerHeight) {
              return clearInterval(setT);
            }
          }, 1000 / 60);
        }
        if (from.path == '/' || from.path == '/home') {
          if (to.query.type != undefined) {
            var i = 0;
            var speed = this.head.bannerHeight / 15;
            var setT = setInterval(() => {
              i += speed;
              window.scrollTo(0, i);
              if (i >= this.head.bannerHeight) {
                return clearInterval(setT);
              }
            }, 1000 / 60);
          }
        }
        this.parUrl(to.path);
      }
    },
    methods: {
      h: function () {
        this.head.bannerHeight = document.getElementsByClassName("banner")[0].offsetHeight;
      },
      // 解析路径
      parUrl: function (path) {
        const _this = this;
        var str = path.toString();
        _this.isActive = [false, false, false, false, false];
        switch (str) {
          case "/":
          case "/home":
            // active
            _this.isActive[0] = true;
            break;
          case "/news":
            _this.isActive[1] = true;
            // console.log(this.$refs.nav[0])
            break;
          case "/case":
            _this.isActive[2] = true;
            break;
          case "/about":
            _this.isActive[3] = true;
            break;
          case "/contact":
            _this.isActive[4] = true;
            break;
          case "/data":
            break;
          default:
            window.location.href = '/#/'
            break;
        }
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
  .top {
    position: relative;
  }

  .top-title {
    /* width: 100%; */
    max-width: 1170px;
    margin: 0 auto;
    color: #fff;
    padding: 0 15px;
    margin-top: 13%;
  }

  .top-title span {
    display: block;
  }

  .top-title-h2a {
    position: relative;
    width: 100%;
    /* font-size: 88px; */
    font-size: 4.5vw;
    margin-bottom: 0.5em;
  }

  .top-title-h2a::before {
    content: "";
    background: url("../assets/images/home/dian.png");
    position: absolute;
    left: 0;
    bottom: 0;
    width: 45%;
    height: 2px;
  }

  .top-title-pa {
    position: relative;
    width: 100%;
    /* font-size: 24px; */
    font-size: 1.25vw;
  }

  .top-title-h2b {
    position: relative;
    width: 100%;
    text-align: right;
    /* font-size: 88px; */
    font-size: 4.5vw;
    margin-bottom: 0.5em;
  }

  .top-title-h2b::before {
    content: "";
    background: url("../assets/images/home/dian.png");
    position: absolute;
    right: 0;
    bottom: 0;
    width: 42%;
    height: 2px;
  }

  .top-title-pb {
    position: relative;
    width: 100%;
    text-align: right;
    /* font-size: 24px; */
    font-size: 1.25vw;
  }

  .top-title.top-title-center {
    position: relative;
    text-align: center;
    /* font-size: 60px; */
    font-size: 3vw;
    width: 10em;
    margin: 15% auto 0;
    padding: 0.5em 0;
    background: rgba(0, 0, 0, 0.55);
  }

  @media screen and (max-width: 500px) {
    .top-title.top-title-center {
      position: relative;
      text-align: center;
      /* font-size: 60px; */
      font-size: 3vw;
      width: 20em;
      margin: 10% auto 0;
      padding: 0.5em 0;
      background: rgba(0, 0, 0, 0.55);
    }
  }

  .top-title.top-title-center::before {
    content: "";
    position: absolute;
    top: -8%;
    left: -4%;
    width: 108%;
    height: 116%;
    border: 2px solid rgba(0, 0, 0, 0.55);
  }

  .top-title-h2c {
    position: relative;
    display: inline-block;
    text-align: center;
    font-weight: 200;
    /* font-size: 60px; */
    font-size: 3vw;
    margin-bottom: 0.5em;
  }

  .top-title-j {
    display: block;
    height: 1.2em;
    line-height: 1.2em;
    text-align: justify;
  }

  .top-title-j::after {
    /* position: absolute; */
    content: " ";
    display: inline-block;
    width: 100%;
  }

  .top-title-pc {
    position: relative;
    width: 100%;
    text-align: center;
    /* font-size: 24px; */
    font-size: 1.25vw;
    font-weight: 300;
    color: #959595;
  }

  /* .banner-bg {
    background: url('../assets/images/home/banner2.jpg') no-repeat center center;
    background-size: 120%;
  } */

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    /* opacity: 0; */
  }

  .top-header {
    position: absolute;
    top: 50px;
    width: 100%;
    z-index: 9;
    text-align: center;
  }

  .xs-header {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 9;
  }

  .xs-header img {
    max-width: 30%;
  }

  .header {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .logo {
    display: flex;
    justify-content: flex-start;
  }

  .top-nav {
    color: #000;
    font-size: 14px;
  }

  .top-nav a {
    color: #000;
    text-decoration: none;
  }

  .top-nav-child {
    display: block;
    background: #fff;
    padding: 3px 0;
    transition: 0.3s;
  }

  .top-nav-child:hover,
  .top-nav-child:hover span {
    color: #fff;
    transition: 0.3s;
  }

  .top-nav-child:hover {
    background: #000;
  }

  .top-nav-child.active {
    background: #000;
    color: #fff;
  }

  .top-nav-child span {
    /* color: #000; */
    font-size: 12px;
  }

  .banner {
    display: block;
    width: 100%;
    height: auto;
  }

  .xs-nav a {
    text-decoration: none;
    color: #fff;
  }

  .xs-nav a:hover {
    color: #00f0ff;
  }

  /* .el-carousel__item:nth-child(2n) {
    background: url("../assets/images/home/banner1.jpg") no-repeat;
    background-size: 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
    background: url("../assets/images/home/banner2.jpg") no-repeat;
    background-size: 100%;
  } */

</style>
