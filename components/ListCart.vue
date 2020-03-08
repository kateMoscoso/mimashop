<template>
  <div>
    <v-subheader>
      List Products
    </v-subheader>
    <v-divider></v-divider>
    <v-list dense three-line>
      <div
        v-for="product in $store.state.cart"
        :key="product.id"
      >
        <CartElement
          :product.sync="product"
        />
      </div>
    </v-list>
    <v-row justify="center">
      <v-col sm="9">
        <v-btn color="success" dark>
          Checkout
          <v-icon x-small>
            mdi-check
          </v-icon>
        </v-btn>
        {{ $store.state.amount }} €
      </v-col>
    </v-row>
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
