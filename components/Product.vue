<template>
  <v-card>
    <v-img
      :src="product.image_url"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="product.productName"></v-card-title>
    </v-img>
    <v-card-subtitle>{{ product.productDescription }}</v-card-subtitle>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-icon>mdi-currency-eur</v-icon>
        <div class="grey--text ml-4">
          {{ product.price }}
        </div>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        icon
      >
        <span>{{ product.stock }}</span>
        <v-icon>{{ product.stock > 0 ? 'mdi-cart-outline': 'mdi-cart-off' }}</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon color="red" @click="changeFavorite">
        <v-icon>{{ product.favorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
      </v-btn>
      <v-btn icon @click="() => $store.dispatch('addCart', product)">
        <v-icon>{{ isAvailable ? 'mdi-cart-plus' : 'mdi-cart-off' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      isOpened: false
    }
  },
  computed: {
    isAvailable() {
      return this.product.stock > 0 &&
      (!this.$store.state.cart[this.product.id] ||
        this.product.stock > this.$store.state.cart[this.product.id].amount)
    }
  },
  methods: {
    async changeFavorite() {
      await this.$axios
        .patch(`/grocery/${this.product.id}`, { favorite: this.product.favorite ? 0 : 1 })
        .then((response) => {
          this.$emit('reload')
        })
    }
  }
}
</script>
