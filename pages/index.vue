<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
      </div>
      <v-row dense>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="4"
        >
          <Product
            :product="product"
          />
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import Product from '~/components/Product'

export default {
  components: {
    Product
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.$axios
      .get('/grocery')
      .then(response => (this.products = response.data))
  }
}
</script>
