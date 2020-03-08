<template>
  <div>
    <v-list-item>
      <v-avatar
        class="ma-3"
        tile
      >
        <v-img :src="product.element.image_url"></v-img>
      </v-avatar>
      <v-list-item-content class="ma-3">
        <v-list-item-title v-text="product.element.productName"></v-list-item-title>
        <div>
          <v-btn text class="d-inline pa-2  ">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div class="d-inline pa-2 accent-4 ">
            0
          </div>
          <v-btn text class="d-inline pa-2  ">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </div>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text v-text="`${product.element.price} €`"></v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </div>
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
    removeElement () {
      console.log('remove')
    }
  }
}
</script>
