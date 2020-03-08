<template>
  <v-list-item>
    <v-avatar
      class="ma-3"
      size="125"
      tile
    >
      <v-img :src="product.element.image_url"></v-img>
    </v-avatar>
    <v-list-item-content>
      <v-list-item-title v-text="product.element.productName"></v-list-item-title>
    </v-list-item-content>
    <v-text-field
      :value="product.amount"
      outlined
      clearable
      disabled
    >
      <template v-slot:prepend>
        <v-btn icon @click="() => $store.dispatch('addCart', product.element)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <template v-slot:append-outer>
        <v-btn icon @click="changeFavorite">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </template>
    </v-text-field>
    <v-spacer></v-spacer>
    <v-list-item-action>
      <v-list-item-action-text v-text="product.element.price"></v-list-item-action-text>
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
  data () {
    return {
      isOpened: false
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
