<template>
  <div>
    
    <order-header></order-header>
    cart
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderFooter from '../components/OrderFooter'
import OrderHeader from '../components/OrderHeader'
export default {
  components: { OrderHeader, OrderFooter},
  name: 'cart'
}
</script>

<style lang="">
  
</style>