export default {
  increment(state) {
    state.amount++
  },
  addProduct(state, product) {
    if (state.cart[product.id]) {
      state.cart[product.id].amount++
    } else {
      state.cart[product.id] = {
        amount: 1,
        element: product
      }
    }
  },
  removeProduct(state, index) {
    // this.deploymentElements.splice(index, 1)
    state.cart.splice(index, 1)
  },
  clearCart(state) {
    state.cart = []
  }

}
