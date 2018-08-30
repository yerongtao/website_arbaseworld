// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/normalize.css' /*引入公共样式*/
import 'babel-polyfill'
import promise from 'es6-promise'
promise.polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// console.log(router)
// let routers =new router();
// routers.map(router);
// routers.start(App, '#app');
// let router = new VueRouter();

// router.map(Routers);
// router.start(App, '#app');