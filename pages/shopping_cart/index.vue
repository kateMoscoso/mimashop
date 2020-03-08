<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      v-for="product in $store.state.cart"
      :key="product.id"
      xs12
      sm8
      md6
    >
      <CartElement
        :product="product"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import CartElement from '~/components/CartElement'

export default {
  components: {
    CartElement
  },
  data () {
    return {
      products: []
    }
  }
}
</script>
