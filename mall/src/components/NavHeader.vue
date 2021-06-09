<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username" @click="loginOut">退出</a>
          <a href="javascript:;" v-else @click="login()">登录</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" v-else>注册</a>
          <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span>购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" autocomplete="off">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      // username: this.$store.getters.username,
      phoneList: [],
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00';
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted() {
    this.getProduceList()
    if (this.$route.params && this.$route.params.from == 'login')
    this.getCartCount()
  },
  methods: {
    getProduceList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
        }
      }).then(res => {
        if (res.list.length > 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    goToCart () {
      this.$router.push('/cart')
    },
    login () {
      this.$router.push('/login')
    },
    loginOut () {
        this.axios.post('/user/logout').then(() => {
        this.$message.success('退出成功!')
        this.$cookie.set('userId', '', {expires: '-1'})
      })
      this.$store.dispatch('saveUsername', '')
      this.$store.dispatch('saveCartCount', 0)
    },
      getCartCount () {
        this.axios.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartCount', res || 0)
      })
    }
  },
  computed: {
    // username () {
    //   return this.$store.getters.username
    // },
    // cartCount () {
    //   return this.$store.state.cartCount
    // }
    ...mapState(['username', 'cartCount'])
  }

}
</script>

<style lang="scss">
@import '../assets/scss/base';
@import '../assets/scss/config';
@import '../assets/scss/mixin';

  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #b0b0b0;
      .container{
        @include flex();
        a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: white;
          margin-right: 0;
          .icon-cart {
            @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          }
        }
      }
    }
    .nav-header {
      .container {
        position: relative;
        height: 112px;
        @include flex();
        .header-menu {
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            line-height: 112px;
            font-size: 16px;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: $colorA;
              .children {
                opacity: 1;
                height: 220px;
                transition: all .5s;
                z-index: 20;
              }
            }
            .children {
              overflow: hidden;
              position: absolute;
              top: 112px;
              left: 0;
              height: 0px;
              opacity: 0;
              width: 1226px;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
              transition: all .5s;
              background-color: #fff;
              .product {
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;
                &:before {
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-right: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before {
                display: none
                }
                a {
                  display: inline-block;
                }
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input {
              box-sizing: border-box;
              border: none;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a {
              @include bgImg(18px, 18px, '/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>