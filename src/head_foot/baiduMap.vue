<template>
  <div id="baiduMap" ref="mapH" >
  </div>
</template>
<script>
  export default {
    name: 'baiduMap',
    mounted() {
      var _this = this;
      this.initBaiduMap()
    },
    data() {
      return {
        CityInfo: {
          longitude: 121.547061,
          latitude: 31.281937
        },
        mh: ""
      }
    },
    methods: {
      initBaiduMap() {
        let that = this
        let script = document.createElement("script")
        script.src = "https://api.map.baidu.com/api?v=2.0&ak=zishHhU993mnCRDS3zncmazHuZkIRfti&callback=createMap"
        document.head.appendChild(script)
        window.createMap = () => {
          //创建Map实例
          var map = new BMap.Map("baiduMap"); // 创建Map实例
          var point = new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude);
          var marker = new BMap.Marker(point); // 创建标注
          marker.addEventListener("click", function () {
            that.$confirm('此操作将跳转至百度地图, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              window.location.href = "https://j.map.baidu.com/Xc9FB";
              that.$message({
                type: 'success',
                message: '跳转成功!'

              });
            }).catch(() => {
              that.$message({
                type: 'info',
                message: '已取消'
              });
            });

          });
          map.centerAndZoom(point, 18); // 创建点坐标,初始化地图,设置中心点坐标和地图级别
          // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
          map.addControl(new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
          }));

          map.addOverlay(marker); // 将标注添加到地图中
          marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
          map.addControl(new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT
          }));
          map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
          map.enableInertialDragging(); //两秒后开启惯性拖拽
        }
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #baiduMap {
    width: 100%;
    height: 100%;
  }

</style>
