<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javescript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index1) in menuList" :key="index1">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="sub ? '/#/product/' + sub.id : '' ">
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                      {{sub ? sub.name : '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javescript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javescript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javescript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javescript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javescript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="item of adsList" :key="item.id">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
  <div class="product-box">
        <div class="container">
          <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, index1) of phoneList" :key="index1">
              <div class="item" v-for="(item, index) of arr" :key="index">
                <span :class="{'new-pro' : index % 2 == 0}">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看详情"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit= "goToCart"
      @cancel="showModal=false"
      >
      <template #body> <p>商品添加成功！</p> </template>
    </modal>
  </div>
</template>

<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper' // swiper组件很大，按需加载
import 'swiper/dist/css/swiper.css'
import ServiceBar from '../components/ServiceBar.vue'
import Modal from '../components/Modal.vue'
export default {
  name: 'index',
  components: { 
    ServiceBar,
    swiper,
    swiperSlide,
    Modal
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        // 循环播放
        loop: true,
        // 切换效果
        effect: 'cube',
        pagination: {
          el: '.swiper-pagination',
          // 点击分页器切换
          clickable :true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-5.jpg'
        },
      ],
      menuList: [ // 二维数组
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name:'小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name:'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name:'移动4G专区'
          }
        ],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png',
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg',
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png',
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg',
        }
      ],
      phoneList: [],
      showModal: false
    }
  },
  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then(res => {
        this.phoneList = [res.list.slice(6, 10), res.list.slice(10, 14)]
      })
    },
    addCart (productId) {
      this.axios.post('/carts', {
        productId,
        selected: true
      }).then((res) => {
        this.showModal = true
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
      }).catch(() => {
        this.showModal = true
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  },
  mounted() {
    this.init()
  },

}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/config';
  @import '../assets/scss/mixin';
  .index {
    .swiper-box {
      position: relative;
      .swiper-container {
        height: 451px;
        img {
          height: 100%;
          width: 100%;
        }
        .swiper-button-prev {
          left: 274px
        }
      }
      .nav-menu {
        box-sizing: border-box;
        width: 264px;
        height: 451px;
        background-color: #55585A7a;
        position: absolute;
        z-index: 10;
        padding: 26px 0;
        .menu-wrap {
          .menu-item {
            // position: relative;
            height: 50px;
            line-height: 50px;
            a {
              display: block;
              position: relative;
              font-size: 16px;
              color: white;
              padding-left: 30px;
              &:after {
                content: ' ';
                position: absolute;
                right: 30px;
                top: 17.5px;
                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                vertical-align: middle;
              }
            }
            &:hover {
              background-color: $colorA;
              .children {
                display: block;
              }
            }
            .children {
              display: none;
              width: 962px;
              height: 451px;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid colorH;
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                background-color: #fff;
                li {
                  height: 75px;
                  left: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
    .ads-box {
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
      }
    }
    .banner {
      margin-bottom: 50px;
    }
    .product-box {
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box {
          .list {
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: white;
                &.new-pro {
                  background-color: #7ECF68;
                }
                &.kill-pro {
                  background-color: #E82626;
                }
              }
              .item-img {
                img {
                  width: 100%;
                  height: 195px;
                }
              }
              .item-info {
                h3 {
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price {
                  color: #F20A0A;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &:after {
                    content: ' ';
                    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                    vertical-align: middle;
                    margin-left: 5px;
                    
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>