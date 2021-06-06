export default {
  saveUsername (context, username) {
    context.commit('saveUsername', username)
  },
  saveCartCount (context, count) {
    context.commit('saveCartCount', count)
  }
}