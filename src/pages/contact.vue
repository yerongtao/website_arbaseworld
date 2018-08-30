<template>
  <div class="contact-container" style="min-height:100vh">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>联系我们</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="contact-list">
      <el-col :span="14" class="contact-left">
        <div class="contact-map">
          <baiduMap name=""></baiduMap>
        </div>
      </el-col>
      <el-col :span="10" class="contact-right">
        <div class="contact-msg">
          <div class="contact-msg-top">
            <p>联系我们</p>
            <p>Contact us</p>
          </div>
          <div class="contact-msg-bottom">
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
            <div class="contact-foot-code">
              <div class="contact-foot-code-left">
                <!-- 二维码 -->
                <img src="../assets/images/home/code.png" alt="">
              </div>
              <div class="contact-foot-code-right">
                公众号：ARBaseworld
                <br/> 扫描二维码，即可关注我们！
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: "contact",
    components: {
      baiduMap: resolve => require(["@/head_foot/baiduMap"], resolve)
    },
    data() {
      return {};
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact-map {
    height: 390px;
  }

  .contact-container {
    max-width: 1200px;
    position: relative;
    overflow: visible;
    margin: 0 auto;
    padding: 0 15px;
  }

  .contact-list {
    padding-top: 35px;
    padding: 35px 0 35px 0;
    border-top: 2px dotted #959595;
  }

  .contact-msg {
    padding-left: 60px;
  }

  .contact-msg-top p:first-child {
    /* font-family: "Microsoft YaHei"; */
    font-weight: bold;
    font-size: 26px;
    line-height: 39px;
  }

  .contact-msg-top p:last-child {
    /* font-family: "Arial"; */
    font-size: 14px;
    line-height: 21px;
    color: #959595;
    padding: 20px 0;
  }

  .contact-msg-bottom {
    border-top: 2px dotted #959595;
    padding-top: 30px;
    /* font-family: "SimHei"; */
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;

  }

  .contact-msg-bottom a p {
    padding: 5px 0;
  }

  .contact-msg-bottom a p:hover {
    color: #959595;
  }

  .contact-msg-bottom .contact-foot-code {
    padding: 10px 0;
    /* position: absolute; */
  }

  .contact-msg-bottom .contact-foot-code .contact-foot-code-left {
    display: inline-block;
    float: left;
  }

  .contact-msg-bottom .contact-foot-code .contact-foot-code-right {
    display: inline-block;
    /* float: right; */
    position: relative;
    padding: 20px;
    line-height: 30px;
  }

  .el-breadcrumb {
    padding: 65px 0 5px 0;
    font-size: 18px;
    line-height: 27px;
  }

  /* 响应式 */

  @media screen and (min-width: 960px) and (max-width: 1199px) {
    .contact-msg {
      padding-left: 30px;
    }
    .contact-msg-bottom .contact-foot-code .contact-foot-code-right {
      padding: 20px 10px;
    }
  }

  @media screen and (max-width: 959px) {
    .contact-left {
      width: 100%;
    }
    .contact-right {
      width: 100%;
    }
    .contact-right .contact-msg {
      padding-left: 0;
      padding-top: 35px;
    }
  }

  @media screen and (max-width: 479px) {
    .contact-msg-bottom .contact-foot-code .contact-foot-code-right {
      padding: 20px 0 20px 20px;
    }
  }

  @media screen and (max-width: 349px) {
    .contact-msg-bottom .contact-foot-code .contact-foot-code-right {
      padding: 10px 5px;
    }
  }

</style>
