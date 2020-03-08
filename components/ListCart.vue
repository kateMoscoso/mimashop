<template>
  <div>
    <v-subheader>
      List Products
    </v-subheader>
    <v-divider></v-divider>
    <v-list dense three-line>
      <v-template
        v-for="product in $store.state.cart"
        :key="product.id"
      >
        <CartElement
          :product="product"
        />
      </v-template>
    </v-list>
  </div>
</template>
<script>
import CartElement from '~/components/CartElement'

export default {
  name: 'ListCart',
  components: {
    CartElement
  }
}
</script>
