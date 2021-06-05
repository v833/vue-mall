<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide></swiper-slide>
    </swiper>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper' // swiper组件很大，按需加载
import 'swiper/dist/css/swiper.css'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  components: { ServiceBar, swiper, swiperSlide },
  name: 'index',
  data () {
    return {
      swiperOption: {

      }
    }
  }
}
</script>

<style lang="">
  
</style>