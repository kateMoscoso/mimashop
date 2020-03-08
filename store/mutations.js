export default {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  addProduct(state, product) {
    const newObject = JSON.parse(JSON.stringify(state.cart))
    const id = product.id
    if (newObject[id]) {
      newObject[id].amount++
    } else {
      newObject[id] = {
        amount: 1,
        element: product
      }
    }
    state.cart = JSON.parse(JSON.stringify(newObject))
    state.amount += product.price
  },
  removeProduct(state, product) {
    if (state.cart[product.id] && state.cart[product.id].amount === 1) {
      delete state.cart[product.id]
    } else {
      state.cart[product.id].amount--
    }
    state.amount -= product.price
  },
  clearCart(state) {
    state.cart = []
  }

}
