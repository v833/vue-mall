<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in sliderList" :key="index">
            <a href="'/#/product/' + item.id"><img :src="item.img"></a>
          </swiper-slide>
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
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'index',
  components: { 
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {

      },
      sliderList: [
        {
          id: '42',
          img: '/imgs/slider/slider-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slider-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slider-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slider-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slider-5.jpg'
        },
      ]
    }
  }
  
}
</script>

<style lang="scss">
  
</style>