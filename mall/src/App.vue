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
    this.getUser();
    this.getCartCount()
    // })
  },
  methods: {
    getUser () {
      this.axios.get('/user').then((res) => {
        // to-do 保存到vuex
        this.$store.dispatch('saveUsername', res.username)
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then(() => {
        this.$store.dispatch('savaCartCount', res)
      })
    }
  },
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/base.scss';


</style>
