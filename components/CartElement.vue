<template>
  <v-list-item dense>
    <v-avatar
      class="ma-3"
      tile
    >
      <v-img :src="product.element.image_url"></v-img>
    </v-avatar>
    <v-list-item-content class="ma-3">
      <v-list-item-title v-text="product.element.productName"></v-list-item-title>
      <div>
        <v-btn
          :disabled="product.amount >= product.element.stock "
          text
          x-small
          class="d-inline pa-1"
          @click="() => $store.dispatch('addCart', product.element)"
        >
          <v-icon x-small>
            mdi-plus
          </v-icon>
        </v-btn>
        <div class="d-inline pa-1 accent-4 ">
          {{ product.amount }}
        </div>
        <v-btn

          text
          x-small
          class="d-inline pa-1"
          @click="() => $store.dispatch('removeProduct', product.element)"
        >
          <v-icon x-small>
            mdi-minus
          </v-icon>
        </v-btn>
      </div>
    </v-list-item-content>
    <v-list-item-action>
      <v-list-item-action-text v-text="`${product.element.price} €`"></v-list-item-action-text>
    </v-list-item-action>
  </v-list-item>
</template>

<script>

export default {
  name: 'CartElement',
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    'product.amount': {
      handler (newVal, oldVal) {
      }
    }
  }
}
</script>
