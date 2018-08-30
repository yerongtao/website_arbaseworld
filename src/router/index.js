import Vue from 'vue'
import Router from 'vue-router'
// 页面导入
// import Home from '@/pages/home'
// import News from '@/pages/news'
// import NewsDetail from '@/pages/newsDetail'
// import About from '@/pages/about'
// import Case from '@/pages/case'
// import Contact from '@/pages/contact'
// ajax
import Axios from 'axios'
Vue.prototype.axios = Axios;
// 饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.use(ElementUI);
Vue.use(Router);


// 路由配置
export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      // component: Home,
      component: resolve => require(['@/pages/home'], resolve)
    },
    {
      path: '/home',
      name: 'Home',
      // component: Home,
      component: resolve => require(['@/pages/home'], resolve)
    },
    {
      path: '/news',
      name: 'News',
      // component: News
      component: resolve => require(['@/pages/news'], resolve)
    },
    {
      path: '/about',
      name: 'About',
      // component: About
      component: resolve => require(['@/pages/about'], resolve)
    },
    {
      path: '/case',
      name: 'Case',
      // component: Case
      component: resolve => require(['@/pages/case'], resolve)
    },
    {
      path: '/contact',
      name: 'Contact',
      // component: Contact
      component: resolve => require(['@/pages/contact'], resolve)
    },
    {
      path: '/data',
      component: resolve => require(['@/pages/data'], resolve)
    }

  ]
})
