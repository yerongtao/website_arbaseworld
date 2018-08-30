<template>
  <div class="home">
    <el-container>
      <!-- 案例分类 -->
      <el-row type="flex" :gutter="5" justify="space-between" style="flex-wrap: wrap">
        <el-col :xs="12" :sm="7" :md="5" v-for="item in case_classify" :key="item.id">
          <router-link class="home-case" :to="item.href">
            <span class="home-case-en">{{item.title_en}}</span>
            <br/>{{item.title}}
            <img :src="item.url" alt="" />
            <span class="home-case-more">More+</span>
          </router-link>
        </el-col>
      </el-row>
      <!-- 新闻 -->
      <div class="home-news">
        <el-row class="home-news-list" style="flex-wrap: wrap" type="flex" :gutter="0" justify="center" v-for="(item,index) in news_show"
          :key="item.id">
          <el-col :xs="18" :sm="10" class="home-news-date home-news-left hidden-xs-only" v-if="index%2==0">
            <span>{{item.occurtime}}</span>
          </el-col>
          <el-col :xs="18" :sm="10" class="home-news-left hidden-xs-only" v-if="index%2==1">
            <router-link class="home-news-title" :to="'/data?page=news&id='+item.id">
              {{item.title}}
            </router-link>
            <p class="home-news-p">{{item.brief}}</p>
          </el-col>
          <!-- <el-col :xs="18" :sm="10" class="home-news-date home-news-right hidden-sm-and-up">
            <span>{{item.wealth}}</span>
          </el-col> -->
          <el-col :pull="5" :xs="12" :sm="10" class="home-news-date home-news-left hidden-sm-and-up">
            <span>{{item.occurtime}}</span>
          </el-col>
          <el-col :xs="8" :sm="3" justify="center">
            <router-link class="home-news-icon" :to="'/data?page=news&id='+item.id" :style="'backgroundImage:url('+item.thumbnail+')'">
            </router-link>
          </el-col>
          <el-col :xs="23" :sm="10" class="home-news-right hidden-sm-and-up">
            <router-link class="home-news-title" :to="'/data?page=news&id='+item.id">
              {{item.title}}
            </router-link>
            <p class="home-news-p">{{item.brief}}</p>
          </el-col>
          <el-col :xs="18" :sm="10" class="home-news-right hidden-xs-only" v-if="index%2==0">
            <router-link class="home-news-title" :to="'/data?page=news&id='+item.id">
              {{item.title}}
            </router-link>
            <p class="home-news-p">{{item.brief}}</p>
          </el-col>
          <el-col :xs="18" :sm="10" class="home-news-date home-news-right hidden-xs-only" v-if="index%2==1">
            <span>{{item.occurtime}}</span>
          </el-col>
        </el-row>
      </div>
      <!-- 案例 -->
      <div class="case">
        <el-row class="case-list" :gutter="5" type="flex" justify="space-between" style="flex-wrap: wrap">
          <el-col :xs="12" :sm="7" :md="5" class="" v-for="item in case_list" :key="item.id">
            <router-link class="" :to="'/data?page=case&id='+item.id">
              <div class="case-list-img" ref="case_list_imgW" :style="'backgroundImage:url('+item.thumbnail+');height:'+case_list_imgH"></div>
              <div class="case-down">
                <span class="case-title">{{item.title}}</span>
                <!-- <br /> -->
                <span class="case-date">{{item.occurtime}}</span>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <!-- 合作企业 -->
      <el-carousel class="logo-banner" trigger="click" arrow="always" :height="banner.height + 'px'" indicator-position="none"
        @change="carousel">
        <el-carousel-item v-for="item in banner.src" :key="item" name="index">
          <!-- <h3>{{ item }}</h3> -->
          <img class="home-banner" :src="item" alt="" ref="home_banner" />
          <!-- <img src="" alt=""> -->
        </el-carousel-item>
      </el-carousel>
      <el-footer></el-footer>
    </el-container>
    <div class="home-foot">
      <el-row type="flex" class="home-foot-bottom" justify="center" :gutter="30" style="flex-wrap: wrap">
        <el-col :xs="22" :sm="12" :md="10">
          <div class="home-map">
            <baiduMap name=""></baiduMap>
          </div>
        </el-col>
        <el-col :xs="22" :sm="12" :md="10">
          <div class="home-msg">
            <p class="home-msg-top">
              联系我们
            </p>
            <div class="home-msg-bottom">
              <a href="tel:021-63020289">
                <p>
                  联系电话：
                  <i class="el-icon-phone-outline"></i> 021-63020289
                </p>
              </a>
              <a href="mailto:admin@arbaseworld.com">
                <p>
                  公司邮箱：
                  <i class="el-icon-message"></i> admin@arbaseworld.com
                </p>
              </a>
              <a href="https://www.arbaseworld.com">
                <p>
                  公司网站：
                  <i class="el-icon-document"></i> https://www.arbaseworld.com
                </p>
              </a>
              <a href="http://j.map.baidu.com/Xc9FB">
                <p>
                  公司地址：
                  <i class="el-icon-location-outline"></i> 上海市杨浦区隆昌路619号城市概念1号楼B215
                </p>
              </a>
              <el-row type="flex" class="home-foot-code">
                <el-col :span="6" class="home-foot-code-img">
                  <!-- 二维码 -->
                  <img src="../assets/images/home/code.png" alt="">
                </el-col>
                <el-col :span="16" class="home-foot-code-msg">
                  公众号：ARBaseworld
                  <br/> 扫描二维码，即可关注我们！
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <ul class="home-link-bottom">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/news">新闻动态</router-link>
        </li>
        <li>
          <router-link to="/case">案例分享</router-link>
        </li>
        <li>
          <router-link to="/about">关于我们</router-link>
        </li>
        <li>
          <router-link to="/contact">联系我们</router-link>
        </li>
      </ul>
      <p class="home-trademark">
        Baseworld Digital Solutio
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    // component: resolve => require(['@/head_foot/baiduMap'], resolve),
    components: {
      baiduMap: resolve => require(["@/head_foot/baiduMap"], resolve)
    },

    data() {
      return {
        banner: {
          src: [
            require("../assets/images/home/brand-logo-1.png"),
            require("../assets/images/home/brand-logo-2.png"),
            require("../assets/images/home/brand-logo-3.png")
          ],
          height: ""
        },
        // 案例分类
        case_classify: [{
            id: 1,
            title: "商业活动",
            url: require("../assets/images/home/news-commercial-2.png"),
            title_en: "Commercial performance",
            href: "/case?type=1"
          },
          {
            id: 2,
            title: "展览展厅",
            url: require("../assets/images/home/news-hall-2.png"),
            title_en: "Exhibition hall",
            href: "/case?type=2"
          },
          {
            id: 3,
            title: "市场营销",
            url: require("../assets/images/home/news-marketing-2.png"),
            title_en: "Online marketing",
            href: "/case?type=3"
          },
          {
            id: 4,
            title: "其它",
            url: require("../assets/images/home/news-others-2.png"),
            title_en: "Others",
            href: "/case?type=4"
          }
        ],
        case_list: [{
            id: 0,
            title: "博多控股",
            thumbnail: require("../assets/images/home/case-1.png"),
            occurtime: "20180501",
            type: "2",
            // herf: ""
          },
          {
            id: 1,
            title: "博多控股",
            thumbnail: require("../assets/images/home/case-2.png"),
            occurtime: "20180505",
            type: "3",
            // herf: ""
          },
          {
            id: 2,
            title: "博多控股",
            thumbnail: require("../assets/images/home/case-3.png"),
            occurtime: "20180505",
            type: "1",
            // herf: ""
          },
          {
            id: 3,
            title: "博多控股",
            thumbnail: require("../assets/images/home/case-4.png"),
            occurtime: "20180505",
            type: "1",
            // herf: ""
          },
          {
            id: 4,
            title: "博多控股",
            thumbnail: require("../assets/images/home/case-5.png"),
            occurtime: "20180505",
            type: "2",
            // herf: ""
          },
          {
            id: 5,
            title: "博多控股",
            thumbnail: require("../assets/images/home/case-6.png"),
            occurtime: "20180505",
            type: "3",
            // herf: ""
          },
          {
            id: 6,
            title: "博多控股",
            thumbnail: require("../assets/images/home/case-7.png"),
            occurtime: "20180505",
            type: "2",
            // herf: ""
          },
          {
            id: 7,
            title: "其它",
            thumbnail: require("../assets/images/home/case-8.png"),
            occurtime: "20180505",
            type: "3",
            // herf: ""
          }
        ],
        case_list_herf: '/case',
        case_list_imgH: '200px',
        news_show: [{
            brief: 'CES最近被刷屏了，搞不清楚的人就会冒出一个大疑问：CES？到底是什么？之所以最近这么火，是因为2018年的CES（美国国际电子消费展）1月12日CES会带你逛遍潮流酷玩，解读科技风向。  ↵ ↵美国消费技术协会(CTA)总裁兼首席执行官Gary Shapiro表示："CES是一个全球平台， 为当今的突破性创新和未来远景展望提供了一个清晰的窗口， 在这里既可以看到重大的细分技术， 也能更好地了解它们之间的相互联系。 "飘洋过海，璟世科技团队来到拉斯维加斯CES的现场，在现场人声鼎沸，满满的科技感让每个参展的人都热情十足。↵ ↵璟世科技作为一家AR科技公司，带着专业的眼光去参观这次的展览，作为有深度的参展人，璟世科技团队看的不是科技本身，而是更加关注未来的科技趋势。去不了拉斯维加斯也没关系，跟着璟世团队的视角一览CES的风采。',
            id: 'bd36de192f124b2ede0eb43b9061269c',
            occurtime: '20180118',
            thumbnail: require("../assets/images/home/news-commercial-2.png"),
            title: 'CES 2018：AI在前，硬件先行',
          },
          {
            brief: 'CES最近被刷屏了，搞不清楚的人就会冒出一个大疑问：CES？到底是什么？之所以最近这么火，是因为2018年的CES（美国国际电子消费展）1月12日CES会带你逛遍潮流酷玩，解读科技风向。  ↵ ↵美国消费技术协会(CTA)总裁兼首席执行官Gary Shapiro表示："CES是一个全球平台， 为当今的突破性创新和未来远景展望提供了一个清晰的窗口， 在这里既可以看到重大的细分技术， 也能更好地了解它们之间的相互联系。 "飘洋过海，璟世科技团队来到拉斯维加斯CES的现场，在现场人声鼎沸，满满的科技感让每个参展的人都热情十足。↵ ↵璟世科技作为一家AR科技公司，带着专业的眼光去参观这次的展览，作为有深度的参展人，璟世科技团队看的不是科技本身，而是更加关注未来的科技趋势。去不了拉斯维加斯也没关系，跟着璟世团队的视角一览CES的风采。',
            id: 'bd',
            occurtime: '20180118',
            thumbnail: require('../assets/images/home/news-commercial-2.png'),
            title: 'CES 2018：AI在前，硬件先行',
          },
          {
            brief: 'CES最近被刷屏了，搞不清楚的人就会冒出一个大疑问：CES？到底是什么？之所以最近这么火，是因为2018年的CES（美国国际电子消费展）1月12日CES会带你逛遍潮流酷玩，解读科技风向。  ↵ ↵美国消费技术协会(CTA)总裁兼首席执行官Gary Shapiro表示："CES是一个全球平台， 为当今的突破性创新和未来远景展望提供了一个清晰的窗口， 在这里既可以看到重大的细分技术， 也能更好地了解它们之间的相互联系。 "飘洋过海，璟世科技团队来到拉斯维加斯CES的现场，在现场人声鼎沸，满满的科技感让每个参展的人都热情十足。↵ ↵璟世科技作为一家AR科技公司，带着专业的眼光去参观这次的展览，作为有深度的参展人，璟世科技团队看的不是科技本身，而是更加关注未来的科技趋势。去不了拉斯维加斯也没关系，跟着璟世团队的视角一览CES的风采。',
            id: 'bd36d',
            occurtime: '20180118',
            thumbnail: require('../assets/images/home/news-commercial-2.png'),
            title: 'CES 2018：AI在前，硬件先行',
          },
          {
            brief: 'CES最近被刷屏了，搞不清楚的人就会冒出一个大疑问：CES？到底是什么？之所以最近这么火，是因为2018年的CES（美国国际电子消费展）1月12日CES会带你逛遍潮流酷玩，解读科技风向。  ↵ ↵美国消费技术协会(CTA)总裁兼首席执行官Gary Shapiro表示："CES是一个全球平台， 为当今的突破性创新和未来远景展望提供了一个清晰的窗口， 在这里既可以看到重大的细分技术， 也能更好地了解它们之间的相互联系。 "飘洋过海，璟世科技团队来到拉斯维加斯CES的现场，在现场人声鼎沸，满满的科技感让每个参展的人都热情十足。↵ ↵璟世科技作为一家AR科技公司，带着专业的眼光去参观这次的展览，作为有深度的参展人，璟世科技团队看的不是科技本身，而是更加关注未来的科技趋势。去不了拉斯维加斯也没关系，跟着璟世团队的视角一览CES的风采。',
            id: 'bde192',
            occurtime: '20180118',
            thumbnail: require('../assets/images/home/news-commercial-2.png'),
            title: 'CES 2018：AI在前，硬件先行',
          },
          {
            brief: 'CES最近被刷屏了，搞不清楚的人就会冒出一个大疑问：CES？到底是什么？之所以最近这么火，是因为2018年的CES（美国国际电子消费展）1月12日CES会带你逛遍潮流酷玩，解读科技风向。  ↵ ↵美国消费技术协会(CTA)总裁兼首席执行官Gary Shapiro表示："CES是一个全球平台， 为当今的突破性创新和未来远景展望提供了一个清晰的窗口， 在这里既可以看到重大的细分技术， 也能更好地了解它们之间的相互联系。 "飘洋过海，璟世科技团队来到拉斯维加斯CES的现场，在现场人声鼎沸，满满的科技感让每个参展的人都热情十足。↵ ↵璟世科技作为一家AR科技公司，带着专业的眼光去参观这次的展览，作为有深度的参展人，璟世科技团队看的不是科技本身，而是更加关注未来的科技趋势。去不了拉斯维加斯也没关系，跟着璟世团队的视角一览CES的风采。',
            id: 'bde1as92',
            occurtime: '20180118',
            thumbnail: require('../assets/images/home/news-commercial-2.png'),
            title: 'CES 2018：AI在前，硬件先行',
          }
        ],
      };
    },
    mounted() {
      const _this = this;
      // 获取及监控banner高度
      document.querySelector(".home-banner").addEventListener("load", function () {
        _this.banH();
      });
      // console.log(_this.banner)
      window.addEventListener(
        "resize",
        function () {
          _this.banH();
        },
        false
      );
      // 新闻
      this.axios({
        // method: 'get',
        url: "https://dev.arbaseworld.com/wb/n/news",
        params: {
          page: "main"
        }
      }).then(function (res) {
        // id // title // thumbnail // occurtime // brief
        _this.news_show = res.data.news;
        // console.log(_this.news_show);
        // 遍历数据，文本做截取处理，时间做格式处理
        _this.news_show.forEach(el => {
          el.occurtime.split('')
          var time = el.occurtime.split('');
          el.occurtime = '';
          for (let i = 0; i < time.length; i++) {
            el.occurtime += time[i];
            if (i == 3 || i == 5) {
              el.occurtime += "-";
            }
          }
          if (el.title.length >= 20) {
            el.title = el.title.substring(0, 20) + '...'
          }
          if (el.brief.length >= 128) {
            el.brief = el.brief.substring(0, 128) + '...'
          }
        });
        // console.log(_this.news_show[0].occurtime);
      }).catch(function (error) {
        console.log(error);
      });
      // 案例列表
      this.axios({
        // method: 'post',
        url: 'https://dev.arbaseworld.com/wb/s/sample',
        params: {
          page: "main"
        }
      }).then(function (res) {
        _this.case_list = res.data.samples;
        // console.log(_this.case_list)

        _this.case_list.forEach(el => {
          el.occurtime.split('')
          var time = el.occurtime.split('');
          el.occurtime = '';
          for (let i = 0; i < time.length; i++) {
            el.occurtime += time[i];
            if (i == 3 || i == 5) {
              el.occurtime += "-";
            }
          }
          el.href = '';
          el.href += '/case?type=' + el.type;
        });
        // console.log(_this.case_list);
        // id // title // thumbnail // occurtime // brief //type
      }).catch(function (error) {
        console.log(error);
      });
    },

    methods: {
      dateFormat: function (param) {
        param.split('')
        var time = param.split('');
        param = '';
        for (let i = 0; i < time.length; i++) {
          param += time[i];
          if (i == 3 || i == 5) {
            param += "-";
          }
        }
      },
      carousel: function (param) {
        // console.log(param)
        // this.banH();
        // 每次轮播图 转动触发
      },
      banH: function () {
        this.banner.height = this.$refs.home_banner[0].offsetHeight;
        this.case_list_imgH = this.$refs.case_list_imgW[0].offsetWidth * 0.66 + 'px';
      },
      change: function (a) {
        console.log(a);
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .home-case {
    margin: 50px auto;
    display: block;
    text-align: center;
    color: #000;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
  }

  .home-case:hover {
    cursor: pointer;
  }

  .home-case:hover img {
    /* filter: blur(5px); */
    filter: brightness(1);
    transform: scale(1.1);
    transition: 0.3s;
  }

  .home-case img {
    display: inline-block;
    width: 100%;
    height: auto;
    margin: 1em auto;
    filter: brightness(0.55);
    transition: 0.3s;
  }

  .home-case-en,
  .home-case-more {
    white-space: nowrap;
    font-size: 14px;
    color: #959595;
  }

  .home-case-more {
    display: inherit;
    text-align: right;
  }

  .home-news {
    position: relative;
    padding-top: 50px;
  }

  .home-news::before {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    width: 1px;
    height: calc(100% - 1.8em);
    background: #000;
  }

  .home-news-list {
    margin-bottom: 1.8em;
  }

  .home-news-date {
    position: relative;
    padding: 0.5em 2em 0 2em;
  }

  .home-news-left {
    text-align: right;
  }

  .home-news-right {
    text-align: left;
  }

  .home-news-date span {
    font-size: 18px;
  }

  .home-news-date.home-news-left span::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 0;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-left: 18px solid #f44336;
    border-bottom: 7px solid transparent;
  }

  .home-news-date.home-news-right span::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 18px solid #f44336;
    border-bottom: 7px solid transparent;
  }

  .home-news-title {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 2em;
    transition: 0.3s;
  }

  .home-news-title:hover {
    color: #959595;
  }

  .home-news-p {
    font-size: 14px;
    text-align: justify;
  }

  .home-news-icon {
    display: block;
    /* width: 100%; */
    /* height: auto; */
    margin: -5px auto 0;
    width: 60px;
    height: 60px;
    background: url("../assets/images/home/news-commercial-2.png") no-repeat center center;
    background-size: cover;
    border-radius: 50%;
    transition: 0.3s;
  }

  .home-news-icon:hover {
    transform: scale(1.3);
  }

  /* .home-news-icon img {
    display: inline-block;
    width: 100%;
    height: auto;

  } */

  .case img {
    display: inline-block;
    width: 100%;
    height: auto;
  }

  .case-list {
    margin: 4em auto 6em;
  }

  .case-list a {
    position: relative;
    display: block;
    padding-bottom: 1em;
  }

  .case-list a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #e9e9e9;
    bottom: 12%;
  }

  .case-list a {
    color: #000;
    text-decoration: none;
  }

  .case-list-img {
    background: url("../assets/images/home/news-commercial-2.png") no-repeat center center;
    background-size: cover;
    filter: brightness(0.55);
    transition: 0.3s;
  }

  .case-list a:hover .case-list-img {
    filter: brightness(1);
    transform: scale(1.1);
  }

  .case-down {
    padding: 0.8em 1.2em 2em;
  }

  .case-title,
  .case-date {
    font-size: 14px;
    /* font-family: 'Microsoft YaHei'; */
    height: 3em;
    line-height: 1.5em;
    overflow: hidden;
    display: block;
  }

  .case-date {
    font-size: 14px;
    color: #959595;
    line-height: 1.5em;
    height: 1.5em
  }

  /* .logo-banner {
    width: 80%;
  } */

  .home-banner {
    display: block;
    width: 65%;
    height: auto;
    margin: 0 auto;
  }

  /* .el-footer {} */

  .home-foot {
    background: url("../assets/images/home/btm-bg.jpg") no-repeat center center;
    background-size: cover;
    margin: 2em 0 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .home-map {
    height: 100%;
  }

  .home-foot-bottom {
    flex: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 2.5em auto 2em;
    padding: 0 15px;
    text-align: left;
  }

  .home-foot-code {
    margin-bottom: 1em;
    font-size: 14px;
    padding: 0.5em 0 0 0.5em;
  }

  .home-msg {
    width: 100%;
    height: 100%;
    background: #ffffff;
    color: #000;
  }

  .home-msg p {
    font-size: 14px;
    margin: 0.5em;
    color: #000;
  }

  a {
    text-decoration: none;
  }

  .home-msg a p:hover {
    color: #959595;
    text-decoration: none;
  }

  p.home-msg-top {
    margin: 0;
    text-align: center;
    font-size: 20px;
    font-family: 600;
    color: #fff;
    background: #959595;
    line-height: 2em;
  }

  .home-msg-bottom {
    padding: 4% 0 0 4%;
  }

  .home-foot-code-img img {
    display: block;
    max-width: 5em;
    max-height: 5em;
  }

  .home-foot-code-msg {
    padding: 3% 10px;
  }

  .home-link-bottom {
    display: inline-flex;
    flex: 100%;
    justify-content: center;
    list-style: none;
    text-align: center;
    margin-top: 0;
  }

  .home-link-bottom a {
    font-size: 14px;
    color: #fff;
  }

  .home-link-bottom a:hover {
    text-decoration: underline;
  }

  .home-link-bottom li {
    position: relative;
    padding: 0 1em;
  }

  .home-link-bottom li::after {
    position: absolute;
    right: 0;
    color: #fff;
    content: "/";
  }

  .home-link-bottom li:last-child::after {
    content: "";
  }

  .home-trademark {
    margin: 0.5em 0 1.5em;
    font-size: 14px;
    color: #fff;
  }

  /* >768px */

  @media screen and (max-width: 768px) {
    .home-news::before {
      background: transparent;
      /* content: ""; */
    }
    .home-msg {
      margin-top: 2em;
    }
    .home-map {
      height: 300px;
    }
  }

</style>
