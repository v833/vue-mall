<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      res: {}
    }
  },
  mounted() {
    // 本地加载请求静态json
    // this.axios.get('/mock/user/login.json').then(res => {
    //   this.res = res
    // })

    // 本地集成mockjs实现数据mock 没有发送真正的请求，代码阶段拦截
    // this.axios.get('/user/login').then(res => {
    //   this.res = res
    // })
  },
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button';


</style>
