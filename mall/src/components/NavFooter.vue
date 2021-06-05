<template>
  <div class="footer">
    <div class="footer-logo">
    <img src="/imgs/logo-footer.png" alt="">
    <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">主页</a><span>|</span>
      <a href="">Vue全栈</a><span>|</span>
      <a href="">React全家桶</a><span>|</span>
      <a href="">微信支付</a>
    </div>
    <div class="copyright">
      Copyright  © 2021 <span>mi.future.com All</span> Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      margin-bottom: 13px;
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      span {
        color: #FF6600
      }
    }
  }
</style>