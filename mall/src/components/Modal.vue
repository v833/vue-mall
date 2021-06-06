<template>
  <transition name="slide">
    <div class="modal" v-if="showModal">
      <div class="mask"></div>
        <div class="modal-dialog">
          <div class="modal-header">
            <span>标题</span>
            <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">确定</a>
            <a href="javascript:;" class="btn" v-else-if="btnType == 2" @click="$emit('cancel')">取消</a>
            <div class="btn-group" v-else>
              <a href="javascript:;" class="btn" @click="$emit('submit')">确定</a>
              <a href="javascript:;" class="btn">取消</a>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型: 小框，中框，大框，表单
    modalType: {
      type: String,
      default: 'form'
    },
    title: String,
    btnType: String, // 按钮类型： 1.确定按钮 2.取消按钮 3.确定取消按钮
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import '../assets/scss/modal.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';
</style>