import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  username: '', // 登录用户名
  cartCount: 0, // 购物车数量
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
