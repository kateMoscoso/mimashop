export default {
  addCart(vuexContent, product) {
    vuexContent.commit('addProduct', product)
    vuexContent.commit('increment')
  },
  removeProduct(vuexContent, index) {
    vuexContent.commit('removeProduct', index)
    vuexContent.commit('decrement')
  },
  clearCart(vuexContent) {
    vuexContent.commit('clearCart')
  }

}
