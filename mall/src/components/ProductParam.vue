<template>
  <div class="nav-bar" :class="{'is_fixed': isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
  return {
    isFixed: false
    }
  },
  props: {
    title: String,
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop || document.scrollTop;
      this.isFixed = scrollTop > 152
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight)
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config';
@import '../assets/scss/mixin';
  .nav-bar {
    z-index: 10;
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: $colorG;
    &.is_fixed {
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container {
      @include flex();
      .pro-title {
        font-size: $fontH;
        color: $colorB;
        font-weight: bold;
      }
      .pro-param {
        font-size: $fontJ;
        a {
          display: inline-block;
          color: $colorC;
          &:nth-child(5) {
            margin-right: 10px;
          }
        }
        span {
          margin: 0 10px;
        }

      }
    }
  }
</style>