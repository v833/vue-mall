<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javescript:;">手机 电话卡</a>
              <div class="children"></div>
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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar.vue'
import { swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'index',
  components: { 
    ServiceBar,
    swiper,
    swiperSlide
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
      ]
    }
  }
  
}
</script>

<style lang="scss">
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
            }
          }
        }
      }
    }
  }
</style>