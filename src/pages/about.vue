<template>
  <div class="about-container" style="min-height:100vh">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>关于我们</el-breadcrumb-item>
    </el-breadcrumb>
    <ul class="about-list">
      <li v-for="item in aboutContent" class="about-li" :key="item.id">
        <el-row>
          <el-col :span="13" class="about-left">
            <div class="title">{{ item.title }}</div>
            <div class="subtitle">{{ item.subtitle }}</div>
            <div class="content">
              <p>{{ item.content1 }}</p>
              <p>{{ item.content2 }}</p>
            </div>
          </el-col>
          <el-col :span="11" class="about-right">
            <div class="image" :style="'background:url('+item.image+') no-repeat center;background-size:contain;'">
              <!-- <div class="image">
              <img :src="item.image" alt=""> -->
            </div>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
  var aboutData = [{
      title: "上海璟世数字科技有限公司",
      subtitle: "AR Baseworld Digital Solution",
      image: require("../assets/images/about/about-1.png"),
      content1: "璟世数字科技成立于15年，总部位于上海。我们是家新兴科技与艺术创意相结合的多媒体交互服务商，专注于数字互动体验整体解决方案。拥有丰富的多媒体软硬件研发制作经验，并具有AR SDK的自主研发能力。",
      content2: "公司自创办以来，不断吸纳海内外优秀的多媒体创意人才；聚焦国内多媒体交互市场；利用先进的互动多媒体，将新科技、新创意、新服务源源不断地注入数字化场景娱乐中，努力成为国内外体验营销的领军企业。"
    },
    {
      title: "公司优势",
      subtitle: "Company advantage",
      image: require("../assets/images/about/about-2.png"),
      content1: "璟世科技已实现了将AR项目接入支付宝、天猫、美图秀秀、大众点评等多个平台的AR流量入口，给品牌和商家最方便贴心的服务，解决了先前体验AR互动需要下载APP的门槛，更好地实现AR市场的应用，致力于互联网时代视觉化社交及营销的新局势。AR虚拟交互的功能已经成为市场营销的重要工具。"
    },
    {
      title: "技术团队",
      subtitle: "Technical team",
      image: require("../assets/images/about/about-3.png"),
      content1: "璟世科技拥有核心的底层技术团队，成员皆有高学历教育及留学背景，分别毕业于伯克利大学、哥伦比亚大学、香港理工等海内外知名学府；核心人员曾就职于韩国KORAD科技，参与AR研发工作。底层算法和AR云架构团队，拥有独立开发ARSDK的能力，为产品研发提供扎实的基础。"
    }
  ];

  export default {
    name: "about",
    data() {
      return {
        aboutContent: aboutData
      };
    }
  };

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about-container {
    max-width: 1200px;
    position: relative;
    overflow: visible;
    margin: 0 auto;
    padding: 0 15px;
  }

  .about-list {
    padding-top: 35px;
    position: relative;
    padding: 0;
    border-top: 2px dotted #959595;
  }

  .about-li {
    position: relative;
    overflow: hidden;
    margin-bottom: 70px;
    padding: 0;
  }

  .about-li .el-row {
    padding-top: 30px;
  }

  .about-left {
    padding-right: 35px;
  }

  .about-left .title {
    /* font-family: "Microsoft YaHei"; */
    font-weight: bold;
    font-size: 26px;
    line-height: 39px;
  }

  .about-left .subtitle {
    /* font-family: "Arial"; */
    font-size: 14px;
    line-height: 21px;
    color: #959595;
    padding: 15px 0;
  }

  .about-left .content {
    /* font-family: "SimHei"; */
    font-size: 18px;
    line-height: 32px;
    border-top: 2px dotted #959595;
    padding: 30px 0 0 0;
  }

  .about-left .content p {
    margin: 0;
  }

  .about-left .content p:last-child {
    padding-top: 15px;
  }

  .about-right {
    height: 328px;
    padding-top: 30px;
    position: absolute;
    top: 0;
    /* left: 0; */
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .about-right .image {
    width: 100%;
    height: 100%;
  }

  /* .about-right .image img {
    width: 100%;
    height: 100%;
    position: relative;
  } */

  .el-breadcrumb {
    padding: 65px 0 5px 0;
    font-size: 18px;
    line-height: 27px;
  }

  @media screen and (max-width: 960px) {
    .about-li {
      margin-bottom: 0;
    }
    .about-li .el-row {
      padding-top: 10px;
    }
    .about-left {
      width: 100%;
      padding-right: 0;
    }
    .about-right {
      width: 100%;
      height: 408px;
      padding: 20px 0;
      position: relative;
    }
  }

  @media screen and (max-width: 480px) {
    .about-right {
      width: 100%;
      height: 228px;
      padding: 0;
      position: relative;
    }
  }

</style>
