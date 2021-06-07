import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' // 每个页面都要去写，导入
import VueAxios from 'vue-axios' // 作用域对象挂载在vue实例上
// import env from './env'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

const mock = false; // 希望mock开关打开时被拦截，用require而不是import
if (mock) {
  // import 预编译加载 require 执行加载，如果未需要，不加载
  require('./mock/api')
}

// 根据前端的跨域方式做调整 (接口代理除外)
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000; // 超时时间

// 根据环境变量获取不同请求的地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) { // 成功
    return res.data
  } else if (res.status == 10) { // 未登录 自定义状态码
    if (path !== '#/index') { // 处于首页不需要跳转login
      window.location.href = '/#/login'
      // 路由是挂载在vue实例中 这里是js文件 不能用路由跳转
    }
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)
Vue.config.productionTip = false
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


