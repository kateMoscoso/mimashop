export default {
  addCart(vuexContent, product) {
    vuexContent.commit('addProduct', product)
    vuexContent.commit('increment')
  },
  removeProduct(vuexContent, index) {
    vuexContent.commit('removeProduct', index)
  },
  clearCart(vuexContent) {
    vuexContent.commit('clearCart')
  }

}
