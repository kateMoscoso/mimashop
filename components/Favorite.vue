<template>
  <v-list-item dense>
    <v-list-item-avatar>
      <v-img :src="favorite.image_url"></v-img>
    </v-list-item-avatar>
    <v-list-item-content dense>
      <v-list-item-title>{{ favorite.productName }}</v-list-item-title>
      <v-list-item-subtitle dense>
        {{ favorite.productDescription }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script>

export default {
  name: 'Favorite',
  props: {
    favorite: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
    }
  }

}
</script>
