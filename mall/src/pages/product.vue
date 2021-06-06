<template>
  <div class="product">
    <product-param>
      <template #buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>
import ProductParam from '../components/ProductParam.vue'
export default {
  name: 'product',
  components: {
    ProductParam
  }
}
</script>

<style lang="">
  
</style>